import { helloController } from "../controllers/helloController";

export function helloRouter(req: Request) {
  if (req.method === "GET") {
    return helloController();
  }

  return new Response("Method Not Allowed", { status: 405 });
}
