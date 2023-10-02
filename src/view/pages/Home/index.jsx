import { cn } from '../../../app/utils/cn';
import Content from './components/Content';
import { LauncherView } from './components/LauncherView';
import { useHomeController } from './useHomeController';

export default function Home() {
  const {
    selectedLaunch,
    handleLauncherClick,
    handleClearSelectedLauncher,
    windowWidth
  } = useHomeController()
  const needBreak = windowWidth <= 1075

  return (
    <div
    className={cn(
      "h-full w-full p-4 flex gap-x-4",
      needBreak && 'flex-col overflow-y-auto gap-y-4  h-max'
    )}
    >
      <Content onClickLauncher={handleLauncherClick} className={needBreak ? 'w-full h-max' : ''} />
      <LauncherView data={selectedLaunch} onClearSelectedLauncher={handleClearSelectedLauncher} className={needBreak ? 'w-full h-max min-h-screen' : ''} />
    </div>
  );
}
