import { useState } from "react"
import { useWindowWidth } from "../../../app/hooks/useWindowWidth"

export function useHomeController() {
  const [selectedLaunch, setSelectedLaunch] = useState(null)
  const windowWidth = useWindowWidth()

  function handleLauncherClick(lanuch) {
    setSelectedLaunch(lanuch)
  }

  function handleClearSelectedLauncher() {
    setSelectedLaunch(null)
  }

  return {
    selectedLaunch,
    handleLauncherClick,
    handleClearSelectedLauncher,
    windowWidth
  }
}
