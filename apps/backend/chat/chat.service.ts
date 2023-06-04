import { StackContext, Api, Function } from "sst/constructs";
import path from "path";

export function ChatAPI({ stack }: StackContext) {
  /** Lambdas */
  const getChatFunction = new Function(stack, "GetChatFunction", {
    handler: "../backend/chat/lambdas/getChat.lambda.handler",
    logRetention: "one_day",
    timeout: 10,
  });

  // const getChatsFunction = new Function(stack, "GetChatsFunction", {
  //   handler: "./lambdas/getChats.lambda",
  //   logRetention: "one_day",
  //   timeout: 10,
  // });

  // const postChatFunction = new Function(stack, "PostChatFunction", {
  //   handler: "./lambdas/postChat.lambda",
  //   logRetention: "one_day",
  //   timeout: 10,
  // });

  /** API Gateway */
  const api = new Api(stack, "ChatAPI", {
    routes: {
      "GET /chat": getChatFunction,
      // "GET /chats": getChatsFunction,
      // "POST /chat": postChatFunction,
      // $default: "packages/functions/src/default.lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    description: "The endpoint for the Chat API",
  });
}

/** An architectural / DX / organizational pattern:
 Lets think about a DX flow:
 1. Add to domain if needed by adding/modifying types/interfaces in service directory.
 2. Add service method to class.
 4. Modify service repository if needed.
 5. Add lambda to infra service.
 6. Provide lambda with access to secrets and additional AWS resources as needed.
 6. Add new route associated with lambda to API.
 7. Add actualy lambda code! Hah.
 8. Implement additional flow/resources such as queue and/or event
 9. Implement micro-frontend IE React component that will need to access API! Boom. (or, go in reverse order)

 Puzzles:
 1. Secrets management, not just in lambdas
 2. Dev/production environment
 3. CI/CD and how it interacts with SST.
 4. Testing at level of service, lambda, and API.
 5. Look into documentation more. It looks like we can somehow get API gateways to convert events into "responses" in the traditional sense that the client is waiting for. Therefore maybe we can still have our request/response cycle (from the ignorant client perspective) while still using event-driven architecture. This would be a huge win.
 6. Alternative: maybe the majority of our code is request/response via the provided API gateways tied to services, but in some cases we implement event/queue-driven architecture and convey messages back to the client via websocket. This will probably entail co-mingling of service code in the lambdas we invoke, but the good news is that the services themselves will still be decoupled at the level of classes we are invoking. Things like notifications and emails, in-app messages and so on can be handled via websocket and events and the rest of the code can be basic.
**/
