import { Card, Flex, Heading } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = () => {
  return (
    <div>
      <Heading>
        <Skeleton className="max-w-xl" />
      </Heading>
      <Flex gapX={"3"} my={"2"}>
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailsPage;
