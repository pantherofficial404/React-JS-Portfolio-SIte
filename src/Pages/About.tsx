import * as React from 'react';
import { AboutStyle } from '../Style/Index';
import { Grid, Typography, CardContent, Card } from '@material-ui/core';
import { FullPortrait } from '../Constants/Images';
import signature from '../Images/signature.png';
import { DesktopWindows, PhoneIphone } from '@material-ui/icons';
const About: React.FC<{}> = () => {
  const style = AboutStyle();
  const DetailRender = (title: string, text: string) => {
    return (
      <div className={style.detailContainer}>
        <Typography variant="subtitle2" className={style.detailTitle}>
          {title}
        </Typography>
        <Typography variant="subtitle2" className={style.detailText}>
          {text}
        </Typography>
      </div>
    );
  };
  return (
    <div className={style.container}>
      <Typography variant="h6" className={style.aboutHeaderText}>
        ABOUT ME
      </Typography>
      <Grid container>
        <Grid item sm={12} md={3} lg={3} className={style.aboutImageContainer}>
          <img
            src={FullPortrait}
            alt="portfolioImage"
            className={style.portfolioImage}
          />
        </Grid>
        <Grid sm={12} md={8} lg={8} className={style.infoContainer}>
          <Typography variant="body1" className={style.profileHeader}>
            BENJAMIN THOMSON
          </Typography>
          <Typography variant="body2" className={style.profileHeader}>
            WEB & UX DESIGNER
          </Typography>
          <Typography variant="subtitle2" className={style.profileDesc}>
            Ultricies nisi voluptatem, illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque latu dantium, totam rem aperiam,
            eaque ipsa quae ab illo tempor dignissim at.
          </Typography>
          <img src={signature} alt="signature" className={style.signature} />
          <div className={style.divider}>
            <div className={style.round} />
            <hr style={{ border: '1px dashed #222222', flexGrow: 1 }} />
            <div className={style.round} />
          </div>
          {DetailRender('DATE OF BIRTH: ', '24 JAN 1989')}
          {DetailRender('PHONE: ', '012-345-6789')}
          {DetailRender('EMAIL: ', 'SILITY@EXAMPLE.COM')}
          {DetailRender(
            'ADDRESS: ',
            '123 SILITY, SOUTH CORNER STREET, MELBORNE, AUSTRALIA.'
          )}
          {DetailRender('WEBSITE: ', 'HTTP://WWW.EXAMPLE.COM')}
          <div className={style.workContainer}>
            <Typography variant="h6" className={style.workContainerHeader}>
              WHAT I'M DOING
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} md={4} xs={12}>
                <Card className={style.box}>
                  <CardContent className={style.workBox}>
                    <DesktopWindows className={style.workIcon} />
                    <Typography variant="body1" className={style.workText}>
                      WEB & UX DESIGN
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
                <Card className={style.box}>
                  <CardContent className={style.workBox}>
                    <PhoneIphone className={style.workIcon} />
                    <Typography variant="body1" className={style.workText}>
                      APP DEVELOPMENT
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
                <Card className={style.box}>
                  <CardContent className={style.workBox}>
                    <DesktopWindows className={style.workIcon} />
                    <Typography variant="body1" className={style.workText}>
                      MARKETING
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
