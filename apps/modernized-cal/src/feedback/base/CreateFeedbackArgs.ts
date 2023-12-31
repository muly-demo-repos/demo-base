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
import { FeedbackCreateInput } from "./FeedbackCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFeedbackArgs {
  @ApiProperty({
    required: true,
    type: () => FeedbackCreateInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateInput)
  @Field(() => FeedbackCreateInput, { nullable: false })
  data!: FeedbackCreateInput;
}

export { CreateFeedbackArgs as CreateFeedbackArgs };
