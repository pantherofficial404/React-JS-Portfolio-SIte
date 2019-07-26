import * as React from 'react';
import { EducationStyle } from '../Style/Index';
import { Typography } from '@material-ui/core';
const Education: React.FC<{}> = () => {
  const style = EducationStyle();
  return (
    <div className={style.container}>
      <Typography variant="h6" className={style.headerText}>
        EDUCATIONAL VALUE
      </Typography>
    </div>
  );
};

export default Education;
