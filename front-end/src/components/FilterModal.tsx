import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  TimeInput,
  Calendar,
} from "@heroui/react";
import { getCurrentDate } from "../helpers/getCurrentDate";
import { useDispatch, useSelector } from "react-redux";
import { SearchFilter, setCityFilter } from "../redux/slices/searchFilterSlice";
import { RootState } from "../redux/store";

export default function FilterModal({
  setFilteredArray,
}: {
  setFilteredArray: () => void;
}) {
  const dispatch = useDispatch();
  const searchFilter: SearchFilter = useSelector(
    (state: RootState) => state.searchFilter
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex gap-4 relative">
        <Button className="flex-1" onPress={onOpen}>
          Ustaw Filtr
        </Button>
        <Button className="flex-1" onPress={setFilteredArray}>
          Szukaj
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="overflow-scroll"
      >
        <ModalContent className="h-fit overflow-scroll">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filtry</ModalHeader>
              <ModalBody>
                <Input
                  variant="faded"
                  label="Miasto"
                  labelPlacement="inside"
                  defaultValue={searchFilter.city}
                  onChange={(e) => dispatch(setCityFilter(e.target.value))}
                />
                <TimeInput
                  granularity="minute"
                  hourCycle={24}
                  label="Ustaw czas"
                  variant="faded"
                />
                <Calendar
                  aria-label="Date (No Selection)"
                  className="mx-auto"
                  color="foreground"
                  minValue={getCurrentDate()}
                />
              </ModalBody>
              <ModalFooter className="sticky bottom-0 w-full bg-white">
                <Button variant="bordered" onPress={onClose}>
                  Zamknij
                </Button>
                <Button onPress={onClose}>Szukaj</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
