import Content from "./components/Content";
import LauncherCard from "./components/LauncherCard";
import { LauncherView } from "./components/LauncherView";

export default function Home() {
  return <div className="h-full w-full p-4 flex gap-x-4">
    <Content>
      <header className="w-full">
        <button className="float-right bg-transparent p-1 text-sm border-solid border border-white rounded-3xl text-white">
          Refresh
        </button>
      </header>
      <section className="flex items-center justify-center gap-8">
        <section>
          <h3 className="text-white mb-2">Latest Launcher</h3>
          <LauncherCard />
        </section>
        <section>
          <h3 className="text-white mb-2">Latest Launcher</h3>
          <LauncherCard />
        </section>
      </section>
      <section>
        <h3 className="text-white mb-2">Latest Launcher</h3>
        <div className="flex gap-x-3">
          <LauncherCard />
          <LauncherCard />
          <LauncherCard />
        </div>
      </section>
      <section>
        <h3 className="text-white mb-2">Latest Launcher</h3>
        <div className="flex gap-x-3">
          <LauncherCard />
          <LauncherCard />
          <LauncherCard />
        </div>
      </section>
    </Content>
    <LauncherView>

    </LauncherView>
  </div>
}
