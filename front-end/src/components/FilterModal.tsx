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

export default function FilterModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex gap-4">
        <Button className="flex-1" onPress={onOpen}>
          Ustaw Filtr
        </Button>
        <Button className="flex-1">Szukaj</Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="max-h-screen overflow-scroll"
      >
        <ModalContent className="h-[400px] overflow-scroll">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filtry</ModalHeader>
              <ModalBody>
                <Input variant="faded" label="Miasto" labelPlacement="inside" />
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
