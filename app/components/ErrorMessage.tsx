import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren ) => {
  
  if(!children) return null;

    return (
        <div className='bg-red-100 text-red-700 px-4 py-3 rounded relative' role='alert'>
            <strong className='font-bold'>Error!  </strong>
            <span className='block sm:inline'>{children}</span>
        </div>
  )
}

export default ErrorMessage
