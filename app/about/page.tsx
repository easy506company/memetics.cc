import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
            <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
                <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
                    Memetics
                </h1>
                <p className="text-muted-foreground text-md font-medium mb-4">
                    The science of self-replicating meaning
                </p>
                <p>Ideas behave like living systems — they travel, evolve, and fight for mental space.</p>
                <p>Memetics isn't just metaphor. It's an exploration of the deep mechanics of culture.</p>
                <p>We collect, observe, and chart the silent architecture behind belief, myth, and tradition.</p>
                <p>Not for control. Not for judgment. But to understand — and marvel.</p>
                <p className="mt-4 mb-4">
                    Got an idea, reference, or research thread to share?
                </p>
                admin @ rook2root.co
                <p>
                    x:{' '}
                    <Link
                        href="https://x.com/darkpatterns"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @darkpatterns
                    </Link>
                </p>
                <div className="mt-8 flex flex-col items-center gap-2">
                    <span className="text-base text-muted-foreground font-medium text-md">
                        Get our notes from the frontiers of cultural evolution:
                    </span>
                    <Button asChild variant="ghost" size="lg">
                        <Link href="https://memetics.beehiiv.com/subscribe">
                            Subscribe for updates
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
