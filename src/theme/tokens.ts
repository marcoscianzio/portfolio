type SemanticTokens = {
  colors: {
    [key: string]: {
      default?: string;
      _dark?: string;
    };
  };
};

export const semanticTokens: SemanticTokens = {
  colors: {
    bg: {
      default: "#13111a",
    },
  },
};
