import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Box } from "@radix-ui/themes";
import delay from "delay";

const LoadingNewIssuePage = async () => {
  await delay(2000);
  return (
    <Box>
      <Skeleton />
      <Skeleton height={"20rem"} />
    </Box>
  );
};

export default LoadingNewIssuePage;
