import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './CircularProgress.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
