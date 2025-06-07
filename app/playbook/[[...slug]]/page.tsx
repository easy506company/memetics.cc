import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
// import { playbook_routes } from "@/lib/playbook-routes-config";
import { notFound } from "next/navigation";
import { getCompiledContentForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";


// In Next.js 15, params and searchParams are Promises in server components.
// Update the type accordingly and await them inside the function.

type PagePropsAsync = {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PlaybookPage({ params }: PagePropsAsync) {
  const { slug = [] } = await params;

  const pathName = slug.join("/");
  const res = await getCompiledContentForSlug(pathName, "playbook");

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="sm:text-3xl text-2xl !-mt-0.5">
              {res.frontmatter.title}
            </h1>
            <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>

      <Toc path={pathName} baseFolder='playbook'/>
    </div>
  );
}

export async function generateMetadata({ params }: PagePropsAsync) {
  const { slug = [] } = await params;
  const pathName = slug.join("/");
  const res = await getDocFrontmatter(pathName, "playbook");
  if (!res) return {};

  const { title, metaDescription } = res;

  const canonicalUrl = `https://memetics.co/playbook/${pathName}`;

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: ["intro"] },
    { slug: ["getting-started"] },
    { slug: ["examples", "dark-patterns"] },
    // dodaj ręcznie inne znane ścieżki
  ];
}

