import DiamondCrop from './components/DiamondCrop';
import { Blur } from './gl-react-blur';

const MapEffectsToNode = effects =>
  effects.map(effect => {
    switch (effect.type) {
      case 'DiamondCrop':
        return { ...effect, element: DiamondCrop };
      case 'Blur':
        return { ...effect, element: Blur };
      default:
        return null;
    }
  });

export default MapEffectsToNode;
