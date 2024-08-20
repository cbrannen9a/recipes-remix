import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getRecipes } from "./queries";
import { Search } from "./search";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!query) {
    return json({ recipes: null, query });
  }

  const recipes = await getRecipes({ query });

  return json({ recipes, query });
}

export { Search as default };
