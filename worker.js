export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // API route example
    if (url.pathname.startsWith("/api")) {
      if (url.pathname === "/api/hello") {
        return new Response(JSON.stringify({ message: "Hello from Worker API!" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response("Not found", { status: 404 });
    }

    // Serve static assets via the ASSETS binding
    // env.ASSETS.fetch(request) will look up files uploaded from the directory in wrangler.toml
    return env.ASSETS.fetch(request);
  },
};
