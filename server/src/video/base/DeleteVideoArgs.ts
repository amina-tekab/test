import { ArgsType, Field } from "@nestjs/graphql";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";

@ArgsType()
class DeleteVideoArgs {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  where!: VideoWhereUniqueInput;
}

export { DeleteVideoArgs };
