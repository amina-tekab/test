import { ArgsType, Field } from "@nestjs/graphql";
import { LiveWhereUniqueInput } from "./LiveWhereUniqueInput";
import { LiveUpdateInput } from "./LiveUpdateInput";

@ArgsType()
class UpdateLiveArgs {
  @Field(() => LiveWhereUniqueInput, { nullable: false })
  where!: LiveWhereUniqueInput;
  @Field(() => LiveUpdateInput, { nullable: false })
  data!: LiveUpdateInput;
}

export { UpdateLiveArgs };
