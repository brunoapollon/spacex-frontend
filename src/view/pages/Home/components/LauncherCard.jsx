import PropTypes from 'prop-types'
import { Spinner } from './Spinner'
import moment from 'moment'

export default function LauncherCard({ data, isLoading, isLaunched }) {
  const { name, links, date_local } = data || {}
  const { patch } = links || {}
  return <div className="bg-white h-34 w-48 rounded-2xl p-2">
    {isLoading && <div className="w-full h-full flex items-center justify-center flex-col">
      <Spinner />
    </div>}
    {!isLoading && <>
      <img
        className="object-cover w-full h-[60px] select-none rounded-2xl"
        src={patch?.small ? patch.small : 'https://thehill.com/wp-content/uploads/sites/2/2021/05/ca_spacexspherex_020521getty_2.jpg?w=640&h=360&crop=1'}
        alt="laucher"
      />
      <span className="font-medium">
        {name}
        <small className="block text-sm text-gray-400">
          {`launch${isLaunched && 'ed' || ''} at: ` + moment(date_local).format('MM/DD/YYYY HH:mm')}
        </small>
      </span>
    </>}
  </div>
}

LauncherCard.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  isLaunched: PropTypes.bool
}
