import HomePage from "@/components/HomePage/HomePage";
import { URL_HOME } from "@/helpers/DataUrls";
import { DataProvider } from "@/providers/DataProvider/DataProvider";
import { PageHead } from "@/utils/PageHead/PageHead";

export default function Home({ data }) {
  return (
    <>
      <PageHead data={data} />
      <DataProvider url={URL_HOME}>
        <HomePage />
      </DataProvider>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(URL_HOME);
  const data = await response.json();
  return { props: { data } };
}
