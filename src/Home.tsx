import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import ModalPortal from "./components/ModalPortal";
import CreateTaskModal from "./components/CreateTaskModal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    ["task", "list"],
    async () =>
      await fetch("/task/list").then(
        (res) => res.json() as Promise<{ data: Task[] }>
      )
  );

  const onNavigateDetailPage = (id: string) => {
    navigate(id);
  };

  useEffect(() => {
    if (!isLoading && data?.data) {
      let calendarEl: HTMLElement = document.getElementById("calendar")!;

      const events = data.data.map((task) => ({
        id: task.id,
        title: task.title,
        start: task.createdDt,
        allDay: true,
        backgroundColor: "tomato",
        borderColor: "tomato",
      }));

      let calendar = new Calendar(calendarEl, {
        initialView: "dayGridMonth",
        plugins: [interactionPlugin, dayGridPlugin],
        editable: true,
        events: events,
        eventClick: (info) => onNavigateDetailPage(info.event.id),
        // @ts-ignore
        dateClick: (info) => console.log(info),
      });
      calendar.render();
    }
  }, [isLoading]);

  const onCreateTask = () => setModalOpen(true);
  const onCloseCrateTask = () => setModalOpen(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <button onClick={onCreateTask}>create task</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div id="calendar" style={{ flex: 1 }} />
      )}
      {modalOpen && (
        <ModalPortal>
          <CreateTaskModal onClose={onCloseCrateTask} />
        </ModalPortal>
      )}
    </div>
  );
}

export default Home;
