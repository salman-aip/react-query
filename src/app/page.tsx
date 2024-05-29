import BasicQuery from "@/components/basic-query";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">React Query</h1>

      <BasicQuery />
    </main>
  );
}
