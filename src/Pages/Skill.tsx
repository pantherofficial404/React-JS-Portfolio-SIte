import React from 'react';
import { SkillStyle } from '../Style/Index';
import { Grid, Typography } from '@material-ui/core';
import { ReactImage, AngularImage, TypeScript, ReactJS, NodeJs, MongoDb } from '../Constants/Images';
const Skill: React.FC<{}> = () => {
  const style = SkillStyle();
  return (
    <div className={style.container}>
      <Typography variant="h5" className={style.headerText}>MY SKILLS</Typography>
      <Typography variant="body1" className={style.headerSubtitle}>I do all kind of neat stuff</Typography>
      <Grid container>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={ReactImage} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>React Native</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={AngularImage} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>Angular</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={TypeScript} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>TypeScript</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={ReactJS} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>React JS</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={NodeJs} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>Node JS</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={style.skillContainer}>
          <img src={MongoDb} alt="man" className={style.skillImage} />
          <Typography variant="body1" className={style.skillTitle}>MongoDB</Typography>
          <Typography variant="body2" className={style.skillInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus, quae veritatis molestias officiis possimus tempore earum itaque repellat nesciunt.</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skill;
