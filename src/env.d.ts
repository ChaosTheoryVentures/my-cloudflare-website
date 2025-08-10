/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface ImportMetaEnv {
  readonly __CLOUDFLARE_WORKERS__: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}