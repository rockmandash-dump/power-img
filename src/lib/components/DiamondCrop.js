import React, { Component } from 'react';
import { Node } from 'gl-react';
import shaders from '../shaders';

class DiamondCrop extends Component {
  render() {
    return (
      <Node
        shader={shaders.DiamondCrop}
        uniforms={{ t: this.props.children }}
      />
    );
  }
}

export default DiamondCrop;
