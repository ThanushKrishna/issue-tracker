import { Issue, Status } from "@prisma/client";
import { Flex } from '@radix-ui/themes';
import prisma from "../../../prisma/client";
import Pagination from '../../components/pagination';
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery, columnNames } from './IssueTable';

interface Props {
  searchParams: IssueQuery
}

const IssuesPage = async ({ searchParams }: Props) => {

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

    const where = { status };

    const orderBy = columnNames
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  });


  const issueCount = await prisma.issue.count({ where })

  return (
    <div className="p-3 space-y-3">
      <Flex direction="column" gap="3">
        <IssueActions />
        <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />

      </Flex>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default IssuesPage;
