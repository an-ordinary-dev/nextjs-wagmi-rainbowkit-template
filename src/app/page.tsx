import { StarIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 leading-tight">
        Next.js 15.3 Template Using RainbowKit, Wagmi, and TailwindCSS
      </h1>
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center gap-1">
          <span className="text-base sm:text-lg text-white/80">Get started by editing this page in</span>
          <code className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded text-sm font-mono mt-1">/src/app/page.tsx</code>
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <span className="text-base sm:text-lg text-white/80">To configure supported chains, edit</span>
          <code className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded text-sm font-mono mt-1">/src/lib/config.ts</code>
          <span className="text-xs text-white/60 block mt-1">Modify the <b>supportedChains</b> array to add or remove EVM chains.</span>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <a
            href="https://github.com/Byteory/nextjs-wagmi-rainbowkit-template"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white text-sm font-medium shadow transition"
          >
            <StarIcon className="w-5 h-5 text-yellow-400" />
            Star on Github
          </a>
        </div>
      </div>
      <footer className="mt-16 text-sm sm:text-base text-white text-center w-full font-medium">
        Free template by <a href="https://byteory.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400 transition">Byteory</a>
      </footer>
    </div>
  );
}
