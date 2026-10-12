import { defineMiddleware } from 'astro:middleware';

// Middleware de ejemplo: se ejecuta en cada request.
// Útil para redirects, headers, auth, etc. cuando el proyecto lo necesite.
export const onRequest = defineMiddleware(async (context, next) => {
  return next();
});
