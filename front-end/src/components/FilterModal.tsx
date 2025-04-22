import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Calendar,
} from "@heroui/react";
import { getCurrentDate } from "../helpers/getCurrentDate";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchFilter,
  setCityFilter,
  setDateFilter,
} from "../redux/slices/searchFilterSlice";
import { RootState } from "../redux/store";
import { parseDate } from "@internationalized/date";

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

  const setFiltersOnClick = () => {
    setFilteredArray();
    onOpenChange();
  };

  const clearFilters = () => {
    dispatch(setCityFilter(undefined));
    dispatch(setDateFilter(undefined));
    setFiltersOnClick();
    onOpenChange();
  };

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
          {() => (
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

                <Calendar
                  aria-label="Date (No Selection)"
                  className="mx-auto"
                  color="foreground"
                  minValue={getCurrentDate()}
                  onChange={(e) =>
                    dispatch(
                      setDateFilter(
                        String(
                          `${e.year}-${
                            e.month < 10 ? `0${e.month}` : e.month
                          }-${e.day}`
                        )
                      )
                    )
                  }
                  defaultValue={
                    searchFilter.date ? parseDate(searchFilter.date) : undefined
                  }
                />
              </ModalBody>
              <ModalFooter className="sticky bottom-0 w-full bg-white">
                <Button variant="bordered" onPress={clearFilters}>
                  Wyczyść filtry
                </Button>
                <Button onPress={setFiltersOnClick}>Ustaw</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
