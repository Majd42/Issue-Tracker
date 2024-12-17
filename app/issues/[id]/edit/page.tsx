import React from "react";
import IssueForm from "../../IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }
  return <IssueForm issue={issue} />;
};

export default page;
