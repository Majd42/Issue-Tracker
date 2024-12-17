import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
        <Heading>{issue.title}</Heading>
        <Flex gapX={"3"} my={"2"}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose mt-4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          {" "}
          <Pencil2Icon />
          <Link href={`/issues/${awaitedParams.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
