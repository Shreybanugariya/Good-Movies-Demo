/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput } from "./VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserVideoContentMappingCreateInput {
  @ApiProperty({
    required: true,
    type: () =>
      VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput,
  })
  @ValidateNested()
  @Type(() => VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput)
  @IsOptional()
  @Field(
    () => VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput,
    {
      nullable: true,
    }
  )
  userId?: VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput;

  @ApiProperty({
    required: true,
    type: () =>
      VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput,
  })
  @ValidateNested()
  @Type(() => VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput)
  @IsOptional()
  @Field(
    () => VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput,
    {
      nullable: true,
    }
  )
  videoContentId?: VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput;
}

export { UserVideoContentMappingCreateInput as UserVideoContentMappingCreateInput };
