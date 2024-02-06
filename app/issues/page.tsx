import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import Link from '../components/Link'
import prisma  from "@/prisma/client";
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import IssueActions from './IssueActions';
import dealy from 'delay';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await dealy(1000);

  return (
    <div className='p-3 space-y-3'>
      <div  className='mb-5'>
     <IssueActions />
        </div> 
        <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue:any) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>
                  {issue.title}
                </Link>
                <div className='block md:hidden'>
                  <IssueStatusBadge status={issue.status}/>
                  </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status} /></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>     
    </div>
  )
}

export default IssuesPage 
