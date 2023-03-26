export default async function sendToBot(order) {
  let response = await fetch(`https://dimshashlik.ru/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(order),
  });

  let result = await response.json();
  return result;
}
