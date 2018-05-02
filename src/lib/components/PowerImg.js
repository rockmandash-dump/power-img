import React, { Component, Fragment } from 'react';
import { Surface } from 'gl-react-dom';
import Image from '../components/Image';
import getImageTag from '../utility/getImageTag';
import { Blur } from '../gl-react-blur';
import DiamondCrop from './DiamondCrop';
import reduceRight from 'lodash/reduceRight';

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
  renderNode = () => {
    const { src, effects } = this.props;

    const effectsNodes = effects.map(effect => {
      switch (effect.type) {
        case 'DiamondCrop':
          return { ...effect, element: DiamondCrop };
        case 'Blur':
          return { ...effect, element: Blur };
        default:
          return null;
      }
    });

    let start = <Image>{src}</Image>;

    const totalElements = reduceRight(
      effectsNodes,
      (Total, Current) => {
        return React.createElement(Current.element, Current.config, Total);
      },
      start
    );
    return totalElements;
  };

  render() {
    const { naturalWidth, naturalHeight } = this.state;

    return (
      <Surface width={naturalWidth} height={naturalHeight}>
        {this.renderNode()}
      </Surface>
    );
  }
}

export default PowerImg;
