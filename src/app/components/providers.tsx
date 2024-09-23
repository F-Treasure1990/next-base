"use client";

import React from "react";

import { ImageKitProvider } from "imagekitio-next";

import { env } from "@/env/client";

const publicKey = env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: unknown) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
export const urlEndpoint = env.NEXT_PUBLIC_URL_ENDPOINT;
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      {children}
    </ImageKitProvider>
  );
}
