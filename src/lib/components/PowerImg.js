import React, { Component, Fragment } from 'react';
import { Surface } from 'gl-react-dom';
import Image from '../components/Image';
import getImageSize from '../utility/getImageSize';

class PowerImg extends Component {
  constructor(props) {
    super(props);
    this.state = { naturalWidth: 0, naturalHeight: 0 };
  }
  componentDidMount() {
    getImageSize(this.props.src, this.handleImageOnLoad);
  }
  handleImageOnLoad = img => {
    this.setState({
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    });
  };

  handleClick = () => {
    this.setState({ naturalWidth: this.state.naturalWidth + 50 });
  };

  render() {
    const { naturalWidth, naturalHeight } = this.state;
    return (
      <Fragment>
        <button onClick={this.handleClick}>click</button>

        <Surface width={naturalWidth} height={naturalHeight}>
          <Image>{this.props.src}</Image>
        </Surface>
      </Fragment>
    );
  }
}

export default PowerImg;
