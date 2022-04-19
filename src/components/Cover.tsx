import React from "react";
import { ChakraNextImage } from "./CharkaNextImage";

const Cover = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <ChakraNextImage
      objectFit="cover"
      alt={alt}
      src={image}
      h="400px"
    ></ChakraNextImage>
  );
};

export default Cover;
