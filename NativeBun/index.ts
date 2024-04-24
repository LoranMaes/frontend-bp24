const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Hello, World!");
    }
    if (url.pathname === "/json") {
      return new Response(JSON.stringify({ message: "Hello, World!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server started at ${server.port}`);
