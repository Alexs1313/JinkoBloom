import WebView from 'react-native-webview';
import { loaderHTML } from './loaderHTML';

const Loader = () => {
  return <WebView originWhitelist={['*']} source={{ html: loaderHTML }} />;
};

export default Loader;
