import React from 'react'

const Filter = ({value, onChange}) => {
  return (
    <div>
        filter shown with<input type="text" onChange={onChange} value={value} />
    </div>
  )
}

export default Filter