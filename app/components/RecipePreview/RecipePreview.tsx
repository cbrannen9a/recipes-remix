import { RecipeType } from "~/types/edamam";
import { Ingredients } from "./Ingredients";

export function RecipePreview({
  label,
  images,
  url,
  ingredients,
  externalId,
}: RecipeType) {
  const image = images.THUMBNAIL;

  return (
    <div className="flex flex-col">
      <a href={url} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          {image ? (
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={image?.url}
              height={image?.height}
              width={image?.width}
              alt={label}
            />
          ) : null}
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {label}
          </p>
        </div>
      </a>
      <div className="min-w-0 flex-auto">
        <Ingredients ingredients={ingredients} externalId={externalId} />
      </div>
    </div>
  );
}
