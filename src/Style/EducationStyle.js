import colors from '../Constants/Colors';
import { makeStyles } from '@material-ui/core';
const style = makeStyles({
  container: {
    backgroundColor: colors.backgroundLite,
    padding: '4rem 8rem',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
  },
  headerText: {
    color: colors.black,
    fontWeight: 'bold'
  }
});

export default style;
