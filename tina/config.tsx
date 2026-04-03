import { defineConfig } from "tinacms";
import nextConfig from '../next.config'

import Post from "./collection/post";
import Global from "./collection/global";
import Author from "./collection/author";
import Page from "./collection/page";
import Category from "./collection/category";

const config = defineConfig({
  telemetry: 'disabled',
  clientId: 'ec3f00d4-f48d-4caf-916e-d2fbb034bf05', //process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch: 'main',
  //process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
  //process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
  //process.env.HEAD!, // Netlify branch env
  token: 'f490830f6b10c8c490e62bb713b391da274e2f5d',//process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
    basePath: nextConfig.basePath?.replace(/^\//, '') || '', // The base path of the app (could be /blog)
  },
  schema: {
    collections: [Page, Post, Author, Category, Global],
  },
});

export default config;
