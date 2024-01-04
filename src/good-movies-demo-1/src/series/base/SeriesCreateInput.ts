/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsInt,
  IsNumber,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { GenreCreateNestedManyWithoutSeriesItemsInput } from "./GenreCreateNestedManyWithoutSeriesItemsInput";
import { Decimal } from "decimal.js";
import { UserSeriesMappingWhereUniqueInput } from "../../userSeriesMapping/base/UserSeriesMappingWhereUniqueInput";

@InputType()
class SeriesCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  descption!: string;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  director!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GenreCreateNestedManyWithoutSeriesItemsInput,
  })
  @ValidateNested()
  @Type(() => GenreCreateNestedManyWithoutSeriesItemsInput)
  @IsOptional()
  @Field(() => GenreCreateNestedManyWithoutSeriesItemsInput, {
    nullable: true,
  })
  genre?: GenreCreateNestedManyWithoutSeriesItemsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  mustWatchCount!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Float)
  rating!: Decimal;

  @ApiProperty({
    required: false,
    type: () => UserSeriesMappingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserSeriesMappingWhereUniqueInput)
  @IsOptional()
  @Field(() => UserSeriesMappingWhereUniqueInput, {
    nullable: true,
  })
  userSeriesMapping?: UserSeriesMappingWhereUniqueInput | null;
}

export { SeriesCreateInput as SeriesCreateInput };
