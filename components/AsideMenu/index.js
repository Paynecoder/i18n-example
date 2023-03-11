import styles from "./AsideMenu.module.css";
import { FormattedMessage, useIntl } from "react-intl";

export default function AsideMenu({ dir }) {
  return (
    <div className={styles.contentbody__wrap__left}>
      <div className={styles.aside_title}>
        <h4>
          <FormattedMessage id="aside.title" />
        </h4>
      </div>
      <div className={styles.aside_links}>
        <ul className={styles.aside_links_list}>
          <li>
            <p>
              <FormattedMessage id="aside.ul.overview" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.entrance" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.advanced" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.cost" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.courses" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.details" />
            </p>
          </li>
          <li>
            <p
              style={{
                color: "var(--secondary-blue)",
              }}
            >
              <FormattedMessage id="aside.ul.grad" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.contact" />
            </p>
          </li>
          <li>
            <p>
              <FormattedMessage id="aside.ul.sub" />
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.aside_main}>
        <div className={styles.aside_main_info}>
          <h3>
            <FormattedMessage id="aside.main.info.title" />
          </h3>
          <p>
            <FormattedMessage id="aside.main.info.desc" />
          </p>
          <ul>
            <li>
              <FormattedMessage id="aside.main.info.date1" />
            </li>
            <li>
              <FormattedMessage id="aside.main.info.date2" />
            </li>
            <li>
              <FormattedMessage id="aside.main.info.date3" />
            </li>
            <li>
              <FormattedMessage id="aside.main.info.date4" />
            </li>
          </ul>
          <div className={styles.aside_main_info_outro}>
            <p>
              <FormattedMessage id="aside.main.info.outro" />
              <span>
                <FormattedMessage id="aside.main.info.outro.span" />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.aside_main_over}>
          <h3>
            <FormattedMessage id="aside.main.over.title" />
          </h3>
          <ul className={styles.aside_main_over_list}>
            <li>
              <p>
                <FormattedMessage id="aside.main.over.list1" />
                <span>
                  <FormattedMessage id="aside.main.over.list1.span" />
                </span>
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="aside.main.over.list2" />
                <span>
                  <FormattedMessage id="aside.main.over.list2.span" />
                </span>
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="aside.main.over.list3" />
                <span>
                  <FormattedMessage id="aside.main.over.list3.span" />
                </span>
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="aside.main.over.list4" />
                <span>
                  <FormattedMessage id="aside.main.over.list4.span" />
                </span>
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="aside.main.over.list5" />
                <span>
                  <FormattedMessage id="aside.main.over.list5.span" />
                </span>
              </p>
            </li>
            <li className={styles.spc__hover}>
              <p>
                <FormattedMessage id="aside.main.over.list6" />
                <span
                  style={{
                    color: "var(--secondary-blue)",
                  }}
                >
                  <FormattedMessage id="aside.main.over.list6.span" />
                </span>
                *
              </p>
            </li>
            <li className={styles.spc__hover}>
              <p>
                <FormattedMessage id="aside.main.over.list7" />
                <span
                  style={{
                    color: "var(--secondary-blue)",
                  }}
                >
                  <FormattedMessage id="aside.main.over.list7.span" />
                </span>
                *
              </p>
            </li>
          </ul>
          <div className={styles.aside_main_over_cost}>
            *
            <FormattedMessage id="aside.main.over.cost" />
          </div>
          <p className={styles.aside_main_over_desc}>
            <FormattedMessage id="aside.main.over.desc" />
          </p>
        </div>
        <div className={styles.aside_recent_visit}>
          <h3>
            <FormattedMessage id="aside.recent.visit.title" />
          </h3>
        </div>
      </div>
    </div>
  );
}
