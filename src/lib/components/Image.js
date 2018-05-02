import React, { Component } from 'react';
import { Shaders, Node } from 'gl-react';
import ImageTexture from '../shaders/ImageTexture.glsl';

const shaders = Shaders.create({
  ImageTexture: {
    frag: ImageTexture
  }
});

class Image extends Component {
  render() {
    return (
      <Node
        shader={shaders.ImageTexture}
        uniforms={{ t: this.props.children }}
      />
    );
  }
}
export default Image;
