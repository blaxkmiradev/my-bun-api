import { jsonResponse } from "../utils/response";

export function helloController() {
  return jsonResponse({ message: "Hello from Bun API!" });
}
