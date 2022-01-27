import { ArgsType, Field } from "@nestjs/graphql";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";
import { VideoUpdateInput } from "./VideoUpdateInput";

@ArgsType()
class UpdateVideoArgs {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;
  @Field(() => VideoUpdateInput, { nullable: false })
  data!: VideoUpdateInput;
}

export { UpdateVideoArgs };
