/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VideoContentWhereUniqueInput } from "../../videoContent/base/VideoContentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput {
  @Field(() => [VideoContentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VideoContentWhereUniqueInput],
  })
  connect?: Array<VideoContentWhereUniqueInput>;
}

export { VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput as VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput };