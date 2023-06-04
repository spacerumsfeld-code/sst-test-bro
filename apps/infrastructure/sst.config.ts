import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack";
import { Web } from "./stacks/Web";
import { ChatAPI } from "../backend/chat/chat.service";

export default {
  config(_input) {
    return {
      name: "rest-api",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Web);
    // app.stack(ExampleStack);
    app.stack(ChatAPI);
  },
} satisfies SSTConfig;
