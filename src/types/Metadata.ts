export interface Metadata {
  slug: string;
  cover: string;
  title: string;
  date: string;
  type: string;
  role?: string;
  workWith?:
    | {
        name?: string;
        pic?: string;
      }[]
    | undefined
    | null;
  selected?: boolean;
}
