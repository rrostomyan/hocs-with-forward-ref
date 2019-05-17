import React from "react";

let dataSource = [1, 2, 3, 4];
function UlHoc(WrappedComponent, filterFn) {
  class UlCmp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: filterFn(dataSource, props)
      };
    }

    componentDidMount() {
      this.timer = setInterval(() => {
        dataSource = [
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000) * -1,
          Math.floor(Math.random() * 1000) * -1
        ];
        this.handleChange();
      }, 2000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    handleChange = () => {
      this.setState({
        items: filterFn(dataSource, this.props)
      });
    };

    render() {
      const { items } = this.state;
      const { forwardedRefer } = this.props;
      return (
        <WrappedComponent ref={forwardedRefer} data={items} {...this.props} />
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <UlCmp {...props} forwardedRefer={ref} />;
  });
}

export default UlHoc;
