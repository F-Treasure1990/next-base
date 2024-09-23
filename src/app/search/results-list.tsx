"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { urlEndpoint } from "../components/providers";

export default function ResultsList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-3 place-items-center">
      {files.map((file) => (
        <Card key={file.fileId} className="w-max">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <IKImage
              path={file.filePath}
              alt={file.name}
              height={300}
              urlEndpoint={urlEndpoint}
              width={300}
              priority={true}
            />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
