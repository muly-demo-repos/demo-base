import { AppWhereInput } from "./AppWhereInput";
import { AppOrderByInput } from "./AppOrderByInput";

export type AppFindManyArgs = {
  where?: AppWhereInput;
  orderBy?: Array<AppOrderByInput>;
  skip?: number;
  take?: number;
};
