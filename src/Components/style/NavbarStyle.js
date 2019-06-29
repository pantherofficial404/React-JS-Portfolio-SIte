import {makeStyles} from '@material-ui/core';
import colors from '../theme/colors';
const useStyles = makeStyles(theme=>({
    navbarContainer:{
        backgroundColor:colors.snow,
    },
    brandLogo:{
        color:colors.black,
        flexGrow:1
    },
    navigationMenu:{
        color:colors.black,
        borderBottom:"4px solid transparent",
        transition:"all 200ms ease-out",
        paddingBottom:"0.2rem",
        fontWeight:"bold",
        padding:"0 1.5rem",
        display:"flex",
        alignItems:"center",
        "&:hover":{
            borderBottom:"4px solid #816CFA",
        },
    },
    navigationMenuSelected:{
        color:colors.black,
        fontWeight:"bold",
        borderBottom:"4px solid #816CFA",
        paddingBottom:"0.2rem",
        padding:"0 1.5rem",
        display:"flex",
        alignItems:"center",
    },
    navigationBar:{
        display:"flex",
        flexDirection:"row",
        position:'relative',
        marginRight:"5rem",
        ["@media (max-width:1024px)"]:{
            display:"none"
        },
        height:"3.5rem"
    },
    profileButton:{
        position:"absolute",
        top:"2rem",
        right:"2rem",
        backgroundColor:colors.themeColor,
        ["@media (max-width:599px)"]:{
            top:"1.5rem",
            right:"0rem",
        },
        "&:hover":{
            backgroundColor:colors.themeColor
        }
    },
    profileButtonText:{
        color:colors.snow,
    }
}))

export default useStyles;