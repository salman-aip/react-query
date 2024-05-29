import BasicDependentQueries from "@/components/basic-dependent-queries";
import BasicInvalidatingQuery from "@/components/basic-invalidating-query";
import BasicQueryMutation from "@/components/basic-mutation";
import BasicQuery from "@/components/basic-query";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">React Query</h1>

      {/* <BasicQuery /> */}
      {/* <BasicQueryMutation /> */}
      {/* <BasicInvalidatingQuery /> */}
      <BasicDependentQueries />
    </main>
  );
}
