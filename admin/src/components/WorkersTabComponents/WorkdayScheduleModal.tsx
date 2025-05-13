import { Modal } from "../ui/modal";
import { Worker } from "./WorkersTab";

export const WorkdayScheduleModal = ({
  isOpen,
  closeModal,
  worker,
}: {
  isOpen: boolean;
  closeModal: () => void;
  worker: Worker;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-[900px] p-4 lg:p-10 max-h-[90vh] "
    >
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Ustaw grafik pracownika{" "}
        <span className="block mt-2">{worker.name}</span>
      </h2>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          Wpisz liczbę godzin pracujących
        </label>
        <input
          id="event-title"
          type="number"
          onChange={(e) => setName(e.target.value)}
          className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        />
      </div>
    </Modal>
  );
};
