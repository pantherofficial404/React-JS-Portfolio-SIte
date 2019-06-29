import React ,{Component,useState}from 'react'
import {AppBar,Toolbar,Typography,Fab} from '@material-ui/core'
import {withStyles,useTheme} from '@material-ui/core/styles'
import Style from './style/NavbarStyle';
import SwipeableViews from 'react-swipeable-views';
import colors from './theme/colors';
import {Add} from '@material-ui/icons'

export default function Navbar() {
  const style = Style();
  const [selected,setSelected] = useState(0);
    return (
        <div>
        <AppBar position="static">
            <Toolbar className={style.navbarContainer}>
                <Typography variant="h5" className={style.brandLogo}>SILITY</Typography>
                <div className={style.navigationBar}>
                  <Typography variant="body2" align="center" className={selected==0?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(0)}}>HOME</Typography>
                  <Typography variant="body2" className={selected==1?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(1)}}>ABOUT</Typography>
                  <Typography variant="body2" className={selected==2?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(2)}}>SKILL</Typography>
                  <Typography variant="body2" className={selected==3?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(3)}}>EXPERIENCE</Typography>
                  <Typography variant="body2" className={selected==4?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(4)}}>EDUCATION</Typography>
                  <Typography variant="body2" className={selected==5?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(5)}}>WORK</Typography>
                  <Typography variant="body2" className={selected==6?style.navigationMenuSelected:style.navigationMenu} onClick={()=>{setSelected(6)}}>CONTACT</Typography>
                </div>
                <Fab aria-label="Add" className={style.profileButton}>
                    <Add className={style.profileButtonText}/>
                  </Fab>
            </Toolbar>
          </AppBar>
      </div>
    )
}
