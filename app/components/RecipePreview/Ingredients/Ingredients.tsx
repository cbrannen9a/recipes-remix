import { RecipeType } from "~/types/edamam";

export function Ingredients({
  ingredients,
  externalId,
}: Pick<RecipeType, "ingredients" | "externalId">) {
  return (
    <>
      {ingredients.map(({ foodId, food }, idx) => (
        <span
          key={`${externalId}.${foodId}.${idx}`}
          className="m-1 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >
          {food}
        </span>
      ))}
    </>
  );
}
