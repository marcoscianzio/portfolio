import {
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface DateProps {
  date: string;
  workWith:
    | {
        name?: string;
        pic?: string;
      }[]
    | undefined
    | null;
  role?: string | null | undefined;
}

const Date = ({ date, workWith, role }: DateProps) => {
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
            <Avatar name="Marcos Cianzio" />
            {workWith &&
              workWith.map(({ name, pic }, i) => {
                return <Avatar key={i} name={name} src={pic} />;
              })}
          </AvatarGroup>

          <Stack spacing={-1}>
            <Text color="white" fontSize="xl">
              Marcos Cianzio{" "}
              {workWith && Boolean(workWith.length)
                ? workWith.length > 1
                  ? "and others"
                  : `& ${workWith[0].name}`
                : null}
            </Text>
            <Text fontSize="xl" color="#b7b4c7">
              {date}
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
