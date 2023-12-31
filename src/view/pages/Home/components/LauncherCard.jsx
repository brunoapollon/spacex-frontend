import PropTypes from 'prop-types'
import { Spinner } from './Spinner'
import moment from 'moment'
import { useTheme } from '../../../../app/hooks/useTheme'
import { cn } from '../../../../app/utils/cn'

export default function LauncherCard({ data, isLoading, isLaunched, onClick, className }) {
  const { name, links, date_local } = data || {}
  const { patch } = links || {}
  const { theme } = useTheme()

  return <div
    className={cn(
      "bg-white h-52 w-full rounded-2xl p-2 cursor-pointer",
      theme === 'light' && 'bg-gray-300',
      className
    )}
    onClick={onClick}
  >
    {isLoading && <div className="w-full h-full flex items-center justify-center flex-col">
      <Spinner />
    </div>}
    {!isLoading && <>
      <img
        className="object-cover w-full max-h-[75%] select-none rounded-2xl"
        src={patch?.small ? patch.small : 'https://thehill.com/wp-content/uploads/sites/2/2021/05/ca_spacexspherex_020521getty_2.jpg?w=640&h=360&crop=1'}
        alt="laucher"
      />
      <span className="font-medium text-sm">
        {name}
        <small className="block text-gray-400">
          {`launch${isLaunched && 'ed' || ''} at: ` + moment(date_local).format('MM/DD/YYYY HH:mm')}
        </small>
      </span>
    </>}
  </div>
}

LauncherCard.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  isLaunched: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
}
