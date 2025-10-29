import { DocsLayout } from "../../layout/main";

export default function GettingStartedDocsPage() {
    return (
        <DocsLayout>
            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"><section id="why-vx3">Why VX3?</section></h1>
            <ul className="list-none flex flex-col pt-10">
                <li className="board gap-3 mb-6 flex flex-col">
                    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                        Fast Setup
                    </h2>
                    <p>
                        Get started quickly with our easy-to-use SDKs and comprehensive documentation.
                    </p>
                    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                        Multi-Chain, but One Integration
                    </h2>
                    <p>
                        Easily deploy your applications across multiple blockchains with our unified API.
                    </p>
                </li>
                <li className="board gap-3 mb-6 flex flex-col">
                    <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                        LoadMap
                    </h2>
                </li>
            </ul>
        </DocsLayout>
    );
}