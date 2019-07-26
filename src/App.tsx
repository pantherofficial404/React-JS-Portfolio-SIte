import * as React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  Home,
  Skill,
  Experience,
  Work,
  Contact
} from './Pages/Index';
import colors from './Constants/Colors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface IState {
  selected: number;
  animateHeight: boolean;
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: 0,
    animateHeight: true
  };

  handleMenuNavigation = (index: number): void => {
    this.setState({
      selected: index
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: colors.backgroundLite }}>
          <Navbar handleMenuNavigation={this.handleMenuNavigation} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/skill" component={Skill} />
            <Route path="/experience" component={Experience} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
