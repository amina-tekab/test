import { ArgsType, Field } from "@nestjs/graphql";
import { LiveCreateInput } from "./LiveCreateInput";

@ArgsType()
class CreateLiveArgs {
  @Field(() => LiveCreateInput, { nullable: false })
  data!: LiveCreateInput;
}

export { CreateLiveArgs };
