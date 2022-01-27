import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LiveWhereInput } from "./LiveWhereInput";
import { Type } from "class-transformer";
import { LiveOrderByInput } from "./LiveOrderByInput";

@ArgsType()
class LiveFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LiveWhereInput,
  })
  @Field(() => LiveWhereInput, { nullable: true })
  @Type(() => LiveWhereInput)
  where?: LiveWhereInput;

  @ApiProperty({
    required: false,
    type: LiveOrderByInput,
  })
  @Field(() => LiveOrderByInput, { nullable: true })
  @Type(() => LiveOrderByInput)
  orderBy?: LiveOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LiveFindManyArgs };
