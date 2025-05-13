import { Modal } from "../ui/modal";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import pllocale from "@fullcalendar/core/locales/pl";
import { useState } from "react";
import { Worker } from "./WorkersTab";
import { useModal } from "../../hooks/useModal";
import { WorkdayScheduleModal } from "./WorkdayScheduleModal";

export const WorkerSchedule = ({
  isOpen,
  closeModal,
  editedWorker,
}: {
  isOpen: boolean;
  closeModal: () => void;
  editedWorker: Worker;
}) => {
  const {
    isOpen: isWorkdayOpen,
    openModal: openWorkDay,
    closeModal: closeWorkDay,
  } = useModal();
  const [events, setEvents] = useState<any[]>([]);

  const handleDateClick = (arg: any) => {
    openWorkDay();
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: arg.date,
          allDay: true,
        },
      ]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-[900px] p-4 lg:p-10 max-h-[90vh] overflow-y-scroll"
    >
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Ustaw grafik pracownika{" "}
        <span className="block mt-2">{editedWorker.name}</span>
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth",
        }}
        locale={pllocale}
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        height="auto"
      />
      <WorkdayScheduleModal
        isOpen={isWorkdayOpen}
        closeModal={closeWorkDay}
        worker={editedWorker}
      />
    </Modal>
  );
};
