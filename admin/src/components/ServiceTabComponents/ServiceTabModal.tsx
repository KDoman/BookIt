import Checkbox from "../form/input/Checkbox";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import { Service } from "./ServicesTab";

export const ServiceTabModal = ({
  editedService,
  setEditedService,
  setServiceArray,
  serviceArray,
  isOpen,
  closeModal,
  deleteService,
}: {
  editedService: Service | null;
  setEditedService: (arg: Service) => void;
  setServiceArray: (arg: Service[]) => void;
  serviceArray: Service[];
  isOpen: boolean;
  closeModal: () => void;
  deleteService: (arg: string | undefined) => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-[700px] p-6 lg:p-10"
    >
      <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
        <div>
          <h5 className="mb-8 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
            {editedService?.service.name}
          </h5>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Nazwa usługi
            </label>
            <input
              id="event-title"
              type="text"
              defaultValue={editedService?.service.name}
              onChange={(e) =>
                editedService &&
                setEditedService({
                  ...editedService,
                  service: {
                    ...editedService?.service,
                    name: e.target.value,
                  },
                })
              }
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Cena usługi
            </label>
            <input
              id="event-title"
              type="number"
              defaultValue={editedService?.service.price}
              onChange={(e) =>
                editedService &&
                setEditedService({
                  ...editedService,
                  service: {
                    ...editedService?.service,
                    price: Number(e.target.value),
                  },
                })
              }
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Czas usługi (minuty)
            </label>
            <input
              id="event-title"
              type="number"
              defaultValue={editedService?.service.time}
              onChange={(e) =>
                editedService &&
                setEditedService({
                  ...editedService,
                  service: {
                    ...editedService?.service,
                    time: Number(e.target.value),
                  },
                })
              }
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
          <div className="flex gap-4">
            <Badge
              size="sm"
              color={editedService?.isActive ? "success" : "error"}
            >
              {editedService?.isActive ? "Włączony" : "Wyłączony"}
            </Badge>
            <Checkbox
              id="checkbox_active"
              checked={!!editedService?.isActive}
              onChange={() =>
                editedService &&
                setEditedService({
                  ...editedService,
                  isActive: !editedService?.isActive,
                })
              }
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end  ">
          <Button
            className="h-11 bg-red-300 hover:bg-red-400"
            onClick={() => deleteService(editedService?.id)}
          >
            <p className="text-black">Usuń</p>
          </Button>
          <div className="flex gap-4 w-full justify-between">
            <button
              onClick={closeModal}
              type="button"
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
            >
              Zamknij
            </button>
            <button
              type="button"
              className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
              onClick={() => {
                if (editedService)
                  setServiceArray(
                    serviceArray.map((service: Service) => {
                      if (service.id === editedService.id) {
                        return editedService;
                      } else {
                        return service;
                      }
                    })
                  );
                closeModal();
              }}
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
