// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly EMAIL_ACCOUNT: string;
  readonly EMAIL_HOST: string;
  readonly EMAIL_PASSWORD: string;
  readonly EMAIL_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
