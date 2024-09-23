"use client";

import { useState } from "react";

import { IKImage, IKUpload } from "imagekitio-next";

import { urlEndpoint } from "./components/providers";

export default function Home() {
  const [filePath, setFilePath] = useState<string | null>(null);
  return (
    <div>
      {filePath && (
        <IKImage
          path={filePath}
          alt="Bear"
          height={300}
          width={300}
          priority={true}
          urlEndpoint={urlEndpoint}
          transformation={[{ raw: "l-text,i-Hello World,fs-50,l-end" }]}
        />
      )}
      <div>
        <h2>File upload</h2>
        <IKUpload
          fileName="test-upload.png"
          onError={(error) => console.log("error", error)}
          onSuccess={(res) => setFilePath(res.filePath)}
        />
      </div>
    </div>
  );
}
