import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe("Count recipient Notification", () => {
  it("should be able to count recipient notification", async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository
    );

    await notificationRepository.create(
      makeNotification({ recipientId: "recipient-1" })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: "recipient-1" })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: "recipient-2" })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: "recipient-1",
    });

    expect(count).toEqual(2);
  });
});
