import React, { Component } from "react";

export default class ProgImage extends Component {
  constructor(prop) {
    super(prop);
    this.state =
      prop.src && prop.src.length > 0
        ? { curSrc: prop.src[0] }
        : { curSrc: "" };
  }

  getNextImage = () => {
    const { src } = this.props;
    const { curSrc } = this.state;

    if (src && src.length > 0) {
      const idx = src.findIndex(v => v === curSrc);
      if (idx > -1 && idx < src.length - 1) {
        this.setState({
          curSrc: src[idx + 1]
        });
      }
    }
  };

  render() {
    const { src, ...otherProps } = this.props;
    const { curSrc } = this.state;
    return <img {...otherProps}  src={curSrc} onLoad={this.getNextImage} />;
  }
}
