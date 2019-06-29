import {makeStyles} from '@material-ui/core';
import colors from '../theme/colors';
const useStyles = makeStyles(theme=>({
    
    headerContainer:{
        backgroundColor:colors.themeColor,
    },
    mailIconContainer:{
        marginRight:theme.spacing(1),
        ["@media (max-width:1024px)"]:{
            flexGrow:1
        }
    },
    headerTitleContainer:{
        flexGrow:1,
        ['@media (max-width:1024px)']:{
            display:"none"
        }
    },

}))

export default useStyles;