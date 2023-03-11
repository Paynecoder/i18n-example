import styles from "./ActivePage.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

export default function ActivePage({ dir }) {
  return (
    <>
      <main className={styles.main} dir={dir}>
        <div className={styles.wrap}>
          <div>
            <ul className={styles.list}>
              <li>
                <Link href="/" className={styles.link}>
                  <FormattedMessage id="active.study" />
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.link}>
                  <FormattedMessage id="active.business" />
                </Link>
              </li>
              <li>
                <Link href="/" className={styles.link}>
                  <FormattedMessage id="active.dthree" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
