import {
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GalleryImage } from "../types/GalleryImage";
import { ChakraNextImage } from "./CharkaNextImage";

const GalleryImage = ({ caption, image, alt }: GalleryImage) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack pb={10}>
        <ChakraNextImage
          cursor="zoom-in"
          onClick={onOpen}
          h="500px"
          bg="#282a36"
          rounded="lg"
          objectFit="contain"
          src={image}
          alt={alt}
        />

        {caption && (
          <Text as="em" mt="-30px" color="#b7b4c7" fontSize="lg">
            {caption}
          </Text>
        )}
      </Stack>

      <Modal size="6xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="90vh" rounded="lg">
          <ChakraNextImage objectFit="contain" h="full" src={image} alt={alt} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryImage;
