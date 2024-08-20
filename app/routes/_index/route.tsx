import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Recipes Remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <div className="font-sans p-4">Welcome</div>
      <Link to="/search">Search</Link>
    </div>
  );
}
