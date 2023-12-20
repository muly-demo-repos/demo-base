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
import { ResetPasswordRequestWhereInput } from "./ResetPasswordRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ResetPasswordRequestOrderByInput } from "./ResetPasswordRequestOrderByInput";

@ArgsType()
class ResetPasswordRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResetPasswordRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ResetPasswordRequestWhereInput, { nullable: true })
  @Type(() => ResetPasswordRequestWhereInput)
  where?: ResetPasswordRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [ResetPasswordRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ResetPasswordRequestOrderByInput], { nullable: true })
  @Type(() => ResetPasswordRequestOrderByInput)
  orderBy?: Array<ResetPasswordRequestOrderByInput>;

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

export { ResetPasswordRequestFindManyArgs as ResetPasswordRequestFindManyArgs };