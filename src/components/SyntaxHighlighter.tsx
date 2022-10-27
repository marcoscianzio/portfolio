import { Box } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import { highlightLine } from "../utils/highlightLine";

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
          fontFamily="Fira Code"
          borderWidth={1}
          fontSize="xl"
          borderColor="#ffffff0f"
          overflowX="auto"
          p={4}
          as="pre"
          className={className}
          style={{ ...style }}
        >
          {tokens.slice(0, -1).map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            const shouldExclude = highlightLine(line, lineProps);

            return !shouldExclude ? (
              <div {...lineProps} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ) : null;
          })}
        </Box>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
