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
  IsOptional,
  ValidateNested,
  IsInt,
  IsNumber,
} from "class-validator";
import { GenreCreateNestedManyWithoutVideoContentsInput } from "./GenreCreateNestedManyWithoutVideoContentsInput";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { UserVideoContentMappingWhereUniqueInput } from "../../userVideoContentMapping/base/UserVideoContentMappingWhereUniqueInput";

@InputType()
class VideoContentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: () => GenreCreateNestedManyWithoutVideoContentsInput,
  })
  @ValidateNested()
  @Type(() => GenreCreateNestedManyWithoutVideoContentsInput)
  @IsOptional()
  @Field(() => GenreCreateNestedManyWithoutVideoContentsInput, {
    nullable: true,
  })
  itemPrice?: GenreCreateNestedManyWithoutVideoContentsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mustWatchCount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  rating?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => UserVideoContentMappingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserVideoContentMappingWhereUniqueInput)
  @IsOptional()
  @Field(() => UserVideoContentMappingWhereUniqueInput, {
    nullable: true,
  })
  userVideoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserVideoContentMappingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserVideoContentMappingWhereUniqueInput)
  @IsOptional()
  @Field(() => UserVideoContentMappingWhereUniqueInput, {
    nullable: true,
  })
  videoContentMapping?: UserVideoContentMappingWhereUniqueInput | null;
}

export { VideoContentCreateInput as VideoContentCreateInput };
