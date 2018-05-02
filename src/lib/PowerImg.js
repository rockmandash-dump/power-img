import React, { Component } from 'react';
import { Surface } from 'gl-react-dom';
import getImageTag from './utility/getImageTag';
import RenderNode from './RenderNode';

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
    const { src, effects } = this.props;

    return (
      <Surface width={naturalWidth} height={naturalHeight}>
        {RenderNode(src, effects)}
      </Surface>
    );
  }
}

export default PowerImg;
