import { Box } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

const SyntaxHighlighter = ({ children }: any) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight
      language={language}
      {...defaultProps}
      theme={dracula}
      code={code}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          mb={10}
          rounded="lg"
          fontFamily="Cascadia Code"
          borderWidth={1}
          fontSize="xl"
          borderColor="#ffffff0f"
          overflowX="auto"
          p={4}
          as="pre"
          className={className}
          style={{ ...style }}
        >
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
