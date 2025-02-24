/* eslint-disable @typescript-eslint/no-require-imports */
const { headers } = require("next/headers");

export const preventNestedLoadings = (pathname) => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const checkNested = fullUrl.split(pathname).length > 1;
  if (checkNested) {
    return undefined;
  }
};
