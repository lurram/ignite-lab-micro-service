import { PrismaNotificationsRepository } from "./prisma/prisma-notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notification-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
