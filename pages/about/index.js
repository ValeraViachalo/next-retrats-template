import Head from "next/head";
import AboutPage from "../components/AboutPage/AboutPage";

export default function About() {
  return (
    <>
    <Head>
    <title>Create App</title>
    <meta name="description" content="Generated" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <AboutPage />
    </>
  );
}
