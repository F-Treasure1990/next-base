import { unstable_noStore } from "next/cache";

import ImageKit from "imagekit";
import { IKImage } from "imagekitio-next";

import { env as clientEnv } from "@/env/client";
import { env as serverEnv } from "@/env/server";

import ResultsList from "./results-list";

const imagekit = new ImageKit({
  publicKey: clientEnv.NEXT_PUBLIC_PUBLIC_KEY,
  privateKey: serverEnv.PRIVATE_KEY,
  urlEndpoint: clientEnv.NEXT_PUBLIC_URL_ENDPOINT,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();
  const files = await imagekit.listFiles({
    searchQuery: `name:${searchParams.q}`,
  });
  return (
    <div className="container mx-auto space-y-8 bg-red-100 py-8">
      <h1 className="text-4xl font-medium">Search Results</h1>
      <ResultsList files={files} />
    </div>
  );
}
