// src/env.ts

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const isRuntime = process.env.RUNNING_ENV === 'runtime';

const runtimeRequiredString = isRuntime ? z.string() : z.string().optional();

export const env = createEnv({
  server: {
    // Authentication
    REBIZ_APP_AUTH_GOOGLE_ID: z.string().optional(),
    REBIZ_APP_AUTH_GOOGLE_SECRET: z.string().optional(),
    ENABLED_LOGIN_DOMAINS_REGEX: z.string(),
    NEXTAUTH_SECRET: runtimeRequiredString,
    REBIZ_APP_AUTH_KEYCLOAK_ID: z.string().optional(),
    REBIZ_APP_AUTH_KEYCLOAK_SECRET: z.string().optional(),
    REBIZ_APP_AUTH_KEYCLOAK_ISSUER: z.string().url().optional(),

    // APIs
    EMAIL_API_KEY: z.string().optional(),
    WEATHER_API_KEY: z.string().optional(),
    NOVU_API_KEY: runtimeRequiredString,

    // Database
    POSTGRES_PASSWORD: runtimeRequiredString,
    POSTGRES_USER: z.string(),
    POSTGRES_DATABASE: z.string(),
    CLOUD_SQL_CONNECTION_NAME: z.string(),

    // Zeebe/Zeeqs
    ZEEBE_GATEWAY_URL: z.string().url(),
    ZEEBE_LOG_LEBEL: z.string().optional(),
    ZEEBE_MAX_RETRIES: z
      .string()
      .transform((s) => parseInt(s, 10))
      .pipe(z.number())
      .optional(),

    // Files upload
    REBIZ_APP_BUCKET_EMAIL: z.string(),
    REBIZ_APP_BUCKET_SECRET: z.string().optional(),
    REBIZ_APP_BUCKET_NAME: z.string(),
    REBIZ_APP_PROJECT_ID: z.string(),

    // Sentry
    NEXT_ENABLE_SENTRY_LOGS: z.string().optional(),
    NEXT_SENTRY_DSN: z.string().url(),

    // NodeJs
    NEXT_RUNTIME: z.string(),
  },
  client: {
    // Client-side only variables

    // App
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_LOG_LEVEL: z.string().optional(),
    NEXT_PUBLIC_API_INTERNAL_BASE: z.string().url(),
    NEXT_PUBLIC_ENABLE_PERMIT_ACCESS_LOGS: z.string().optional(),

    NEXT_PUBLIC_ENABLE_KEYCLOAK_LOGIN: z.string().optional(),

    NEXT_PUBLIC_MAP_API_KEY: z.string(),
    NEXT_PUBLIC_MAP_MAP_ID: z.string(),
    NEXT_PUBLIC_NOVU_APP_ID: z.string(),
    NEXT_PUBLIC_NOVU_API: z.string().url(),
    NEXT_PUBLIC_NOVU_WS: z.string().url(),
    NEXT_PUBLIC_APP_TITLE: z.string().optional(),
    NEXT_PUBLIC_NEXTAUTH_BASEPATH: z.string(),
    NEXT_PUBLIC_ENABLE_E2E: z.string().optional(),
    NEXT_PUBLIC_LOGO_IMAGE: z.string().optional(),
    NEXT_PUBLIC_ZEEBE_PLAY_BASE: z.string().optional(),
    NEXT_PUBLIC_APP_VERSION: z.string(),
    NEXT_PUBLIC_GRAPHQL_URL: z.string().url(),
    NEXT_PUBLIC_WEBSOCKET_URL: z.string().url(),
  },
  runtimeEnv: {
    // App
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_INTERNAL_BASE: process.env.NEXT_PUBLIC_API_INTERNAL_BASE,
    NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
    NEXT_PUBLIC_ENABLE_PERMIT_ACCESS_LOGS: process.env.NEXT_PUBLIC_ENABLE_PERMIT_ACCESS_LOGS,

    // Authentication
    REBIZ_APP_AUTH_GOOGLE_ID: process.env.REBIZ_APP_AUTH_GOOGLE_ID,
    REBIZ_APP_AUTH_GOOGLE_SECRET: process.env.REBIZ_APP_AUTH_GOOGLE_SECRET,
    ENABLED_LOGIN_DOMAINS_REGEX: process.env.ENABLED_LOGIN_DOMAINS_REGEX,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    REBIZ_APP_AUTH_KEYCLOAK_ID: process.env.REBIZ_APP_AUTH_KEYCLOAK_ID,
    REBIZ_APP_AUTH_KEYCLOAK_SECRET: process.env.REBIZ_APP_AUTH_KEYCLOAK_SECRET,
    REBIZ_APP_AUTH_KEYCLOAK_ISSUER: process.env.REBIZ_APP_AUTH_KEYCLOAK_ISSUER,
    NEXT_PUBLIC_ENABLE_KEYCLOAK_LOGIN: process.env.NEXT_PUBLIC_ENABLE_KEYCLOAK_LOGIN,

    // APIs
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    NOVU_API_KEY: process.env.NOVU_API_KEY,

    // Database
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    CLOUD_SQL_CONNECTION_NAME: process.env.CLOUD_SQL_CONNECTION_NAME,

    // Zeebe/Zeeqs
    ZEEBE_GATEWAY_URL: process.env.ZEEBE_GATEWAY_URL,
    ZEEBE_LOG_LEBEL: process.env.ZEEBE_LOG_LEBEL,
    ZEEBE_MAX_RETRIES: process.env.ZEEBE_MAX_RETRIES,

    // Files upload
    REBIZ_APP_BUCKET_EMAIL: process.env.REBIZ_APP_BUCKET_EMAIL,
    REBIZ_APP_BUCKET_SECRET: process.env.REBIZ_APP_BUCKET_SECRET,
    REBIZ_APP_BUCKET_NAME: process.env.REBIZ_APP_BUCKET_NAME,
    REBIZ_APP_PROJECT_ID: process.env.REBIZ_APP_PROJECT_ID,

    // Sentry
    NEXT_ENABLE_SENTRY_LOGS: process.env.NEXT_ENABLE_SENTRY_LOGS,
    NEXT_SENTRY_DSN: process.env.NEXT_SENTRY_DSN,

    // NodeJs
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,

    // Client-side only variables
    NEXT_PUBLIC_ENABLE_E2E: process.env.NEXT_PUBLIC_ENABLE_E2E,
    NEXT_PUBLIC_APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
    NEXT_PUBLIC_LOGO_IMAGE: process.env.NEXT_PUBLIC_LOGO_IMAGE,
    NEXT_PUBLIC_MAP_API_KEY: process.env.NEXT_PUBLIC_MAP_API_KEY,
    NEXT_PUBLIC_MAP_MAP_ID: process.env.NEXT_PUBLIC_MAP_MAP_ID,
    NEXT_PUBLIC_NOVU_APP_ID: process.env.NEXT_PUBLIC_NOVU_APP_ID,
    NEXT_PUBLIC_NOVU_API: process.env.NEXT_PUBLIC_NOVU_API,
    NEXT_PUBLIC_NOVU_WS: process.env.NEXT_PUBLIC_NOVU_WS,
    NEXT_PUBLIC_NEXTAUTH_BASEPATH: process.env.NEXT_PUBLIC_NEXTAUTH_BASEPATH,

    NEXT_PUBLIC_ZEEBE_PLAY_BASE: process.env.NEXT_PUBLIC_ZEEBE_PLAY_BASEPATH,

    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_WEBSOCKET_URL: process.env.NEXT_PUBLIC_WEBSOCKET_URL,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
  },
});
