My Bun API

A simple, modular REST API built with Bun.
This project demonstrates fast API development with routes, controllers, and utilities.

Features
Fast API using Bun runtime
Modular folder structure (routes, controllers, utils)
JSON responses
Easy to extend with new routes and controllers
Supports GET requests (easily expandable to POST/PUT/DELETE)
Project Structure
my-bun-api/
├── package.json         # Project manifest
├── bun.lockb            # Bun dependency lock file
├── tsconfig.json        # TypeScript config
├── server.ts            # Entry point of the server
├── routes/              # API routes
│   └── hello.ts         # Example hello route
├── controllers/         # Route logic / controllers
│   └── helloController.ts
└── utils/               # Utility functions
    └── response.ts      # JSON response helper
Requirements
Bun
 >= 1.0
Optional: Node.js for development tools (not required)
Installation
Clone the repository:
git clone <your-repo-url>
cd my-bun-api
Install dependencies:
bun install
Running the Server
bun run server.ts

Server will run on:

http://localhost:3000
API Endpoints
GET /hello

Returns a simple JSON message:

curl http://localhost:3000/hello

Response:

{
  "message": "Hello from Bun API!"
}
Adding New Routes
Create a new route file in routes/ (e.g., user.ts):
export function userRouter(req: Request) {
  if (req.method === "GET") {
    return new Response(JSON.stringify({ user: "John Doe" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response("Method Not Allowed", { status: 405 });
}
Create a corresponding controller in controllers/ if needed.
Update server.ts to include the new route:
import { userRouter } from "./routes/user";

if (url.pathname.startsWith("/user")) {
  return userRouter(req);
}
Utilities
utils/response.ts: Helper function for sending JSON responses:
export function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
License

MIT License
