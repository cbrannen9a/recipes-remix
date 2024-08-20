import { Form, useLoaderData } from "@remix-run/react";
import { RecipePreview } from "~/components";
import { loader } from "./route";

export function Search() {
  const { recipes, query } = useLoaderData<typeof loader>();

  return (
    <>
      <Form>
        <input
          defaultValue={query || ""}
          className="h-12 flex w-full justify-center rounded-md p-2 my-2"
          aria-label="search"
          name="query"
          type="text"
          placeholder="Search..."
        />
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Search
        </button>
      </Form>
      {recipes && recipes.length > 0 ? (
        <ul className="divide-y divide-gray-100">
          {recipes.map(
            ({ externalId, label, url, images, ingredients }, idx) => (
              <li
                className="flex justify-between gap-x-6 py-5"
                key={`${externalId}-${idx}`}
              >
                <RecipePreview
                  externalId={`${externalId}-${idx}`}
                  label={label}
                  url={url}
                  images={images}
                  ingredients={ingredients}
                />
              </li>
            )
          )}
        </ul>
      ) : (
        <>
          {query ? (
            <div>No recipes found</div>
          ) : (
            <div>Please enter a search term</div>
          )}
        </>
      )}
    </>
  );
}
