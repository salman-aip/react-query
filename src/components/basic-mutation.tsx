"use client";

import { useQuery, useMutation } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function BasicQueryMutation() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"], // can be multiple key based on data
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newPost: Post) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
  });

  // useQuery
  if (error) return <div>Error Occured !!!</div>;
  if (isLoading) return <div>Data is loading.....</div>;

  // useMutation
  if (isError) return <div>Error Occured !!!</div>;
  if (isPending) return <div>Data is submitting.....</div>;
  if (isSuccess) return <div>Successfully done.....</div>;

  return (
    <>
      <button
        onClick={() =>
          mutate({
            userId: 5000,
            id: 5000,
            title: "Salman Farshe",
            body: "Salman farshe",
          })
        }
      >
        Add New Post
      </button>

      {data?.map((post: any) => {
        return (
          <div key={post.id} className="my-6 bg-gray-200">
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        );
      })}
    </>
  );
}
