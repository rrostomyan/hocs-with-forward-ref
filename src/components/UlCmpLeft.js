import React from "react";
import Li from "./Li";

// let dataSource = [1, 2, 3, 4];

class UlCmpLeft extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: dataSource.filter((item, index) => index < 2)
  //   };
  // }
  //
  // componentDidMount() {
  //   this.timer = setInterval(()=>{
  //     dataSource = [
  //       Math.floor(Math.random() * 1000),
  //       Math.floor(Math.random() * 1000),
  //       Math.floor(Math.random() * 1000) * -1,
  //       Math.floor(Math.random() * 1000) * -1
  //     ];
  //     this.handleChange();
  //   }, 2000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }
  //
  // handleChange = () => {
  //   this.setState({
  //     items: dataSource.filter((item, index) => index < 2)
  //   })
  // };

  testForwardingRef = () => {
    console.log("forwarded ref works");
  };

  render() {
    const { data, filterIndex } = this.props;
    console.log(filterIndex);
    return (
      <>
        <ul>
          {data.map((item, index) => (
            <Li key={item} item={item} />
          ))}
        </ul>
      </>
    );
  }
}

export default UlCmpLeft;
