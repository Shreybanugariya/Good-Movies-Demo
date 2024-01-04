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
import { SeriesWhereInput } from "./SeriesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SeriesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SeriesWhereInput,
  })
  @ValidateNested()
  @Type(() => SeriesWhereInput)
  @IsOptional()
  @Field(() => SeriesWhereInput, {
    nullable: true,
  })
  every?: SeriesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SeriesWhereInput,
  })
  @ValidateNested()
  @Type(() => SeriesWhereInput)
  @IsOptional()
  @Field(() => SeriesWhereInput, {
    nullable: true,
  })
  some?: SeriesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SeriesWhereInput,
  })
  @ValidateNested()
  @Type(() => SeriesWhereInput)
  @IsOptional()
  @Field(() => SeriesWhereInput, {
    nullable: true,
  })
  none?: SeriesWhereInput;
}
export { SeriesListRelationFilter as SeriesListRelationFilter };