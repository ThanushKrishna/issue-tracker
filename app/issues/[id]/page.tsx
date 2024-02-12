import authOptions from '@/app/auth/authOptions';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import prisma from "../../../prisma/client";
import DeleteIssueButton from './DeleteIssueButton';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';


interface Props {
    params: {id: string}
}

const IssueDetailPage = async ( { params }: Props) => {

  const session = await getServerSession(authOptions);  
  
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
      });

    if (!issue)
    notFound();
    


    return (
        <Grid columns={{ initial: "1", sm: "5" }} gap="5" className="p-3">
      <Box className='md:col-span-4'>
       <IssueDetails issue={issue}/>
      </Box>
      <Box>
      {session && 
      <Flex direction="column" gap="4">
      <EditIssueButton issueId={issue.id} />
      <DeleteIssueButton issueId={issue.id} />
      </Flex>
      }
      </Box>
    </Grid>
  )
}

export default IssueDetailPage
