import React from 'react'
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import {MailOutlineSharp,SearchSharp,GetApp,MoreVert} from "@material-ui/icons"
import Style from './style/HeaderStyle';
function Header() {
    const style = Style();
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense" className={style.headerContainer}>
                        <div className={style.mailIconContainer}>
                            <MailOutlineSharp />
                        </div>
                        <div className={style.headerTitleContainer}>
                        <Typography variant="body2" >AVAILABLE FOR FREELANCE</Typography>
                        </div>
                        <IconButton color="inherit">
                            <SearchSharp />
                        </IconButton>
                        <IconButton color="inherit">
                            <GetApp />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreVert />
                        </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;