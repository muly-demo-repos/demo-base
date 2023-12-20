import { App as TApp } from "../api/app/App";

export const APP_TITLE_FIELD = "dirName";

export const AppTitle = (record: TApp): string => {
  return record.dirName?.toString() || String(record.id);
};
