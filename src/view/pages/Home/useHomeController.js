import { useState } from "react"

export function useHomeController() {
  const [selectedLaunch, setSelectedLaunch] = useState(null)

  function handleLauncherClick(lanuch) {
    setSelectedLaunch(lanuch)
  }

  function handleClearSelectedLauncher() {
    setSelectedLaunch(null)
  }

  return {
    selectedLaunch,
    handleLauncherClick,
    handleClearSelectedLauncher
  }
}
