import Link from "next/link";
import { useEffect, useState } from "react";

function GlobalStyle({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black text-white">
            {children}
        </div>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof globalThis === "undefined") return "dark";
        try {
            const saved = (globalThis as any).localStorage?.getItem("theme");
            if (saved === "light" || saved === "dark") return saved;
            const matchMedia = (globalThis as any).matchMedia;
            return matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        // apply theme class for tailwind 'class' strategy or custom CSS
        const doc = (globalThis as any).document;
        if (doc?.documentElement) {
            doc.documentElement.classList.toggle("dark", theme === "dark");
        }
        try {
            (globalThis as any).localStorage?.setItem("theme", theme);
        } catch { }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 w-full border-b">
                <div className="container flex h-14 items-center justify-between">
                    <div className="text-sm font-semibold">VX | VARIUS</div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="px-2 py-1 rounded border hover:opacity-90"
                            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
                        >
                            {theme === "dark" ? "🌙" : "☀️"}
                        </button>
                        <SDKVersion />
                    </div>
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
        const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof globalThis === "undefined") return "dark";
        try {
            const saved = (globalThis as any).localStorage?.getItem("theme");
            if (saved === "light" || saved === "dark") return saved;
            const matchMedia = (globalThis as any).matchMedia;
            return matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        // apply theme class for tailwind 'class' strategy or custom CSS
        const doc = (globalThis as any).document;
        if (doc?.documentElement) {
            doc.documentElement.classList.toggle("dark", theme === "dark");
        }
        try {
            (globalThis as any).localStorage?.setItem("theme", theme);
        } catch { }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="text-sm font-semibold flex items-center gap-2">
                        <Link href="/">VX | VARIUS</Link>
                        <p>Docs</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="px-2 py-1 rounded border hover:opacity-90"
                        >
                            {theme === "dark" ? "🌙" : "☀️"}
                        </button>
                        <SDKVersion />
                    </div>
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