"use client";
import { Issue, User } from "@prisma/client";
import { Callout, Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  const [changeAssingedUserError, setChangeAssignedUserError] = useState("");

  const changeIssueUser = async (userId: string) => {
    try {
      setChangeAssignedUserError("");
      await axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId !== " " ? userId : null,
      });
    } catch (error) {
      console.log(error);
      setChangeAssignedUserError("Could not assign user");
    }
  };

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      {changeAssingedUserError && (
        <Callout.Root color="red" mb={"1"}>
          <Callout.Text>{changeAssingedUserError}</Callout.Text>
        </Callout.Root>
      )}
      <Select.Root
        defaultValue={issue.assignedToUserId || " "}
        onValueChange={changeIssueUser}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value=" ">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default AssigneeSelect;
