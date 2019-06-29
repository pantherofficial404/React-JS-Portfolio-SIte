import React from 'react'
import Style from './style/FooterStyle';
import {Grid,Typography} from "@material-ui/core"
import colors from './theme/colors';
export default function Footer() {
    const style = Style();
    return (
        <div>
            <Grid container className={style.container}>
                <Grid item xs={12} lg={4} className={style.footerContainer}>
                    <Typography variant="body1" className={style.footerHeader}>ADDRESS</Typography>
                    <Typography variant="body1" className={style.footerText}>123 Sility, South Corner Street,</Typography>
                    <Typography variant="body1" className={style.footerText}>Melbornem Australia.</Typography>
                </Grid>
                <Grid item xs={12} lg={4} className={style.footerContainer}>
                    <Typography variant="body1" className={style.footerHeader}>CONNECT</Typography>
                    <div className={style.socialButtonContainer}>
                        <div className={style.socialButton}/>
                        <div className={style.socialButton}/>
                        <div className={style.socialButton}/>
                        <div className={style.socialButton}/>
                        <div className={style.socialButton}/>
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} className={style.footerContainer}>
                    <Typography variant="body1" className={style.footerHeader}>CONTACT</Typography>
                    <Typography variant="body1" className={style.footerText}>Tel: +61 123-456-7890</Typography>
                    <Typography variant="body1" className={style.footerText}>Mail: Sility@example.com</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} lg={12} className={style.copyrightContainer}>
                    <Typography variant="body1" className={style.copyrightText}>Copyright &copy; Sility. All Rights Reserved.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
