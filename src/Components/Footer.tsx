import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
const Style = makeStyles(theme => ({
  container: {
    backgroundColor: colors.black,
    color: colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  footerHeader: {
    marginBottom: '1.5rem',
    fontWeight: 'bold'
  },
  footerText: {
    marginBottom: '0.5rem'
  },
  footerContainer: {
    padding: '3rem'
  },
  socialButtonContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  socialButton: {
    height: '40px',
    width: '40px',
    backgroundColor: colors.snow,
    borderRadius: 20,
    marginLeft: '1rem',
    transition: 'all 200ms ease-in',
    '&:hover': {
      backgroundColor: colors.themeColor
    }
  },
  copyrightContainer: {
    backgroundColor: colors.darkBlack,
    padding: '1rem',
    textAlign: 'center'
  },
  copyrightText: {
    fontWeight: 'bold',
    color: colors.snow
  }
}));
const Footer: React.FC = () => {
  const style = Style();
  return (
    <div>
      <Grid container className={style.container}>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <Typography variant="body1" className={style.footerHeader}>
            ADDRESS
          </Typography>
          <Typography variant="body1" className={style.footerText}>
            123 Sility, South Corner Street,
          </Typography>
          <Typography variant="body1" className={style.footerText}>
            Melbornem Australia.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <Typography variant="body1" className={style.footerHeader}>
            CONNECT
          </Typography>
          <div className={style.socialButtonContainer}>
            <div className={style.socialButton} />
            <div className={style.socialButton} />
            <div className={style.socialButton} />
            <div className={style.socialButton} />
            <div className={style.socialButton} />
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className={style.footerContainer}>
          <Typography variant="body1" className={style.footerHeader}>
            CONTACT
          </Typography>
          <Typography variant="body1" className={style.footerText}>
            Tel: +61 123-456-7890
          </Typography>
          <Typography variant="body1" className={style.footerText}>
            Mail: Sility@example.com
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12} className={style.copyrightContainer}>
          <Typography variant="body1" className={style.copyrightText}>
            Copyright &copy; Sility. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
