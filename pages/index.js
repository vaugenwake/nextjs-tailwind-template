import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto p-12 max-w-lg">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Running Next.js & Tailwind
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Your nextjs and tailwind UI app is running.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
