import React from "react";
import "./App.css";
import UlCmpRight from "./components/UlCmpRight";
import UlCmpLeft from "./components/UlCmpLeft";
import UlHoc from "./containers/UlHOC";

const UlCmpRightWithHOC = UlHoc(UlCmpRight, (data) => data.filter((item, index) => index > 1));
const UlCmpLeftWithHOC = UlHoc(UlCmpLeft, (data, props) => data.filter((item, index) => index < props.filterIndex));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.ref.current.testForwardingRef();
    }, 5000);
  }

  componentWillUnmount() {
    console.log("App did unmount");
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <UlCmpLeftWithHOC ref={this.ref} filterIndex={2} />
        <UlCmpRightWithHOC />
      </div>
    );
  }
}

export default App;
