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
import { WorkflowReminderCreateInput } from "./WorkflowReminderCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateWorkflowReminderArgs {
  @ApiProperty({
    required: true,
    type: () => WorkflowReminderCreateInput,
  })
  @ValidateNested()
  @Type(() => WorkflowReminderCreateInput)
  @Field(() => WorkflowReminderCreateInput, { nullable: false })
  data!: WorkflowReminderCreateInput;
}

export { CreateWorkflowReminderArgs as CreateWorkflowReminderArgs };
