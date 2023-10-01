import { useCallback, useEffect, useState } from "react"
import { getLatestLauncher } from "../../../../../app/services/spacexService/latestLauncher"
import { getNextLauncher } from "../../../../../app/services/spacexService/nextLauncher"

export function useContentController() {
  const [latestLauccher, setLatestLauncher] = useState(null)
  const [nextLauncher, setNextLauncher] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true)

    setLatestLauncher(await getLatestLauncher())
    setNextLauncher(await getNextLauncher())

    setLoading(false)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return {
    latestLauccher,
    loadData,
    loading,
    nextLauncher
  }
}
