import Link from "next/link";
import { useEffect, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="text-sm font-semibold">VX | VARIUS</div>
                    <SDKVersion />
                </div>
            </header>
            <main className="flex-1">
                <div className="container py-8">{children}</div>
            </main>
            <footer className="border-t">
                <div className="container py-6 text-center text-sm text-muted-foreground">
                    (c) 2021 VARIUS | Nknight AMAMIYA
                </div>
            </footer>
        </div>
    );
}

const getVersionHandler = async () => {
    const res = await fetch("/api", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { info?: { version?: string } };
    return data?.info?.version ?? "unknown";
}

function SDKVersion() {
    const [version, setVersion] = useState<string>("");

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            const version = await getVersionHandler();
            if (!cancelled) setVersion(version);
        };
        load();
        return () => {
            cancelled = true;
        };
    }, []);

    return <span className="text-sm text-muted-foreground">{version || "loading..."}</span>;
}
export function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="text-sm font-semibold">
                        <Link href="/">VX Docs | VARIUS</Link>
                    </div>
                    <SDKVersion />
                </div>
            </header>
            <main className="flex-1">
                <div className="container py-8">{children}</div>
            </main>
            <footer className="border-t">
                <div className="container py-6 text-center text-sm text-muted-foreground">
                    (c) 2021 VARIUS | Nknight AMAMIYA
                </div>
            </footer>
        </div>
    );
}

export default Layout;