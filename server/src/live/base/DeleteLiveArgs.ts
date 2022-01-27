import { ArgsType, Field } from "@nestjs/graphql";
import { LiveWhereUniqueInput } from "./LiveWhereUniqueInput";

@ArgsType()
class DeleteLiveArgs {
  @Field(() => LiveWhereUniqueInput, { nullable: false })
  where!: LiveWhereUniqueInput;
}

export { DeleteLiveArgs };
