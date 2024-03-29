/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GenreWhereUniqueInput } from "../../genre/base/GenreWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GenreUpdateManyWithoutSeriesItemsInput {
  @Field(() => [GenreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GenreWhereUniqueInput],
  })
  connect?: Array<GenreWhereUniqueInput>;

  @Field(() => [GenreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GenreWhereUniqueInput],
  })
  disconnect?: Array<GenreWhereUniqueInput>;

  @Field(() => [GenreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GenreWhereUniqueInput],
  })
  set?: Array<GenreWhereUniqueInput>;
}

export { GenreUpdateManyWithoutSeriesItemsInput as GenreUpdateManyWithoutSeriesItemsInput };
