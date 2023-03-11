import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/bcit.svg";
import search from "@/public/images/magnifying-glass-solid.svg";

export default function Navbar({ dir }) {
  const { locales } = useRouter();

  return (
    <>
      <main className={styles.main} dir={dir}>
        <header className={styles.header}>
          <div className={styles.wrap}>
            <div className={styles.langs}>
              {[...locales].sort().map((locale) => (
                <Link
                  key={locale}
                  href="/"
                  locale={locale}
                  className={styles.link}
                  style={{ textDecoration: "none" }}
                >
                  <div>{locale}</div>
                </Link>
              ))}
            </div>
            <div>
              <ul className={styles.list}>
                <li className={styles.linkbox}>
                  <Link href="/" className={styles.link}>
                    <FormattedMessage id="nav.head.learninghub" />
                  </Link>
                </li>
                <li className={styles.linkbox}>
                  <Link href="/" className={styles.link}>
                    <FormattedMessage id="nav.head.mybcit" />
                  </Link>
                </li>
                <li className={styles.linkbox}>
                  <Link href="/" className={styles.link}>
                    <FormattedMessage id="nav.head.students" />
                  </Link>
                </li>
                <li className={styles.linkbox}>
                  <Link href="/" className={styles.link}>
                    <FormattedMessage id="nav.head.staff" />
                  </Link>
                </li>
                <li className={styles.linkbox}>
                  <Link href="/" className={styles.link}>
                    <FormattedMessage id="nav.head.events" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className={styles.nav}>
          <div className={styles.innernav}>
            <div className={styles.innerleft}>
              <div className={styles.logo}>
                <Image src={logo} width={70} alt="logo" />
              </div>
              <ul className={styles.listtwo}>
                <li>
                  <Link href="/" className={styles.innerlink}>
                    <FormattedMessage id="nav.main.programs" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.innerlink}>
                    <FormattedMessage id="nav.main.admission" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.innerlink}>
                    <FormattedMessage id="nav.main.studentservices" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.innerlink}>
                    <FormattedMessage id="nav.main.research" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.innerlink}>
                    <FormattedMessage id="nav.main.about" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.innerright}>
              <form className={styles.search}>
                <input type="text" />
                <button type="submit" className={styles.btn}>
                  <Image src={search} width={25} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
