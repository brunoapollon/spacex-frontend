import PropTypes from 'prop-types'
import LauncherCard from '../LauncherCard'
import { useContentController } from './useContentController'
import { Swiper } from '../Swiper'
import { SwiperSlide } from 'swiper/react'
import { LeftAction } from '../Swiper/LeftAction'
import { RightAction } from '../Swiper/RightAction'

export default function Content() {
  const {
    latestLauccher,
    nextLauncher,
    loading,
    upcomingLaunches,
    pastLaunches
  } = useContentController()

  return <div className="h-full w-1/2 bg-black rounded-2xl p-8 flex flex-col gap-2">
    <header className="w-full">
      <button className="float-right bg-transparent p-1 text-sm border-solid border border-white rounded-3xl text-white">
        Refresh
      </button>
    </header>
    <section className="flex items-center justify-center gap-8">
      <section>
        <h3 className="text-white mb-2">Latest Launcher</h3>
        <LauncherCard data={latestLauccher} isLoading={loading} isLaunched />
      </section>
      <section>
        <h3 className="text-white mb-2">Next Launcher</h3>
        <LauncherCard data={nextLauncher} isLoading={loading} />
      </section>
    </section>
    <section>
      <Swiper>
        <header slot="container-start" className='w-full flex justify-between items-center'>
          <h3 className="text-white m-0">Upcoming Launches</h3>
          <div>
            <LeftAction />
            <RightAction />
          </div>
        </header>
        {upcomingLaunches.map((launch) => (
          <SwiperSlide key={launch.id}>
            <LauncherCard data={launch} isLoading={loading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section>
      <Swiper>
        <header slot="container-start" className='w-full flex justify-between items-center'>
          <h3 className="text-white m-0">Past Launches</h3>
          <div>
            <LeftAction />
            <RightAction />
          </div>
        </header>
        {pastLaunches.map((launch) => (
          <SwiperSlide key={launch.id}>
            <LauncherCard data={launch} isLoading={loading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </div>
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}
