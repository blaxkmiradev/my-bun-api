import { serve } from "bun";
import { helloRouter } from "./routes/hello";

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/hello")) {
      return helloRouter(req);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running on http://localhost:3000");
