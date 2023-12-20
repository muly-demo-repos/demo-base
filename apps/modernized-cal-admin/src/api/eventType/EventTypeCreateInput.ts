import { AvailabilityCreateNestedManyWithoutEventTypesInput } from "./AvailabilityCreateNestedManyWithoutEventTypesInput";
import { BookingCreateNestedManyWithoutEventTypesInput } from "./BookingCreateNestedManyWithoutEventTypesInput";
import { EventTypeCustomInputCreateNestedManyWithoutEventTypesInput } from "./EventTypeCustomInputCreateNestedManyWithoutEventTypesInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { HashedLinkWhereUniqueInput } from "../hashedLink/HashedLinkWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserCreateNestedManyWithoutEventTypesInput } from "./UserCreateNestedManyWithoutEventTypesInput";
import { WebhookCreateNestedManyWithoutEventTypesInput } from "./WebhookCreateNestedManyWithoutEventTypesInput";
import { WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput";

export type EventTypeCreateInput = {
  afterEventBuffer: number;
  availability?: AvailabilityCreateNestedManyWithoutEventTypesInput;
  beforeEventBuffer: number;
  bookings?: BookingCreateNestedManyWithoutEventTypesInput;
  currency: string;
  customInputs?: EventTypeCustomInputCreateNestedManyWithoutEventTypesInput;
  description?: string | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  disableGuests: boolean;
  eventName?: string | null;
  hashedLink?: HashedLinkWhereUniqueInput | null;
  hidden: boolean;
  hideCalendarNotes: boolean;
  length: number;
  locations?: InputJsonValue;
  metadata?: InputJsonValue;
  minimumBookingNotice: number;
  periodCountCalendarDays?: boolean | null;
  periodDays?: number | null;
  periodEndDate?: Date | null;
  periodStartDate?: Date | null;
  periodType: "UNLIMITED" | "ROLLING" | "RANGE";
  position: number;
  price: number;
  recurringEvent?: InputJsonValue;
  requiresConfirmation: boolean;
  schedule?: ScheduleWhereUniqueInput | null;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;
  seatsPerTimeSlot?: number | null;
  slotInterval?: number | null;
  slug: string;
  successRedirectUrl?: string | null;
  team?: TeamWhereUniqueInput | null;
  timeZone?: string | null;
  title: string;
  userId?: number | null;
  users?: UserCreateNestedManyWithoutEventTypesInput;
  webhooks?: WebhookCreateNestedManyWithoutEventTypesInput;
  workflows?: WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput;
};
