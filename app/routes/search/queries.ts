import { getEdamam } from "~/lib/edamam";
import { RecipeType } from "~/types/edamam";

export async function getRecipes({ query }: { query: string }) {
  const {
    EDAMAM_APP_ID,
    EDAMAM_APP_KEY,
    EDAMAM_BASE_URL,
    EDAMAM_RECIPE_API_PATH,
  } = getEdamam();

  const response = await fetch(
    `${EDAMAM_BASE_URL}${EDAMAM_RECIPE_API_PATH}?type=public&q=${query}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&random=true`
  );
  const data = await response.json();

  const recipes: RecipeType[] = data.hits.map(
    ({
      recipe: { externalId, images, ingredients, label, url },
    }: {
      recipe: RecipeType;
    }) => {
      return {
        externalId,
        images,
        label,
        url,
        ingredients,
      };
    }
  );
  return recipes;
}
