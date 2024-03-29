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
import { UserVideoContentMappingWhereInput } from "./UserVideoContentMappingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserVideoContentMappingOrderByInput } from "./UserVideoContentMappingOrderByInput";

@ArgsType()
class UserVideoContentMappingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserVideoContentMappingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserVideoContentMappingWhereInput, { nullable: true })
  @Type(() => UserVideoContentMappingWhereInput)
  where?: UserVideoContentMappingWhereInput;

  @ApiProperty({
    required: false,
    type: [UserVideoContentMappingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserVideoContentMappingOrderByInput], { nullable: true })
  @Type(() => UserVideoContentMappingOrderByInput)
  orderBy?: Array<UserVideoContentMappingOrderByInput>;

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

export { UserVideoContentMappingFindManyArgs as UserVideoContentMappingFindManyArgs };
