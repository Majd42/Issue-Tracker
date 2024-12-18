import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const IssueDetailPage = async ({ params }: Props) => {
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
        <EditIssueButton id={id} />
        <DeleteIssueButton issueId={id} />
      </Flex>
    </Grid>
  );
};

export default IssueDetailPage;
