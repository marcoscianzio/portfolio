import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Metadata } from "./Metadata";
import { previousOrNextFile } from "./PreviousOrNextFile";

export interface PostPage {
  slug: string;
  source: MDXRemoteSerializeResult;
  content: string;
  metadata: Metadata;
  nextFile: previousOrNextFile;
  previousFile: previousOrNextFile ;
}
