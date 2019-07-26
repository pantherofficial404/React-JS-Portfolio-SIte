import * as React from 'react';
import { ContactStyle } from '../Style/Index';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import {
  LocationOnOutlined,
  PhoneIphoneOutlined,
  EmailOutlined,
  HomeOutlined
} from '@material-ui/icons';
import GoogleMapReact from 'google-map-react';
const Contact: React.FC<{}> = () => {
  const style = ContactStyle();
  return (
    <div className={style.container}>
      <Typography variant="h6" className={style.contactHeaderText}>
        GET IN TOUCH WITH ME
      </Typography>
      <Grid container>
        <Grid item sm={12} md={5} xs={12} lg={5}>
          <Typography variant="body1" className={style.headerText}>
            CONTACT ADDRESS
          </Typography>
          <div className={style.detailContainer}>
            <LocationOnOutlined className={style.icon} />
            <Typography variant="subtitle2" className={style.detailTitle}>
              123 Sility, South Corner Street,
              <Typography variant="subtitle2" className={style.detailTitle}>
                Melbornem Australia.
              </Typography>
            </Typography>
          </div>
          <div className={style.detailContainer}>
            <PhoneIphoneOutlined className={style.icon} />
            <Typography variant="subtitle2" className={style.detailTitle}>
              Phone: +61 012 345 6789
            </Typography>
          </div>
          <div className={style.detailContainer}>
            <EmailOutlined className={style.icon} />
            <Typography variant="subtitle2" className={style.detailTitle}>
              Email:
            </Typography>
            <Typography variant="subtitle2" className={style.linkText}>
              example@gmail.com
            </Typography>
          </div>
          <div className={style.detailContainer}>
            <HomeOutlined className={style.icon} />
            <Typography variant="subtitle2" className={style.detailTitle}>
              Website:
            </Typography>
            <Typography variant="subtitle2" className={style.linkText}>
              info@sility.com
            </Typography>
          </div>
        </Grid>
        <Grid item sm={12} md={6} xs={12} lg={6}>
          <Typography variant="body1" className={style.headerText}>
            CONTACT FORM
          </Typography>
          <Grid container>
            <Grid item sm={5} md={3} xs={3}>
              <Typography variant="subtitle1" className={style.formText}>
                Name
              </Typography>
              <Typography variant="subtitle1" className={style.formText}>
                Email
              </Typography>
              <Typography variant="subtitle1" className={style.formText}>
                Message
              </Typography>
            </Grid>
            <Grid item sm={7} md={9} xs={8}>
              <TextField className={style.input} />
              <TextField className={style.input} />
              <TextField
                className={style.input}
                multiline
                margin="normal"
                rows="3"
              />
              <Button className={style.sendMessageButton}>SEND MESSAGE</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        className={style.mapContainer}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCt-HYysNfzl6F2IhgibJqeT_TwsAIw_vg' }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        />
      </div>
    </div>
  );
};
export default Contact;
