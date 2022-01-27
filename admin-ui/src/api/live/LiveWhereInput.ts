import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
