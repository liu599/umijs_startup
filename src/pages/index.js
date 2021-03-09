import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'dva';
import styles from './index.css';
import Loading from '../components/loading/loading'

import {
  Link,
  connect,
  getLocale,
  setLocale,
  useIntl,
  history,
  Helmet,
} from 'umi';



export default function() {

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const {loading, sampleState} = useSelector(stores => ({
    loading: stores.loading,
    sampleState: stores.sample,
  }))

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchData= () => {
    dispatch({
      type: "sample/fetchData",
      payload: {
        act: "generate action when entering this page"
      }
    })
  }


  useEffect(() => {
    fetchData();
    // console.log('mount it!');
  }, []);

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        {
          loading.effects["sample/fetchData"] ? <Loading /> :
            <>
              <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
              <li>
                <pre>
                  Mock state change: {JSON.stringify(sampleState)}
                </pre>
              </li>
              <li>
                <button onClick={e => handleChangePage(e, Math.random()*100)}> React.useState Button </button>
                <p>Mock React.useState {page}</p>
              </li>
              <li>
                <a href="https://umijs.org/guide/getting-started.html">
                  Getting Started
                </a>
              </li>
              <li>
                <Link to={"/friends"}>To another page</Link>
              </li>
            </>
        }
      </ul>
    </div>
  );
}
