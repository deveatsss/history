import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import {useEffect, useState} from "react";
import ModalPortal from "./components/ModalPortal";
import CreateTaskModal from "./components/CreateTaskModal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    let calendarEl: HTMLElement = document.getElementById("calendar")!;

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      // options here
    });

    calendar.render();
  }, []);

  const onCreateTask = () => setModalOpen(true);
  const onCloseCrateTask = () => setModalOpen(false);

  return (
    <div>
      <button onClick={onCreateTask}>create task</button>
      <div id="calendar" />
      {modalOpen && (
          <ModalPortal>
            <CreateTaskModal onClose={onCloseCrateTask}/>
          </ModalPortal>
      )}
    </div>
  );
}

export default Home;
