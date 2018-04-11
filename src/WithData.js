import React, { Component } from "react";

const WithData = (WrappedComponent, selectData) => {
  return class extends Component {
    //static wrappedComponent
    state = {
      data: {}
    };

    componentDidMount() {
      console.log("here");
      this.handleChange();
    }

    handleChange = () => {
      selectData.then(({ data }) => {
        this.setState({
          data
        });
      });
    };

    render() {
      console.log(this.state.data);
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default WithData;
