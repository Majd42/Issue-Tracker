import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./list/IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify={"between"}>
      <IssueStatusFilter />
      <Button>
        <Link href={"/issues/new"}>New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
