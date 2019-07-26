import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
interface progressBarProps {
  progressValue: number;
  label: string;
}
const LinearProgressBar: React.FunctionComponent<progressBarProps> = props => {
  const useStyle = makeStyles({
    progress: {
      height: '8px',
      marginBottom: '2rem',
      backgroundColor: colors.backgroundDark,
      boxShadow: 'none',
      overflow: 'visible'
    },
    progressBar: {
      lineHeight: '8px',
      backgroundColor: colors.themeColor,
      boxShadow: 'none',
      position: 'relative',
      float: 'left',
      height: '100%',
      tranistion: 'width .6s ease'
    },
    progressValue: {
      display: 'block',
      width: '3rem',
      height: '3rem',
      lineHeight: '3rem',
      textAlign: 'center',
      color: colors.black,
      background: colors.snow,
      fontWeight: 'bold',
      position: 'absolute',
      top: '-16px',
      right: '-20px',
      boxShadow: '0 3px 6px rgba(0,0,0,.3)',
      fontSize: '0.8rem',
      '@media (max-width:768px)': {
        width: '1.5rem',
        height: '1.5rem',
        lineHeight: '1.5rem',
        fontSize: '0.6rem'
      }
    },
    progressBarContainer: {
      margin: '1.5rem 0rem'
    },
    progressBarLabel: {
      color: colors.black,
      padding: '0.5rem 0rem',
      fontWeight: 'bold'
    }
  });

  const style = useStyle();
  return (
    <div className={style.progressBarContainer}>
      <Typography variant="body1" className={style.progressBarLabel}>
        {props.label}
      </Typography>
      <div className={style.progress}>
        <div
          className={style.progressBar}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: props.progressValue + '%' }}
        >
          <span className={style.progressValue}>{props.progressValue}%</span>
        </div>
      </div>
    </div>
  );
};

export default LinearProgressBar;
