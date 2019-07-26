import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
const useStyles = makeStyles(theme => ({
  bodyContainer: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
  },
  imageContainer: {
    flexGrow: 1,
    textAlign: 'center'
  },
  image: {
    maxHeight: '600px',
    height: 'auto',
    marginTop: '5rem',
    '@media (max-width:768px)': {
      maxHeight: '400px',
      marginTop: '0rem',
    }
  },
  authorInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 2.5rem'
  },
  infoHeader: {
    fontWeight: 'bold',
    color: colors.black,
    '@media (max-width:769px)': {
      textAlign: 'center',
    }
  },
  infoText: {
    color: colors.paragraph,
    margin: '1.5rem 0'
  },
  hireMeButton: {
    backgroundColor: colors.themeColor,
    padding: '0.5rem 2rem',
    color: colors.snow,
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: colors.themeColor
    }
  },
  buttonContainer: {
    '@media (max-width:769px)': {
      textAlign: 'center',
    }
  },
}));

export default useStyles;
