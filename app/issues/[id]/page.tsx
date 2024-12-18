import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { AuthOptions, getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions as AuthOptions);
  const id = (await params).id;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap={"5"}>
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Flex direction={"column"} gap={"4"}>
        <AssigneeSelect />
        <EditIssueButton id={id} />
        {session && <DeleteIssueButton issueId={id} />}
      </Flex>
    </Grid>
  );
};

export default IssueDetailPage;
