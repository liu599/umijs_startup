import React, {useEffect, useState} from "react";
import styles from './friends.less';
import {
  Link,
  connect,
  getLocale,
  setLocale,
  useIntl,
  history,
  Helmet,
} from 'umi';

export default function Friends() {
  return (
    <div className={styles.sample}>
      <h1>Friends</h1>
      <Link to={"/"}>Back to main page</Link>
    </div>
  );
}
