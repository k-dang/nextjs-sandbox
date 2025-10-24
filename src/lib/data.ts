export async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    data: `Random data: ${Math.random().toString(36).substring(7)}`,
    serverTime: new Date().toLocaleString(),
  };
}
