export default async function sendToBot(order) {
  await fetch(
    `https://api.telegram.org/bot5876016718:AAHK1HvJw2zY9ykkELld5dKUp5dnPsgnSQg/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: 493242203,
        text: order.Data.time,
      }),
    }
  );
}
