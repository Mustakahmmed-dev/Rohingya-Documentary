import AboutDetails from "@/components/AboutSections/AboutDetails";
import HeroAbout from "@/components/AboutSections/HeroAbout";
import Head from "next/head";

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Action Against Rohingya Atrocities",
    "url": "https://aara.org",
    "logo": "https://https://aara.org/images/logo.png",
    "sameAs": [],
    "description":
      "Action Against Rohingya Atrocities documents and publishes verified evidence of human rights violations and atrocities against the Rohingya people.",
  };

  return (
    <>
      <Head>
        <title>About AARA | Action Against Rohingya Atrocities</title>
        <meta
          name="description"
          content="Action Against Rohingya Atrocities documents verified evidence of crimes against Rohingya communities. Learn about our mission, methods and how to contribute."
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>
      <main>
        <HeroAbout />
        <AboutDetails />
      </main>
    </>
  );
}
