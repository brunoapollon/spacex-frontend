import Content from './components/Content';
import { LauncherView } from './components/LauncherView';
import { useHomeController } from './useHomeController';

export default function Home() {
  const {
    selectedLaunch,
    handleLauncherClick,
    handleClearSelectedLauncher
  } = useHomeController()

  return (
    <div className="h-full w-full p-4 flex gap-x-4">
      <Content onClickLauncher={handleLauncherClick} />
      <LauncherView data={selectedLaunch} onClearSelectedLauncher={handleClearSelectedLauncher} />
    </div>
  );
}
