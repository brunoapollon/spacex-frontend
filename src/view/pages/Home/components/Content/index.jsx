import PropTypes from 'prop-types'
import LauncherCard from '../LauncherCard'
import { useContentController } from './useContentController'
import { Swiper } from '../Swiper'
import { SwiperSlide } from 'swiper/react'
import { LeftAction } from '../Swiper/LeftAction'
import { RightAction } from '../Swiper/RightAction'
import { cn } from '../../../../../app/utils/cn'
import { useTheme } from '../../../../../app/hooks/useTheme'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function Content({ onClickLauncher }) {
  const {
    latestLauccher,
    nextLauncher,
    loading,
    upcomingLaunches,
    pastLaunches,
    loadData
  } = useContentController()
  const { theme, handleToggleTheme } = useTheme()

  return <div
    className={cn(
      "h-full w-1/2 bg-gray-950 rounded-2xl p-8 flex flex-col gap-2",
      theme === 'light' && 'bg-white'
    )}
  >
    <header className="w-full flex justify-between items-center">
      <button
        onClick={handleToggleTheme}
        className={cn(
          "bg-transparent p-1 text-sm border-solid border border-white rounded-3xl text-white",
          theme === 'light' && 'border-gray-300 text-gray-500'
        )}
      >
        {theme === 'light' ? <SunIcon className='w-5 h-5' /> : <MoonIcon className='w-5 h-5' />}
      </button>
      <button
        onClick={loadData}
        className={cn(
          "bg-transparent p-1 text-sm border-solid border border-white rounded-3xl text-white",
          theme === 'light' && 'border-gray-300 text-gray-500'
        )}
      >
        Refresh
      </button>
    </header>
    <section className="flex items-center justify-center gap-8">
      <section>
        <h3
          className={cn(
            "text-white mb-2",
            theme === 'light' && 'text-gray-500'
          )
          }>Latest Launcher</h3>
        <LauncherCard data={latestLauccher} isLoading={loading} isLaunched onClick={() => onClickLauncher({ ...latestLauccher, isLaunched: true })} />
      </section>
      <section>
        <h3
          className={cn(
            "text-white mb-2",
            theme === 'light' && 'text-gray-500'
          )
          }>Next Launcher</h3>
        <LauncherCard data={nextLauncher} isLoading={loading} onClick={() => onClickLauncher(nextLauncher)} />
      </section>
    </section>
    <section>
      <Swiper>
        <header slot="container-start" className='w-full flex justify-between items-center'>
          <h3
            className={cn(
              "text-white m-0",
              theme === 'light' && 'text-gray-500'
            )}
          >
            Upcoming Launches
          </h3>
          <div>
            <LeftAction />
            <RightAction />
          </div>
        </header>
        {upcomingLaunches.map((launch) => (
          <SwiperSlide key={launch.id}>
            <LauncherCard data={launch} isLoading={loading} onClick={() => onClickLauncher(launch)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    <section>
      <Swiper>
        <header slot="container-start" className='w-full flex justify-between items-center'>
          <h3
            className={cn(
              "text-white m-0",
              theme === 'light' && 'text-gray-500'
            )}
          >
            Past Launches
          </h3>
          <div>
            <LeftAction />
            <RightAction />
          </div>
        </header>
        {pastLaunches.map((launch) => (
          <SwiperSlide key={launch.id}>
            <LauncherCard data={launch} isLoading={loading} isLaunched onClick={() => onClickLauncher({ ...launch, isLaunched: true })} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </div>
}

Content.propTypes = {
  onClickLauncher: PropTypes.func,
}
