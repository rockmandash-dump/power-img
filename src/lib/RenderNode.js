import React from 'react';
import MapEffects from './MapEffects';
import Image from './components/Image';
import reduceRight from 'lodash/reduceRight';

const RenderNode = (src, effects) =>
  reduceRight(
    MapEffects(effects),
    (Total, Current) => {
      return React.createElement(Current.element, Current.config, Total);
    },
    <Image>{src}</Image>
  );

export default RenderNode;
