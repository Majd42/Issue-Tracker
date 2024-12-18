import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueForm = () => {
  return (
    <Box>
      <Skeleton className={"max-w-lg"} />
      <Skeleton className={"max-w-xl"} height={"20rem"} />
    </Box>
  );
};

export default LoadingIssueForm;
