let highlightStart = false;
const highlightClassName = "highlight-line";

export const highlightLine = (lineArray: any[], lineProps: any) => {
  let shouldExclude = false;

  lineArray.forEach((line) => {
    const content = line.content;

    // Highlight lines with "// highlight-line"
    if (content.replace(/\s/g, "").includes("//highlight-line")) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`;
      line.content = content
        .replace("// highlight-line", "")
        .replace("//highlight-line", "");
    }

    // Stop highlighting
    if (!!highlightStart && content.replace(/\s/g, "") === "//highlight-end") {
      highlightStart = false;
      shouldExclude = true;
    }

    // Start highlighting after "//highlight-start"
    if (content.replace(/\s/g, "") === "//highlight-start") {
      highlightStart = true;
      shouldExclude = true;
    }
  });

  // Highlight lines between //highlight-start & //highlight-end
  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`;
  }

  return shouldExclude;
};
