import HomePage from "@/components/HomePage/HomePage";
import { URL_HOME } from "@/helpers/DataUrls";
import { DataProvider } from "@/providers/DataProvider/DataProvider";
import { PageHead } from "@/utils/PageHead/PageHead";

export default function Home() {
  return (
    <DataProvider url={URL_HOME}>
      <PageHead />
      <HomePage />
    </DataProvider>
  );
}
