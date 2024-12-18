import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

import IssueForm from "@/app/issues/IssueForm";
// const IssueForm = dynamic(() => import("@/app/issues/IssueForm"), {
//   ssr: false,
// });

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const EditIssuePage = async ({ params }: Props) => {
  const id = (await params).id;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
