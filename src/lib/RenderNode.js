import reduceRight from 'lodash/reduceRight';
import React from 'react';
import MapEffectsToNode from './MapEffectsToNode';
import Image from './components/Image';

const RenderNode = (src, effects) =>
  reduceRight(
    MapEffectsToNode(effects),
    (Total, Current) => {
      return React.createElement(Current.element, Current.config, Total);
    },
    <Image>{src}</Image>
  );

export default RenderNode;
