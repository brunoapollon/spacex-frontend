import { httpClient } from "../httpClient";

export async function getAllUpcomingLaunches() {
  const { data } = await httpClient.get('/upcoming');

  return data;
}
