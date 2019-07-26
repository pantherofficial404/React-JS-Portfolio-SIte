import * as React from 'react';
import colors from '../Constants/Colors';
import { makeStyles, Typography } from '@material-ui/core';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface progressBarProps {
  value: number;
}

const Style = makeStyles({
  circleProgressBarText: {
    boxShadow: '0px 0px 3px #9E9E9E',
    padding: '1rem 0.8rem',
    borderRadius: '50%',
    backgroundColor: colors.snow
  }
});
const CircularProgressBar: React.FC<progressBarProps> = props => {
  const style = Style();
  return (
    <CircularProgressbarWithChildren
      value={props.value}
      counterClockwise={true}
      strokeWidth={3}
      styles={{
        root: { height: '12rem', width: '12rem' },
        path: { stroke: colors.themeColor }
      }}
    >
      <Typography variant="h6" className={style.circleProgressBarText}>
        {props.value}%
      </Typography>
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgressBar;
