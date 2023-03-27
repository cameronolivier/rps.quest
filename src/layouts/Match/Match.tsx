import Head from 'next/head';

import Match from '../../modules/Match';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors! FIGHT!</title>
        <meta name="description" content="Fight the good fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Match />
        </div>
      </main>
    </>
  );
}
