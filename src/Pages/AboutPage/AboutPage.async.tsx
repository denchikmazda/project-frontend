import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // Проверить работоспособность
      // @ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
