import Head from "next/head";
import Auth from "./Auth";
const AuthExample = () => (
  <>
    <Head>
      <title>Auth Showcase</title>
      <meta name="description" content="Example auth with Next Auth" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="flex flex-col items-center gap-2">
        <Auth />
      </div>
    </main>
  </>
);

export default AuthExample;
