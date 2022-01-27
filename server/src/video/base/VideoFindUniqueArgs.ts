import { ArgsType, Field } from "@nestjs/graphql";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";

@ArgsType()
class VideoFindUniqueArgs {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;
}

export { VideoFindUniqueArgs };
