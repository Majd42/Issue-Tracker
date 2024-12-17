import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = async () => {
  return (
    <Box>
      <Skeleton className={"max-w-lg"} />
      <Skeleton className={"max-w-xl"} height={"20rem"} />
    </Box>
  );
};

export default LoadingNewIssuePage;
