import { VideoWhereInput } from "./VideoWhereInput";
import { VideoOrderByInput } from "./VideoOrderByInput";

export type VideoFindManyArgs = {
  where?: VideoWhereInput;
  orderBy?: VideoOrderByInput;
  skip?: number;
  take?: number;
};
