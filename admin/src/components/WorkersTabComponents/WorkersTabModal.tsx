import { Dispatch, SetStateAction, useState } from "react";
import Checkbox from "../form/input/Checkbox";
import Badge from "../ui/badge/Badge";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import { Worker } from "./WorkersTab";

export const WorkersTabModal = ({
  isOpen,
  closeModal,
  editedWorker,
  setEditedWorker,
  setWorkersArray,
  workersArray,
}: {
  isOpen: boolean;
  closeModal: () => void;
  editedWorker: Worker | undefined;
  setEditedWorker: Dispatch<SetStateAction<Worker>>;
  setWorkersArray: Dispatch<SetStateAction<Worker[]>>;
  workersArray: Worker[];
}) => {
  const [isDeleteModeOn, setIsDeleteModeOn] = useState<boolean>(false);

  const deleteWorker = (id: number) => {
    setWorkersArray(
      workersArray.filter((worker: Worker) => {
        return worker.id !== id;
      })
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal();
      }}
      className="max-w-[700px] p-6 lg:p-10"
    >
      <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
        <div>
          <h5 className="mb-8 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
            Edytuj pracownika
          </h5>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Imię
            </label>
            <input
              id="event-title"
              type="text"
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
              defaultValue={editedWorker?.name}
              onChange={(e) =>
                editedWorker &&
                setEditedWorker({ ...editedWorker, name: e.target.value })
              }
            />
          </div>

          <div className="flex gap-4">
            <Checkbox
              id="checkbox_active"
              checked={!!editedWorker?.isActive}
              onChange={() =>
                editedWorker &&
                setEditedWorker({
                  ...editedWorker,
                  isActive: !editedWorker?.isActive,
                })
              }
            />
            <Badge
              size="sm"
              color={editedWorker?.isActive ? "success" : "error"}
            >
              {editedWorker?.isActive ? "Aktywny" : "Nieaktywny"}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end  ">
          <Button
            className="h-11 bg-red-300 hover:bg-red-400"
            onClick={() => setIsDeleteModeOn(true)}
          >
            <p className="text-black">Usuń</p>
          </Button>
          <div className="flex gap-4 w-full justify-between">
            <button
              type="button"
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
              onClick={() => {
                closeModal();
                setIsDeleteModeOn(false);
              }}
            >
              Zamknij
            </button>
            <button
              type="button"
              className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
              onClick={() => {
                if (editedWorker) {
                  setWorkersArray(
                    workersArray.map((worker) => {
                      if (worker.id === editedWorker?.id) {
                        return editedWorker;
                      } else {
                        return worker;
                      }
                    })
                  );
                  closeModal();
                  setIsDeleteModeOn(false);
                }
              }}
            >
              Zapisz
            </button>
          </div>
        </div>
        {isDeleteModeOn && (
          <div className="bg-red-100 mt-6 p-2 rounded-lg flex justify-between items-center">
            <p>Czy na pewno chcesz usunąć tego pracownika?</p>
            <div className="flex items-center gap-4">
              <Button
                className="h-11 bg-red-300 hover:bg-red-400"
                onClick={() => {
                  if (editedWorker) deleteWorker(editedWorker?.id);
                  setIsDeleteModeOn(false);
                  closeModal();
                }}
              >
                <p className="text-black">Usuń</p>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
