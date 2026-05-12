// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-slate-200 max-w-7xl h-[50vh] rounded-lg mt-10 mx-auto  items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg mt-2">Page Not Found</p>

      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
}