<div align="center">

# 🥟 my-bun-api

**A fast, modular REST API built with the [Bun](https://bun.sh) runtime.**

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

</div>

---

## ✨ Features

- ⚡ **Blazing fast** — powered by the Bun runtime
- 🗂️ **Modular structure** — clean separation of routes, controllers, and utilities
- 📦 **JSON-first** — consistent JSON responses out of the box
- 🔌 **Easily extensible** — add new routes and controllers in minutes
- 🔁 **Multi-method support** — GET ready, expandable to POST / PUT / DELETE

---

## 📁 Project Structure

```
my-bun-api/
├── server.ts                  # Entry point
├── package.json               # Project manifest
├── bun.lockb                  # Bun lockfile
├── tsconfig.json              # TypeScript config
├── routes/
│   └── hello.ts               # Example route
├── controllers/
│   └── helloController.ts     # Route logic
└── utils/
    └── response.ts            # JSON response helper
```

---

## 🛠️ Requirements

- **Bun** >= 1.0 — [Install Bun](https://bun.sh/docs/installation)
- Node.js *(optional — only for dev tooling)*

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone <your-repo-url>
cd my-bun-api
```

**2. Install dependencies**

```bash
bun install
```

**3. Start the server**

```bash
bun run server.ts
```

The server will be running at **`http://localhost:3000`** 🎉

---

## 📡 API Endpoints

### `GET /hello`

Returns a simple JSON greeting.

```bash
curl http://localhost:3000/hello
```

**Response:**

```json
{
  "message": "Hello from Bun API!"
}
```

---

## ➕ Adding New Routes

**1. Create a route file** in `routes/` (e.g., `routes/user.ts`):

```ts
export function userRouter(req: Request) {
  if (req.method === "GET") {
    return new Response(JSON.stringify({ user: "John Doe" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response("Method Not Allowed", { status: 405 });
}
```

**2. Register it in `server.ts`:**

```ts
import { userRouter } from "./routes/user";

if (url.pathname.startsWith("/user")) {
  return userRouter(req);
}
```

**3.** *(Optional)* Create a matching controller in `controllers/` for complex logic.

---

## 🧰 Utilities

### `utils/response.ts`

A helper for sending consistent JSON responses:

```ts
export function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

**Usage:**

```ts
import { jsonResponse } from "../utils/response";

return jsonResponse({ message: "Created!" }, 201);
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
