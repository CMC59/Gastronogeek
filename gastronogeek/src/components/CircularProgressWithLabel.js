import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './CircularProgressWithLabel.module.css'; // Import the CSS module

function CircularProgressWithLabel(props) {
  return (
    <Box className={styles.box}> {/* Use the CSS module class */}
      <CircularProgress variant="determinate" {...props} />
      <Box className={styles.label}> {/* Use the CSS module class */}
        <Typography
          variant="caption"
          component="div"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CircularProgressWithLabel;
