import devConfig from './dev';
import prodConfig from './prod';

export default getConfig => {
  let config;

  if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    config = prodConfig;
  } else {
    config = devConfig;
  }


  return config;
}
