import * as React from 'react';
import { HalfPortrait } from '../Constants/Images';
import { Grid, Typography, Button } from '@material-ui/core';
import { HomeStyle } from '../Style/Index';
const Home: React.FunctionComponent<{}> = () => {
  const style = HomeStyle();
  return (
    <div className={style.bodyContainer}>
      <Grid container>
        <Grid item sm={12} md={7} lg={7} className={style.authorInfoContainer}>
          <Typography variant="h4" className={style.infoHeader}>
            DESIGN<sup>+</sup> DEVELOPE<sup>+</sup>
          </Typography>
          <Typography variant="h4" className={style.infoHeader}>
            INTERACTIVE<sup>+</sup> ART<sup>+</sup>
          </Typography>
          <Typography variant="subtitle1" className={style.infoText}>
            Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and
            UX design. I am worked on a variety of brands and with agencies both
            big and small.
          </Typography>
          <div className={style.buttonContainer}>
            <Button className={style.hireMeButton}>HIRE ME NOW</Button>
          </div>
        </Grid>
        <Grid item sm={12} md={4} lg={4} className={style.imageContainer}>
          <img src={HalfPortrait} alt="man" className={style.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
