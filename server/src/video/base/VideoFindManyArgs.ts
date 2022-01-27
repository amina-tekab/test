import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoWhereInput } from "./VideoWhereInput";
import { Type } from "class-transformer";
import { VideoOrderByInput } from "./VideoOrderByInput";

@ArgsType()
class VideoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VideoWhereInput,
  })
  @Field(() => VideoWhereInput, { nullable: true })
  @Type(() => VideoWhereInput)
  where?: VideoWhereInput;

  @ApiProperty({
    required: false,
    type: VideoOrderByInput,
  })
  @Field(() => VideoOrderByInput, { nullable: true })
  @Type(() => VideoOrderByInput)
  orderBy?: VideoOrderByInput;

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

export { VideoFindManyArgs };
