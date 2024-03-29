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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { GenreListRelationFilter } from "../../genre/base/GenreListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserVideoContentMappingWhereUniqueInput } from "../../userVideoContentMapping/base/UserVideoContentMappingWhereUniqueInput";

@InputType()
class VideoContentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => GenreListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GenreListRelationFilter)
  @IsOptional()
  @Field(() => GenreListRelationFilter, {
    nullable: true,
  })
  itemPrice?: GenreListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  mustWatchCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  rating?: DecimalNullableFilter;

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
  userVideoContentMapping?: UserVideoContentMappingWhereUniqueInput;

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
  videoContentMapping?: UserVideoContentMappingWhereUniqueInput;
}

export { VideoContentWhereInput as VideoContentWhereInput };
