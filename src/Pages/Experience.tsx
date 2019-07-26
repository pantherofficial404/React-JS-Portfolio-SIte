import React from 'react';
import { ExperienceStyle } from '../Style/Index';
import { Typography } from '@material-ui/core';
import {
  DeveloperBoardOutlined,
  CollectionsOutlined,
  CreditCardOutlined
} from '@material-ui/icons';
import Slider from '../Components/Slider';
const Experience: React.FC<{}> = () => {
  const style = ExperienceStyle();
  return (
    <div className={style.container}>
      <Typography variant="h6">8 YEARS EXPERIENCE</Typography>
      <div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              2012 - CURRENT
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              THEMEFOREST
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              SENIOR WEB & UX DESIGNER
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </Typography>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <DeveloperBoardOutlined className={style.icon} />
          </div>
        </div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              2008 - 2012
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              GRAPHICRIVER
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              GRAPHIC DESIGNER
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </Typography>
          </div>
          <div className={style.line} />
          <div className={style.iconContainer}>
            <CollectionsOutlined className={style.icon} />
          </div>
        </div>
        <div className={style.experienceBlock}>
          <div className={style.companyInfo}>
            <Typography variant="subtitle2" className={style.year}>
              2006 - 2008
            </Typography>
            <Typography variant="subtitle2" className={style.company}>
              CODECANYON
            </Typography>
          </div>
          <div className={style.content}>
            <Typography variant="body1" className={style.contentHeader}>
              WEB DEVELOPER
            </Typography>
            <Typography variant="body2" className={style.contentBody}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </Typography>
          </div>
          <div className={style.iconContainer}>
            <CreditCardOutlined className={style.icon} />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Experience;
