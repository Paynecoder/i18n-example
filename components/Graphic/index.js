import styles from "./Graphic.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import print from "@/public/images/print-solid.svg";
import send from "@/public/images/envelope-regular.svg";
import facebook from "@/public/images/facebook-f.svg";
import twitter from "@/public/images/twitter.svg";

export default function Graphic() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <div>
              <h1 className={styles.title}>
                <FormattedMessage id="graphic.title" />
              </h1>
            </div>
            <div className={styles.info}>
              <p>
                <FormattedMessage id="graphic.diploma" />
              </p>
              <p>
                <FormattedMessage id="graphic.time" />
              </p>
              <p className={styles.school}>
                <FormattedMessage id="graphic.school" />
              </p>
            </div>
            <div className={styles.socials}>
              <Image src={print} alt="Print" width={30} height={30} />
              <Image src={send} alt="Send" width={30} height={30} />
              <Image src={facebook} alt="Facebook" width={30} height={30} />
              <Image src={twitter} alt="Twitter" width={30} height={30} />
            </div>
          </div>
          <div className={styles.buttons}>
            <button>
              <FormattedMessage id="graphic.button.apply" />
              <p>&gt;</p>
            </button>
            <button>
              <FormattedMessage id="graphic.button.contact" />
              <p>&gt;</p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
