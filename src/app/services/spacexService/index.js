import { getLatestLauncher } from "./latestLauncher";
import { getNextLauncher } from "./nextLauncher";
import { getAllPastLaunches } from "./pastLaunches";
import { getAllUpcomingLaunches } from "./upcomingLaunches";

export const spacexService = {
  getLatestLauncher,
  getNextLauncher,
  getAllUpcomingLaunches,
  getAllPastLaunches
};
