import PropTypes from 'prop-types'
import LauncherCard from '../LauncherCard'
import { useContentController } from './useContentController'

export default function Content() {
  const { latestLauccher, loading } = useContentController()
  return <div className="h-full w-1/2 bg-black rounded-2xl p-8 flex flex-col gap-2">
    <header className="w-full">
      <button className="float-right bg-transparent p-1 text-sm border-solid border border-white rounded-3xl text-white">
        Refresh
      </button>
    </header>
    <section className="flex items-center justify-center gap-8">
      <section>
        <h3 className="text-white mb-2">Latest Launcher</h3>
        <LauncherCard data={latestLauccher} isLoading={loading} />
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
  </div>
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}
