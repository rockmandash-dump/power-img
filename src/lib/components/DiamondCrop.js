import React, { Component } from 'react';
import { Shaders, Node } from 'gl-react';
import DiamondCropShader from '../shaders/DiamondCrop.glsl';

const shaders = Shaders.create({
  DiamondCrop: {
    frag: DiamondCropShader
  }
});
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
