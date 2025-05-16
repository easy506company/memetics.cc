import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
            <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
                <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
                    الميميات
                </h1>
                <p className="text-muted-foreground text-md font-medium mb-4">
                    علم المعاني ذاتية النسخ
                </p>
                <p>الأفكار لها حياة. تسافر، تتحوّر، وتتنافس على مكان في الذهن.</p>
                <p>الميميات ليست استعارة — بل بحث في فيزياء الثقافة.</p>
                <p>نجمع ونلاحظ ونرسم خرائط الآلة الصامتة خلف الإيمان والتقليد.</p>
                <p>ليس للسيطرة. ليس للحكم. بل للفهم — والدهشة.</p>
                <p className="mt-4 mb-4">
                    هل ترغب في مشاركة فكرة، مرجع، أو خيط للبحث؟{' '}
                </p>
                admin @ memetics.cc
                <p>
                    x:{' '}
                    <Link
                        href="https://x.com/darkpatterns"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @defenderOfSelf
                    </Link>
                </p>
                <div className="mt-8 flex flex-col items-center gap-2">
                    <span className="text-base text-muted-foreground font-medium text-md">
                        تصلك ملاحظاتنا من حدود تطوّر الثقافة:
                    </span>
                    <Button asChild variant="ghost" size="lg">
                        {/* <Link href="https://memetics.beehiiv.com/subscribe">
                            اشترك للحصول على التحديثات
                        </Link> */}
                    </Button>
                </div>
            </div>
        </div>
    );
}
