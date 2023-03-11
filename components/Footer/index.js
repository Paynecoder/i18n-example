import styles from "./Footer.module.css";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import fb from "@/public/images/blue/f-blue.svg";
import tw from "@/public/images/blue/t-blue.svg";
import li from "@/public/images/blue/li-blue.svg";
import inst from "@/public/images/blue/in-blue.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <div className={styles.footer__slot}>
          <div className={styles.slot__title}>
            <div className={styles.slotline}></div>
            <h4>
              <FormattedMessage id="footer.slot1.title" />
            </h4>
          </div>
          <div className={styles.slot__content}>
            <ul className={styles.slot__list}>
              <li>
                <p>
                  <FormattedMessage id="footer.slot1.list1" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot1.list2" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot1.list3" />
                </p>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "Nunito_Bold",
                  }}
                >
                  <FormattedMessage id="footer.slot1.list4" />
                </span>
              </li>
            </ul>
            <ul className={styles.slot__list}>
              <li className={styles.slot__list__row}>
                <p>
                  <FormattedMessage id="footer.slot1.list5" />
                </p>
                <span>
                  <FormattedMessage id="footer.slot1.list5.span" />
                </span>
              </li>
              <li className={styles.slot__list__row}>
                <p>
                  <FormattedMessage id="footer.slot1.list6" />
                </p>
                <span>
                  <FormattedMessage id="footer.slot1.list6.span" />
                </span>
              </li>
              <li>
                <h5>
                  <FormattedMessage id="footer.slot1.list7" />
                </h5>
              </li>
            </ul>
            <div className={styles.socials}>
              <Image src={fb} width={22} />
              <Image src={tw} width={35} />
              <Image src={li} width={30} />
              <Image src={inst} width={30} />
            </div>
          </div>
        </div>
        <div className={styles.footer__slot}>
          <ul className={styles.slot__mid__list}>
            <li>
              <p>
                <FormattedMessage id="footer.slot2.list1" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="footer.slot2.list2" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="footer.slot2.list3" />
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.footer__slot}>
          <ul className={styles.slot__mid__list}>
            <li>
              <p>
                <FormattedMessage id="footer.slot3.list1" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="footer.slot3.list2" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="footer.slot3.list3" />
              </p>
            </li>
          </ul>
        </div>
        <div
          className={styles.footer__slot}
          style={{
            border: "none",
          }}
        >
          <div className={styles.slot__title}>
            <div className={styles.slotline}></div>
            <h4>
              <FormattedMessage id="footer.slot4.title" />
            </h4>
          </div>
          <div className={styles.slot__content}>
            <ul className={styles.slot__four__list}>
              <li>
                <p>
                  <FormattedMessage id="footer.slot4.list1" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot4.list2" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot4.list3" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot4.list4" />
                </p>
              </li>
              <li>
                <p>
                  <FormattedMessage id="footer.slot4.list5" />
                </p>
              </li>
            </ul>
            <div>
              <ul className={styles.slot__four__list__two}>
                <li>
                  <p>
                    <FormattedMessage id="footer.slot4.list6" />
                  </p>
                </li>
                <li>
                  <p>
                    <FormattedMessage id="footer.slot4.list7" />
                  </p>
                </li>
                <li>
                  <p>
                    <FormattedMessage id="footer.slot4.list8" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
