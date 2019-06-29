import React from 'react'
import Man from './images/man.png'
import {Grid,Typography,Button} from '@material-ui/core'
import Style from './style/BodyStyle';
export default function Body() {
    const style = Style();
    return (
        <div className={style.bodyContainer}>
            <Grid container>
                <Grid item sm={12} md={7} lg={7} className={style.authorInfoContainer}>
                    <Typography variant="h4" className={style.infoHeader}>DESIGN<sup>+</sup> DEVELOPE<sup>+</sup></Typography>
                    <Typography variant="h4" className={style.infoHeader}>INTERACTIVE<sup>+</sup> ART<sup>+</sup></Typography>
                    <Typography variant="subtitle1" className={style.infoText}>Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design. I am worked on a variety of brands and with agencies both big and small.</Typography>
                    <div>
                        <Button className={style.hireMeButton}>HIRE ME NOW</Button>
                        <Button className={style.downloadCVButton}>DOWNLOAD CV</Button>
                    </div>
                </Grid>
                <Grid sm={12} md={4} lg={4} className={style.imageContainer}>
                    <img src={Man} alt="man" className={style.image}/>
                </Grid>
            </Grid>
        </div>
    )
}
