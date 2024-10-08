import AboutPage from "@/components/AboutPage/AboutPage";
import { URL_ABOUT } from "@/helpers/DataUrls";
import { DataProvider } from "@/providers/DataProvider/DataProvider";
import { PageHead } from "@/utils/PageHead/PageHead";

export default function About({ data }) {
  return (
    <>
      <PageHead data={data} />
      <DataProvider url={URL_ABOUT}>
        <AboutPage />
      </DataProvider>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(URL_ABOUT);
  const data = await response.json();
  return { props: { data } };
}
