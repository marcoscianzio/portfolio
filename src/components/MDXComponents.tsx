import {
  Badge,
  BadgeProps,
  Heading,
  HeadingProps,
  ListItem,
  ListItemProps,
  ListProps,
  Text,
  TextProps,
  UnorderedList,
} from "@chakra-ui/react";
import Cover from "./Cover";
import Date from "./Date";
import GalleryImage from "./GalleryImage";
import SyntaxHighlighter from "./SyntaxHighlighter";

export default {
  h2: (props: HeadingProps) => (
    <Heading as="h2" pt={10} pb={10} fontSize="4xl" color="#fff" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <Heading as="h3" pt={4} pb={10} fontSize="2xl" color="#fff" {...props} />
  ),
  p: (props: TextProps) => (
    <Text as="p" color="#fff" pb={10} fontSize="xl" {...props} />
  ),
  ul: (props: ListProps) => <UnorderedList spacing={6} pb={10} {...props} />,
  li: (props: ListItemProps) => (
    <ListItem color="#fff" fontSize="xl" {...props} />
  ),
  code: (props: BadgeProps) => (
    <Badge
      as="code"
      rounded="lg"
      bg="#282a36"
      color="#fff"
      borderWidth={1}
      borderColor="#ffffff0f"
      fontSize="md"
      {...props}
    />
  ),
  pre: SyntaxHighlighter,
  Cover,
  Date,
  GalleryImage,
};
