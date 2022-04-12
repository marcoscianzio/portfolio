import { ChangeEventHandler } from "react";

export interface Search {
  handleSearch: ChangeEventHandler<HTMLInputElement> | undefined;
}
