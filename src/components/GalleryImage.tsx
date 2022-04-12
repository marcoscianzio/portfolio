import {
  Image,
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
          src={image}
          alt={alt}
        />

        {caption && (
          <Text as="em" mt="-30px" color="#b7b4c7" fontSize="large">
            {caption}
          </Text>
        )}
      </Stack>

      <Modal size="6xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="90vh" rounded="lg">
          <Image rounded="lg" objectFit="cover" w="full" h="full" src={image} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryImage;
