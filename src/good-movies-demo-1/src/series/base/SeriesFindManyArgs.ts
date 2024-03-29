/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SeriesWhereInput } from "./SeriesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SeriesOrderByInput } from "./SeriesOrderByInput";

@ArgsType()
class SeriesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SeriesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SeriesWhereInput, { nullable: true })
  @Type(() => SeriesWhereInput)
  where?: SeriesWhereInput;

  @ApiProperty({
    required: false,
    type: [SeriesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SeriesOrderByInput], { nullable: true })
  @Type(() => SeriesOrderByInput)
  orderBy?: Array<SeriesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SeriesFindManyArgs as SeriesFindManyArgs };
