import React from 'react';
import {SafeAreaView, LogBox} from 'react-native';
import Video from './src/Video';

LogBox.ignoreAllLogs();

function App(props) {
  return (
    <SafeAreaView>
      <Video
        url={'https://vjs.zencdn.net/v/oceans.mp4'}
        rotateToFullScreen={true}
      />
    </SafeAreaView>
  );
}

export default App;
