import invariant from "tiny-invariant";

export function getEdamam() {
  invariant(
    process.env.EDAMAM_APP_ID,
    "Missing environment variable: EDAMAM_APP_ID"
  );
  invariant(
    process.env.EDAMAM_APP_KEY,
    "Missing environment variable: EDAMAM_APP_KEY"
  );
  invariant(
    process.env.EDAMAM_BASE_URL,
    "Missing environment variable: EDAMAM_BASE_URL"
  );
  invariant(
    process.env.EDAMAM_RECIPE_API_PATH,
    "Missing environment variable: EDAMAM_RECIPE_API_PATH"
  );

  return {
    EDAMAM_APP_ID: process.env.EDAMAM_APP_ID,
    EDAMAM_APP_KEY: process.env.EDAMAM_APP_KEY,
    EDAMAM_BASE_URL: process.env.EDAMAM_BASE_URL,
    EDAMAM_RECIPE_API_PATH: process.env.EDAMAM_RECIPE_API_PATH,
  };
}
