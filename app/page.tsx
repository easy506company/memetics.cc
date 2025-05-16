import { library_routes } from "@/lib/library-routes-config";
import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link
        href="https://x.com/defenderofbasic"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        قيد الإنشاء. تجدنا على X.{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-center sm:text-left">
        الميمات
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-center sm:text-left">
        نرسم خريطة للحياة السرية للأفكار. ندرس كيف تتكاثر وتتطور وتستولي على العقول — ممزجين بين البحث المفتوح والدَّرْما القديمة.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link
          href="/articles"
          className={buttonVariants({
            variant: "default",
            className: "px-6",
            size: "lg"
          })}
        >
          قراءة المقالات
        </Link>
        <Link
          href={`/library${library_routes[0].href}`}
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          ادخل المكتبة
        </Link>

      </div>
      <span className="flex flex-col items-start text-left text-muted-foreground text-sm mt-5 -mb-12 max-[800px]:mb-12">
        <span className="font-semibold mb-2">
         ما الجديد:
        </span>
        <span className="font-semibold mb-2">
          v{process.env.APP_VERSION}
        </span>
        <Link href="/">
          - نحن على الهواء مباشرة.
        </Link>
      </span>
    </div>
  );
}
