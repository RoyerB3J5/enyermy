"use client";

export default function ProductsError({ reset }: { reset: () => void }) {
  return (
    <main className="container-full flex min-h-96 flex-col items-center justify-center gap-5 py-16 text-center">
      <h1 className="title-h4 text-primary">Products are unavailable</h1>
      <p className="paragraph max-w-md text-primary-light">
        We could not load the product catalog. Please try again.
      </p>
      <button
        type="button"
        className="cursor-pointer rounded-full border border-primary bg-primary px-6 py-3 text-[14px] font-medium tracking-[3px] text-white transition-colors hover:bg-[#2D2D2D]"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
