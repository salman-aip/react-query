"use client";

import { useQuery } from "@tanstack/react-query";

export default function BasicQuery() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"], // can be multiple key based on data
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (error) return <div>Error Occured !!!</div>;

  if (isLoading) return <div>Data is loading.....</div>;

  return (
    <>
      {data?.map((todo: any) => {
        return (
          <div key={todo.id}>
            <div>{todo.title}</div>
          </div>
        );
      })}
    </>
  );
}
