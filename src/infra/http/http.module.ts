import { DatabaseModule } from "./../database/database.module";
import { SendNotification } from "./../../application/use-cases/send-notification";
import { NotificationsController } from "./controllers/notifications.controller";
import { Module } from "@nestjs/common";
import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-cases/get-recipient-notifications";
import { ReadNotification } from "@application/use-cases/read-notifications";
import { UnreadNotification } from "@application/use-cases/unread-notifications";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
