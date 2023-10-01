import { useCallback, useEffect, useState } from "react"
import { getLatestLauncher } from "../../../../../app/services/spacexService/latestLauncher"

export function useContentController() {
  const [latestLauccher, setLatestLauncher] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true)

    setLatestLauncher(await getLatestLauncher())

    setLoading(false)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return {
    latestLauccher,
    loadData,
    loading
  }
}
