import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ModalPortal from './components/ModalPortal';
import CreateTaskModal from './components/CreateTaskModal';

function Detail() {
  const { id } = useParams<{ id: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const onCloseCrateTask = () => setModalOpen(false);

  const { isLoading, data, refetch } = useQuery(
    ["task", "detail", id],
    async () =>
      await fetch(`/task/${id}`).then(
        (res) => res.json() as Promise<{ data: Task }>
      )
  );

  useEffect(() => {
    if (!isLoading && data?.data) {
      const { coordinate } = data.data;
      if (coordinate) {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

        // 마커가 표시될 위치입니다
        // @ts-ignore
        var markerPosition = new kakao.maps.LatLng(
          coordinate.latitude,
          coordinate.longitude
        );

        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          // @ts-ignore
          center: markerPosition,
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        // @ts-ignore
        const map = new kakao.maps.Map(container, options);

        // 마커를 생성합니다
        // @ts-ignore
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      }
    }
  }, [isLoading]);

  if (isLoading || !data?.data) {
    return <div>loading...</div>;
  }

  const { title, createdDt, editedDt, description, creator, placeName } =
    data.data;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div style={{ width: "80%" }} className="py-7 flex-col flex divide-y">
        <div className="pt-7 pb-5 gap-2.5 flex">
          <div className='flex flex-col'>
            <p className="font-sans text-4xl font-normal text-slate-700">
              {title}
              <span className="text-sm text-slate-600">&nbsp; by {creator}</span>
            </p>
            <p className="text-sm text-slate-600">
              {dayjs(createdDt).format("YYYY-MM-DD")}
            </p>
          </div>
          <button
            className='ml-auto border-solid border border-gray-300 text-sm h-12'
            onClick={() => setModalOpen(true)}>
            Edit Task
          </button>
        </div>
        <div className="flex-col flex ">
          <div className="pt-2">{description}</div>
          <div className="py-7 flex-col flex ">
            <p className="pt-2 font-medium text-lg text-slate-600">
              {placeName}
            </p>
            <div id="map" style={{ width: "100%", height: "400px" }}></div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ModalPortal>
          <CreateTaskModal data={data?.data} onClose={onCloseCrateTask} refetch={refetch} />
        </ModalPortal>
      )}
    </div>
  );
}

export default Detail;
