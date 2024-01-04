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
import { UserCreateNestedManyWithoutUserSeriesMappingsInput } from "./UserCreateNestedManyWithoutUserSeriesMappingsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SeriesCreateNestedManyWithoutUserSeriesMappingsInput } from "./SeriesCreateNestedManyWithoutUserSeriesMappingsInput";

@InputType()
class UserSeriesMappingCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserCreateNestedManyWithoutUserSeriesMappingsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUserSeriesMappingsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUserSeriesMappingsInput, {
    nullable: true,
  })
  userId?: UserCreateNestedManyWithoutUserSeriesMappingsInput;

  @ApiProperty({
    required: true,
    type: () => SeriesCreateNestedManyWithoutUserSeriesMappingsInput,
  })
  @ValidateNested()
  @Type(() => SeriesCreateNestedManyWithoutUserSeriesMappingsInput)
  @IsOptional()
  @Field(() => SeriesCreateNestedManyWithoutUserSeriesMappingsInput, {
    nullable: true,
  })
  webSeriesId?: SeriesCreateNestedManyWithoutUserSeriesMappingsInput;
}

export { UserSeriesMappingCreateInput as UserSeriesMappingCreateInput };
