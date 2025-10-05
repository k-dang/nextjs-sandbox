export async function getData() {
  console.log("Fetching data...");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    data: `Random data: ${Math.random().toString(36).substring(7)}`,
    serverTime: new Date().toLocaleString(),
  };
}
