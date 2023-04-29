import SubmitButton from "@/ui/components/SubmitButton";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl">初期画面</div>
        <SubmitButton text="送信" />
      </main>
    </>
  );
}
