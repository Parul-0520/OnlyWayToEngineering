import { serve } from "inngest/next";
// import {helloWorld} from "@/lib/inngest/function";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

export const { GET, POST } = serve({
  client: inngest,
  functions: [
    // helloWorld,
  ],
  // functions: [generateIndustryInsights],
});