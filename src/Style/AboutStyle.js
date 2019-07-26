import { makeStyles } from '@material-ui/core';
import colors from '../Constants/Colors';
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: colors.backgroundLite,
    padding: '3rem 7rem',
    display: 'flex',
    minHeight: '60vh',
    flexDirection: 'column',
  },
  aboutHeaderText: {
    color: colors.darkBlack,
    fontWeight: 'bold',
    paddingLeft: '2rem',
    '@media (max-width:768px)': {
      textAlign: 'center'
    }
  },
  portfolioImage: {
    maxHeight: '600px',
    height: 'auto',
    marginTop: '2rem',
    textAlign: 'center',
    '@media (max-width:768px)': {
      maxHeight: '400px'
    }
  },
  aboutImageContainer: {
    textAlign: 'center',
    '@media (max-width:768px)': {
      textAlign: 'center'
    }
  },
  infoContainer: {
    marginTop: '1rem'
  },
  profileHeader: {
    fontWeight: 'bold',
    marginBottom: '0.2rem',
    color: colors.black
  },
  profileDesc: {
    color: colors.paragraph,
    marginTop: '1rem'
  },
  signature: {
    margin: '1rem 0rem'
  },
  divider: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  round: {
    height: '0.3rem',
    width: '0.3rem',
    border: '4px solid #7C4DFF',
    backgroundColor: colors.snow,
    borderRadius: '50%',
    margin: '0rem 0.5rem'
  },
  detailContainer: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: '1rem'
  },
  detailTitle: {
    color: colors.paragraph,
    fontWeight: 'bold'
  },
  detailText: {
    color: colors.paragraph
  },
  workContainer: {
    margin: '2rem 0rem'
  },
  workContainerHeader: {
    marginBottom: '2rem'
  },
  workBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem 0rem'
  },
  workIcon: {
    fontSize: 80,
    marginBottom: '2rem'
  },
  box: {
    transition: 'all 200ms ease-out',
    '&:hover': {
      color: colors.snow,
      backgroundColor: colors.themeColor
    }
  },
  workText: {
    textAlign: 'center'
  }
}));

export default useStyles;
