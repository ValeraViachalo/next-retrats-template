import { useEffect } from "react";

import { PageLayout } from "@/utils/PageLayout/PageLayout";
import Image from "next/image";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <PageLayout>
      <div style={{ width: "100vw", height: "200vh", position: "relative" }}>
        <Image
          src="https://images.beta.cosmos.so/9369005b-bbf3-49a1-89cf-0587f1e53347?format=jpeg"
          fill
        />
      </div>
    </PageLayout>
  );
}
