import { Cross2Icon } from '@radix-ui/react-icons'
import moment from 'moment'
import PropTypes from 'prop-types'

export function LauncherView({ data, onClearSelectedLauncher }) {
  const { name, links, id, launchpad, crew, date_local, isLaunched } = data || {}
  const { patch } = links || {}

  if (!data) {
    return <div className="h-full w-1/2 bg-white  rounded-2xl p-8 items-center flex justify-center">
      <h1 className='text-large text-gray-700'>
        Please select a launcher to view all details!
      </h1>
    </div>
  }

  return <div className="h-full w-1/2 bg-white  rounded-2xl p-8 overflow-y-auto">
    <h1 className="text-xl mb-4 flex justify-between items-center">
      <span>
        {name}
      </span>
      <button className='bg-transparent' onClick={onClearSelectedLauncher}>
        <Cross2Icon className='w-6 h-6' />
      </button>
    </h1>

    <img
      className="object-fit w-full h-[400px] select-none rounded-2xl"
      src={patch?.large ? patch.large : 'https://thehill.com/wp-content/uploads/sites/2/2021/05/ca_spacexspherex_020521getty_2.jpg?w=640&h=360&crop=1'}
      alt="launcher-preview"
    />

    <section className="text-lg text-gray-700">
      <p>
        ID: {id}
      </p>
      <p>
        Launchpad: {launchpad}
      </p>
      <div>
        <p>Crew</p>
        {crew?.length > 0 ? <ul className="text-sm pl-3">
          {crew?.map((member) => (
            <li>memberId: {member.crew} - <strong>{member.role}</strong></li>
          ))}
        </ul> : <h3 className='pl-3'>Launch without crew</h3>}
      </div>
      <p>
        {`launch${isLaunched && 'ed' || ''} at: ` + moment(date_local).format('MM/DD/YYYY HH:mm')}
      </p>
    </section>
  </div>
}

LauncherView.propTypes = {
  data: PropTypes.object,
  onClearSelectedLauncher: PropTypes.func
}
