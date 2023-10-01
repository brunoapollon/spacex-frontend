import { httpClient } from "../httpClient";

export async function getNextLauncher() {
  const { data } = await httpClient.get('/next');

  return data;
}
