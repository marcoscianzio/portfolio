import {
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useFormattedDate } from "src/hooks/useFormattedDate";

interface DateProps {
  date: string;
  role?: string | null | undefined;
}

const Date = ({ date, role }: DateProps) => {
  const { formattedDate } = useFormattedDate(date);

  return (
    <Stack spacing={4}>
      <Stack
        direction={{ md: "row", base: "column" }}
        align={{ md: "center", base: "start" }}
        spacing={{ md: 6, base: 2 }}
      >
        <Stack
          spacing={{ md: 6, base: 2 }}
          direction={{ md: "row", base: "column" }}
        >
          <AvatarGroup size="md" max={3}>
            <Avatar name="Marcos Cianzio" src="/me.jpg"/>
          </AvatarGroup>

          <Stack spacing={-1}>
            <Text color="white" fontSize="xl">
              Marcos Cianzio{" "}
            </Text>
            <Text textTransform="capitalize" fontSize="xl" color="#b7b4c7">
              {formattedDate}
            </Text>
          </Stack>
        </Stack>

        {role && (
          <Badge
            as="code"
            rounded="lg"
            bg="#282a36"
            color="#fff"
            borderWidth={1}
            borderColor="#ffffff0f"
            fontSize="md"
          >
            {role}
          </Badge>
        )}
      </Stack>
      <Divider borderWidth={1} borderColor="#ffffff0f"></Divider>
    </Stack>
  );
};

export default Date;
