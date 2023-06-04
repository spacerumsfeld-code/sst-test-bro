import { StackContext, StaticSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const site = new StaticSite(stack, "Site", {
    path: "../../apps/blog",
    buildCommand: "npm run build",
  });

  stack.addOutputs({
    URL: site.url,
  });
}
