import createJiti from "jiti";
import { fileURLToPath } from "url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env/server.ts");

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
