import Layout from "../layout/main";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DocsHomePage() {
    const router = useRouter();
    return (
        <Layout>
            <section className="flex flex-col items-start gap-6 py-12 md:py-16 lg:py-24 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Welcome to VARIUS.
                    </h1>
                    <p className="text-muted-foreground max-w-prose">
                        VARIUS make a Web3 and WebAPI library development easier. <br />
                        VX | varius technology.
                    </p>
                    <div className="flex gap-3">
                        <Button onClick={() => router.push("/docs/introduction")}>Get Started</Button>
                        <Button variant="secondary" onClick={() => router.push("/docs/introduction")}>Learn More</Button>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <Image
                        loading="lazy"
                        src="https://ogp-img-gen.vercel.app/api/img-gen?text=VX3+VARIUS+Platform"
                        alt="VARIUS preview"
                        width={1920}
                        height={860}
                        className="aspect-video w-full rounded-lg border bg-muted"
                    />
                </div>
            </section>
        </Layout>
    );
}