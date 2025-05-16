// for page navigation & to sort on leftbar

import { type EachRoute } from "@/types/eachRoute";



export const LIBRARY_ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/introduction",
  },
 
]


type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const library_routes = LIBRARY_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
