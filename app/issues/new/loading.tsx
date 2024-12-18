import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { Box } from "@radix-ui/themes";
import LoadingIssueForm from "../LoadingIssueForm";

const LoadingNewIssuePage = async () => {
  return <LoadingIssueForm />;
};

export default LoadingNewIssuePage;
