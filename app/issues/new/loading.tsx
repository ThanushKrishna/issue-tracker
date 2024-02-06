import React from 'react';
import { Box, Button } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
  return (
    <Box className='p-3 max-w-xl space-y-3'>
      <Skeleton />
      <Skeleton height="26rem" />
      <Button > Submit New Issue </Button>
    </Box>
  )
}

export default LoadingNewIssuePage
