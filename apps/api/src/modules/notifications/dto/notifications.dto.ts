import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export enum NotificationType {
  TICKET_BOOKED = "ticket_booked",
}

export class CreateNotification {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: String,
    example: "Билет куплен",
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    type: String,
    example: NotificationType.TICKET_BOOKED,
  })
  @IsNotEmpty()
  @IsString()
  type: NotificationType;
}

export class ReadNotification {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  notificationId: number;
}

export class ReadAllNotification {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
