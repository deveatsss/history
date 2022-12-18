import { useQuery } from "react-query";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    let calendarEl: HTMLElement = document.getElementById("calendar")!;

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      // options here
    });

    calendar.render();
  }, []);

  const onCreateTask = () => {};

  return (
    <div>
      <button onClick={onCreateTask}>create task</button>
      <div id="calendar" />
    </div>
  );
}

export default Home;
