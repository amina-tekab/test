import { ArgsType, Field } from "@nestjs/graphql";
import { VideoCreateInput } from "./VideoCreateInput";

@ArgsType()
class CreateVideoArgs {
  @Field(() => VideoCreateInput, { nullable: false })
  data!: VideoCreateInput;
}

export { CreateVideoArgs };
