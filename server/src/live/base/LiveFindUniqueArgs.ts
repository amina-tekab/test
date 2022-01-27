import { ArgsType, Field } from "@nestjs/graphql";
import { LiveWhereUniqueInput } from "./LiveWhereUniqueInput";

@ArgsType()
class LiveFindUniqueArgs {
  @Field(() => LiveWhereUniqueInput, { nullable: false })
  where!: LiveWhereUniqueInput;
}

export { LiveFindUniqueArgs };
