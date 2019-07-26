import * as React from 'react';
import { Testimonial } from '../Constants/Images';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import colors from '../Constants/Colors';
const Style = makeStyles({
  container: {
    alignItems: 'center',
    marginTop: '2rem',
    flexDirection: 'column'
  },
  imageContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  testimonialImage: {
    borderRadius: '50%',
    border: '5px solid ' + colors.snow,
    boxShadow: '0 2px 6px rgba(0,0,0,.3)'
  },
  testimonialLine: {
    marginTop: '1rem',
    borderBottom: '1px solid ' + colors.themeColor,
    width: '10%'
  },
  reviewText: {
    fontStyle: 'italic',
    marginTop: '1rem',
    textAlign: 'center'
  },
  addressText: {
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.black
  }
});

interface IState {
  selected: number;
  indicatorValues: number[];
  interval?: NodeJS.Timeout | number;
}
class Slider extends React.PureComponent<{}, IState> {
  state: IState = {
    selected: 0,
    indicatorValues: [0, 1, 2],
    interval: undefined
  };

  handleChange() {
    this.setState(prevState => ({
      selected: prevState.selected === 2 ? 0 : prevState.selected + 1
    }));
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => this.handleChange(), 3000),
    })
  }

  changeSlide = (value: number): void => {
    this.setState({
      selected: value
    });
  };

  render() {
    const Slider: React.FC<{}> = () => {
      const style = Style();
      return (
        <Grid container className={style.container}>
          <Grid item sm={12} md={8}>
            <div>
              <div className={style.imageContainer}>
                <img
                  src={Testimonial}
                  alt="Testimonial"
                  className={style.testimonialImage}
                />
                <hr className={style.testimonialLine} />
              </div>
              <div>
                <Typography variant="h6" className={style.reviewText}>
                  " Awesome to work with. Incredibly organized, easy to
                  communicate with, responsive with next iterations, and
                  beautiful work. "
                </Typography>
                <Typography variant="body2" className={style.addressText}>
                  SWETAIN , CEO of Texco
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      );
    };

    const Indicator = this.state.indicatorValues.map((value, index) => {
      return (
        <div
          style={
            this.state.selected === value
              ? {
                width: '3rem',
                border: '2px solid ' + colors.themeColor,
                marginRight: '1rem'
              }
              : {
                width: '3rem',
                border: '2px solid ' + colors.snow,
                marginRight: '1rem'
              }
          }
          onClick={() => this.changeSlide(value)}
        />
      );
    });
    return (
      <div>
        <SwipeableViews index={this.state.selected}>
          <Slider />
          <Slider />
          <Slider />
        </SwipeableViews>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: '2rem'
          }}
        >
          {Indicator}
        </div>
      </div>
    );
  }
}
export default Slider;
