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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { MovieWhereUniqueInput } from "../../movie/base/MovieWhereUniqueInput";
import { Type } from "class-transformer";
import { SeriesWhereUniqueInput } from "../../series/base/SeriesWhereUniqueInput";
import { VideoContentWhereUniqueInput } from "../../videoContent/base/VideoContentWhereUniqueInput";

@InputType()
class GenreUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  decription?: string;

  @ApiProperty({
    required: false,
    type: () => MovieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MovieWhereUniqueInput)
  @IsOptional()
  @Field(() => MovieWhereUniqueInput, {
    nullable: true,
  })
  movie?: MovieWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Name?: string;

  @ApiProperty({
    required: false,
    type: () => SeriesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SeriesWhereUniqueInput)
  @IsOptional()
  @Field(() => SeriesWhereUniqueInput, {
    nullable: true,
  })
  series?: SeriesWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => VideoContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VideoContentWhereUniqueInput)
  @IsOptional()
  @Field(() => VideoContentWhereUniqueInput, {
    nullable: true,
  })
  videoContent?: VideoContentWhereUniqueInput | null;
}

export { GenreUpdateInput as GenreUpdateInput };