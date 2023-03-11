import styles from "./MainContent.module.css";
import { FormattedMessage } from "react-intl";

export default function MainContent({ dir }) {
  return (
    <div className={styles.contentbody__wrap__right}>
      <div className={styles.content__jobs}>
        <div>
          <h2>
            <FormattedMessage id="main.content.jobs.title" />
          </h2>
        </div>
        <div>
          <p className={styles.content__jobs__desc}>
            <FormattedMessage id="main.content.jobs.desc" />
          </p>
        </div>
        <div>
          <p className={styles.content__jobs__desc}>
            <FormattedMessage id="main.content.jobs.listtitle" />
          </p>
        </div>
        <div>
          <ul className={styles.content__jobs_list}>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list1" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list2" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list3" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list4" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list5" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list6" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list7" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list8" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list9" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list10" />
              </p>
            </li>
            <li>
              <p>
                <FormattedMessage id="main.content.jobs.list11" />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.outcomes}>
        <div className={styles.outcome__title}>
          <h2>
            <FormattedMessage id="main.content.outcomes.title" />
          </h2>
        </div>
        <div className={styles.outcome__desc}>
          <p>
            <FormattedMessage id="main.content.outcomes.desc" />
            <span>
              <FormattedMessage id="main.content.outcomes.desc.span" />
            </span>
            <FormattedMessage id="main.content.outcomes.desc.extra" />
          </p>
          <p>
            <FormattedMessage id="main.content.outcomes.desc2" />
            <span>
              <FormattedMessage id="main.content.outcomes.desc2.span" />
            </span>
            <FormattedMessage id="main.content.outcomes.desc2.extra" />
          </p>
          <ul className={styles.outcome__list}>
            <li>
              <p>
                <FormattedMessage id="main.content.outcomes.list1" />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.quick__link}>
        <div className={styles.quick__back}>
          <p>
            <FormattedMessage id="main.content.quicklink.back" />
          </p>
          <h4>
            <FormattedMessage id="main.content.quicklink.back.title" />
          </h4>
        </div>
        <div className={styles.quick__foward}>
          <p>
            <FormattedMessage id="main.content.quicklink.foward" />
          </p>
          <h4>
            <FormattedMessage id="main.content.quicklink.foward.title" />
          </h4>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          <FormattedMessage id="main.content.footer" />
        </p>
      </div>
    </div>
  );
}
