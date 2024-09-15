import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

const routes = app.get("/api/clock", (c) => {
  return c.json({
    time: new Date().toLocaleTimeString(),
  });
});

export type AppType = typeof routes;

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        <script type="module" src="/static/scripts/client.js"></script>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>,
  );
})
  .get("/static/*", serveStatic({ root: "./" }));
export default app;
