import React, { Component } from 'react';
import { Surface } from 'gl-react-dom';
import Image from '../components/Image';
import getImageTag from '../utility/getImageTag';

class PowerImg extends Component {
  constructor(props) {
    super(props);
    this.state = { naturalWidth: 0, naturalHeight: 0 };
  }
  componentDidMount() {
    this.handleImage();
  }
  handleImage = async () => {
    const imageTag = await getImageTag(this.props.src);
    this.setState({
      naturalWidth: imageTag.naturalWidth,
      naturalHeight: imageTag.naturalHeight
    });
  };
  render() {
    const { naturalWidth, naturalHeight } = this.state;
    return (
      <Surface width={naturalWidth} height={naturalHeight}>
        <Image>{this.props.src}</Image>
      </Surface>
    );
  }
}

export default PowerImg;
