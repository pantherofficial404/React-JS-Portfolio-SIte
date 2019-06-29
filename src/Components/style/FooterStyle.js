import {makeStyles} from '@material-ui/core';
import colors from '../theme/colors';
const useStyles = makeStyles(theme=>({
    container:{
        backgroundColor:colors.black,
        color:colors.snow,
        textAlign:"center",
        fontWeight:"bold",
        flexGrow:1,
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
    },
    footerHeader:{
        marginBottom:"1.5rem",
        fontWeight:"bold"
    },
    footerText:{
        marginBottom:"0.5rem"
    },
    footerContainer:{
        padding:"3rem"
    },
    socialButtonContainer:{
        flexDirection:"row",
        display:"flex",
        justifyContent:"center"
    },
    socialButton:{
        height:"40px",
        width:'40px',
        backgroundColor:colors.snow,
        borderRadius:20,
        marginLeft:"1rem",
        transition:"all 200ms ease-in",
        "&:hover":{
            backgroundColor:colors.themeColor
        }
    },
    copyrightContainer:{
        backgroundColor:colors.darkBlack,
        padding:"1rem",
        textAlign:"center"
    },
    copyrightText:{
        fontWeight:'bold',
        color:colors.snow
    }
}))

export default useStyles;