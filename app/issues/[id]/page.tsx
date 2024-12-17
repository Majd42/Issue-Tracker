import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

type Props = {
  params: {
    id: string;
  };
};

const IssueDetailPage = async ({ params }: Props) => {
  const awaitedParams = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(awaitedParams.id),
    },
  });

  if (!issue) {
    notFound();
  }
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton id={awaitedParams.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
