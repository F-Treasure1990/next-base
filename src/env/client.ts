import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  // These variables are safe to expose to the client
  client: {
    NEXT_PUBLIC_URL_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_PUBLIC_KEY: z.string(),
  },
  runtimeEnv: {
    // eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_URL_ENDPOINT: process.env.NEXT_PUBLIC_URL_ENDPOINT,
    // eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  },

  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,
});
