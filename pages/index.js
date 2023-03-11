import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import ActivePage from "@/components/ActivePage";
import Graphic from "@/components/Graphic";
import AsideMenu from "@/components/AsideMenu";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home({ dir }) {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "title" });
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" hrefLang="x-default" />
        <title>{title}</title>
      </Head>
      <main className={styles.main} dir={dir}>
        <ActivePage dir={dir} />
        <Graphic dir={dir} />s
        <section className={styles.contentbody}>
          <div className={styles.contentbody__wrap}>
            <AsideMenu dir={dir} />
            <MainContent dir={dir} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
