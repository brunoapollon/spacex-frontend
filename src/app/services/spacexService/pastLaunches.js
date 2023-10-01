import { httpClient } from "../httpClient";

export async function getAllPastLaunches() {
  const { data } = await httpClient.get('/past');

  return data;
}
