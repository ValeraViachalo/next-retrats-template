import Head from "next/head";

export const PageHead = ({ data }) => {
  return (
    <Head>
      <title>{data.documentTitle}</title>
      <meta name="og:title" content={data.documentTitle} />
      <meta name="description" content={data.documentDescription} />
      <meta property="og:image" content={data.documentImage} />
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="405" />
      <meta property="og:image:alt" content="RTRTS" />
    </Head>
  );
};