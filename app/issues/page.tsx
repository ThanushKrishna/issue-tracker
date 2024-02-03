import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-3 space-y-3'>
      <Button>
        <Link href='/issues/new'>
        New Issue Page
        </Link>
        </Button>        
    </div>
  )
}

export default page
