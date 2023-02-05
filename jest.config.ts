import type { Config } from "@jest/types";

const config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@nataliebasille/.*)"],
};

export default config;
