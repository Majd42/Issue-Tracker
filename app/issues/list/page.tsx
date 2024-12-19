import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssueActions from "../IssueActions";
import IssueTable from "./IssueTable";
import { Flex } from "@radix-ui/themes";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ status: Status; page: string }>;
}) => {
  const page = parseInt((await searchParams).page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where: {
      status: (await searchParams).status,
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where: {
      status: (await searchParams).status,
    },
  });
  return (
    <Flex direction="column" gap={"3"}>
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";
// export const revalidate = 60
export default IssuesPage;
