import { useCallback, useEffect, useState } from "react"
import { spacexService } from "../../../../../app/services/spacexService"

export function useContentController() {
  const [latestLauccher, setLatestLauncher] = useState(null)
  const [nextLauncher, setNextLauncher] = useState(null)
  const [upcomingLaunches, setUpcomingLaunches] = useState([])
  const [pastLaunches, setPastLaunches] = useState([])
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true)

    setLatestLauncher(await spacexService.getLatestLauncher())
    setNextLauncher(await spacexService.getNextLauncher())
    setUpcomingLaunches(await spacexService.getAllUpcomingLaunches())
    setPastLaunches(await spacexService.getAllPastLaunches())

    setLoading(false)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return {
    latestLauccher,
    loadData,
    loading,
    nextLauncher,
    upcomingLaunches,
    pastLaunches
  }
}
