import React from 'react'
import { Heading, Flex, Card, Box } from '@radix-ui/themes'
import { Skeleton } from '../../../app/components'

const LoadingIssueDetailPage = () => {
  return (
    
      <div className="p-3">
            <Heading><Skeleton /></Heading>
            <Flex className='space-x-3' my="2">
                <Skeleton width="5rem" />
                <Skeleton width="8rem" />
            </ Flex>
            <Card className='prose' mt="4">
            <Skeleton count={3}/>
            </Card>       
      </div>
    
  )
}

export default LoadingIssueDetailPage
