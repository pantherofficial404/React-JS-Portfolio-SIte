import {makeStyles} from '@material-ui/core';
import colors from '../theme/colors';
const useStyles = makeStyles(theme=>({
    bodyContainer:{
        backgroundColor:"#F5F5F5"
    },
    imageContainer:{
        flexGrow:1,
        textAlign:"center"
    },
    image:{
        maxHeight:"600px",
        height:"auto",
        marginTop:"5rem",
        ["@media (max-width:768px)"]:{
            maxHeight:"400px"
        }
    },
    authorInfoContainer:{
        display:'flex',
        justifyContent:"center",
        flexDirection:'column',
        padding:"0 2.5rem"
    },
    infoHeader:{
        fontWeight:"bold",
        color:colors.black,
    },
    infoText:{
        color:colors.paragraph,
        margin:"1.5rem 0"
    },
    hireMeButton:{
        backgroundColor:colors.snow,
        padding:"0.5rem 2rem",
        color:colors.black,
        marginRight:"1rem",
        marginBottom:"1rem",
        "&:hover":{
            backgroundColor:colors.snow,
        },
    },
    downloadCVButton:{
        backgroundColor:colors.themeColor,
        padding:"0.5rem 2rem",
        color:colors.snow,
        marginBottom:"1rem",
        "&:hover":{
            backgroundColor:colors.themeColor,
        }
    }
}))

export default useStyles;