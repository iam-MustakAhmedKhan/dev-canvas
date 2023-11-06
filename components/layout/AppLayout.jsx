import React from 'react'

const AppLayout = ({children}) => {
  return (
      <div className='container mx-auto'>
          {children}
      </div>
  )
}

export default AppLayout