import { HStack } from "@chakra-ui/react";
import { PreviousAndNextButtons } from "../types/PreviousAndNextButtons";
import React from "react";
import MoveButton from "./MoveButton";

const PreviousAndNextButtons = ({
  previousFile,
  nextFile,
}: PreviousAndNextButtons) => {
  return (
    <HStack pb={10} w="full" spacing={10}>
      {previousFile && (
        <MoveButton
          type="previous"
          file={previousFile}
          oppositeFile={nextFile}
        />
      )}

      {nextFile && (
        <MoveButton type="next" file={nextFile} oppositeFile={previousFile} />
      )}
    </HStack>
  );
};

export default PreviousAndNextButtons;
