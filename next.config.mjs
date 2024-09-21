import createJiti from "jiti";
import { fileURLToPath } from "url";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env/server.ts");

const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
