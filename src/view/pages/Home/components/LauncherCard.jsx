import PropTypes from 'prop-types'
import { Spinner } from './Spinner'
import moment from 'moment'

export default function LauncherCard({ data, isLoading }) {
  const { name, links, date_local } = data || {}
  const { patch } = links || {}
  return <div className="bg-white h-32 w-48 rounded-2xl p-2">
    {isLoading && <div className="w-full h-full flex items-center justify-center flex-col">
      <Spinner />
    </div>}
    {!isLoading && <>
      <img className="object-cover w-full h-[60px] select-none rounded-2xl" src={patch?.small} alt="laucher" />
      <span className="font-medium">
        {name}
        <small className="block text-sm text-gray-400">
          launched at: {moment(date_local).format('DD/MM/YYYY HH:mm')}
        </small>
      </span>
    </>}
  </div>
}

LauncherCard.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool
}
