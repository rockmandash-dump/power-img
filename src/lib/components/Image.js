import React, { Component } from 'react';
import { Node } from 'gl-react';
import shaders from '../shaders';

class Image extends Component {
  render() {
    return (
      <Node shader={shaders.Image} uniforms={{ t: this.props.children }} />
    );
  }
}
export default Image;
