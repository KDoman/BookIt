import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export const ReviewMessageModal = ({
  message,
  rate,
}: {
  message: string;
  rate: number;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Twoja recenzja</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Twoja recenzja
              </ModalHeader>
              <ModalBody>
                <p>
                  <span className="font-semibold mr-3">Twoja ocena:</span>
                  <span className="font-semibold">{rate}</span> / 5
                </p>
                <p>
                  <p className="font-semibold">Wiadomość</p>
                  <p>{message}</p>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
