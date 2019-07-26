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
      padding: '1rem 0.5rem',
    },
  },
  headerText: {
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: '1rem',
    '@media (max-width:770px)': {
      textAlign: 'center',
    },

  },
  contactHeaderText: {
    marginBottom: '2rem',
    fontWeight: 'bold',
    color: colors.black,
    '@media (max-width:770px)': {
      textAlign: 'center',
    },
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: '1rem',
    alignItems: 'center',
  },
  detailTitle: {
    color: colors.paragraph
  },
  linkText: {
    color: colors.themeColor,
    marginLeft: '0.5rem',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    color: colors.paragraph,
    marginRight: '0.5rem'
  },
  formText: {
    fontWeight: 'bold',
    color: colors.paragraph,
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    marginBottom: '0.7rem'
  },
  sendMessageButton: {
    backgroundColor: colors.themeColor,
    padding: '0.5rem 2rem',
    color: colors.snow,
    margin: '1rem 0rem',
    '&:hover': {
      backgroundColor: colors.themeColor
    },
  },
  mapContainer: {
    height: '50vh',
    width: '100%',
    margin: '2rem 0rem',
    '@media (max-width:770px)': {
      height: '40vh',
    },
  },
}));

export default useStyles;
