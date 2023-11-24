import type { CapacitorConfig } from "@capacitor/cli";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const config: CapacitorConfig = {
  appId: "com.usdzcollection.app",
  appName: "USDZ Collection",
  webDir: "out",
  server: {
    url: process.env.CAP_DEV_URL,
    cleartext: true,
  },
};

export default config;
