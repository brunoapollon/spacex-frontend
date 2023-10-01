import { httpClient } from "../httpClient";

export async function getLatestLauncher() {
  const { data } = await httpClient.get('/latest');

  return data;
}
