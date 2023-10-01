import PropTypes from 'prop-types'

export default function Content({ children }) {
  return <div className="h-full w-1/2 bg-black rounded-2xl p-8 flex flex-col gap-2">
    {children}
  </div>
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}
