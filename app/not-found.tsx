import Wordmark from "@/components/Wordmark";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <a href="/" aria-label="Wayne Capital home" className="group">
        <Wordmark />
      </a>
      <p className="mt-10 label">Error 404</p>
      <h1 className="mt-3 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 max-w-[44ch] text-muted">
        The page you&rsquo;re looking for isn&rsquo;t here. Let&rsquo;s get you
        back to Main Street.
      </p>
      <a href="/" className="btn btn-solid mt-8">
        Back to Wayne Capital
      </a>
    </main>
  );
}
