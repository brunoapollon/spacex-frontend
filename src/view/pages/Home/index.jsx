import Content from './components/Content';
import { LauncherView } from './components/LauncherView';

export default function Home() {
  return (
    <div className="h-full w-full p-4 flex gap-x-4">
      <Content />
      <LauncherView />
    </div>
  );
}
