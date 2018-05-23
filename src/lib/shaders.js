import { Shaders } from 'gl-react';
import DiamondCropShader from './glsl/DiamondCrop.glsl';
import Image from './glsl/Image.glsl';

const shaders = Shaders.create({
  DiamondCrop: {
    frag: DiamondCropShader
  },
  Image: {
    frag: Image
  }
});

export default shaders;
