import AboutPage from "@/components/AboutPage/AboutPage";
import { URL_ABOUT } from "@/helpers/DataUrls";
import { DataProvider } from "@/providers/DataProvider/DataProvider";
import { PageHead } from "@/utils/PageHead/PageHead";

export default function About() {
  return (
    <DataProvider url={URL_ABOUT}>
      <PageHead />
      <AboutPage />
    </DataProvider>
  );
}
