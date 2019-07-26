import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: colors.backgroundLite,
    padding: '3rem 7rem',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
    '@media (max-width:770px)': {
      padding: '2rem 1rem',
    },
  },
  headerText: {
    textAlign: 'center',
  },
  headerSubtitle: {
    textAlign: 'center',
    color: colors.paragraph,
    marginBottom: '3rem',
  },
  skillContainer: {
    textAlign: 'center',
    padding: '1rem 2rem',
    marginBottom: '2rem',
    '@media (max-width:770px)': {
      padding: '0rem 1rem',
      marginBottom: '2rem',
    },
  },
  skillImage: {
    height: '4rem',
    width: '4rem',
  },
  skillTitle: {
    margin: '0.5rem',
    fontSize: '1.5rem',
  },
  skillInfo: {
    color: colors.paragraph,
  },
}));

export default useStyles;
