import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { Button, Container } from "react-bulma-components/full";
import Switch from "react-bulma-switch/lib/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    // console.log(e.target.className[0]);
    if((e.target.className.split(" ")[0] === "drum-pad")) {
     ( () => {document.getElementById(e.target.id).firstChild.play()})();
    }
    this.handleChange(e);
  }
  handleChange(e) {
    this.setState({ display: e.target.id });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Container className="drum-machine" onClick={this.handleClick} fluid>
          <section className="drum-body">
            <div>
              <Button className="drum-pad" size="large" id="Dark Melody">
                <audio preload="none">
                  <source
                    src="https://www.looperman.com/media/loops/3272682/looperman-l-3272682-0185751-tay-keith-x-moneybagg-yo-dark-melody.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
                Q
              </Button>
              <Button className="drum-pad" size="large" id="darkMelody1">
                <audio preload="none">
                  <source
                    src="https://www.looperman.com/media/loops/3272682/looperman-l-3272682-0185751-tay-keith-x-moneybagg-yo-dark-melody.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
                W
              </Button>
              <Button className="drum-pad" size="large">
                E
              </Button>
            </div>
            <div>
              <Button className="drum-pad" size="large">
                A
              </Button>
              <Button className="drum-pad" size="large">
                S
              </Button>
              <Button className="drum-pad" size="large">
                D
              </Button>
            </div>
            <div>
              <Button className="drum-pad" size="large">
                Z
              </Button>
              <Button className="drum-pad" size="large">
                X
              </Button>
              <Button className="drum-pad" size="large">
                C
              </Button>
            </div>
          </section>
          <section className="drum-display">
            <Switch value rounded>
              Switch Rounded
            </Switch>
            <div className="display">{this.state.display}</div>
            <div>
              <input
                class="slider is-fullwidth"
                step="1"
                min="0"
                max="100"
                value="50"
                type="range"
              />
            </div>
            <Switch value rounded>
              Switch Rounded
            </Switch>
          </section>
        </Container>
      </div>
    );
  }
}

export default App;
