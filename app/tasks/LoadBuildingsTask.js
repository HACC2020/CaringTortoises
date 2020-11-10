import { features } from './data/campusmap.json';

class LoadBuildingsTask {
  load = (setState) => {
    setState(features);
  }
}

export default LoadBuildingsTask;
