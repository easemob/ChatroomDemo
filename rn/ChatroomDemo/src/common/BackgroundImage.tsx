import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useThemeContext } from 'react-native-chat-room';

import * as assert from '../assets';
export const BackgroundImage = () => {
  const { style } = useThemeContext();
  const { height: winHeight, width: winWidth } = useWindowDimensions();
  return (
    <View
      style={[StyleSheet.absoluteFill, { position: 'absolute' }]}
      onTouchEnd={() => {}}
    >
      <ImageBackground
        resizeMode={'cover'}
        source={style === 'light' ? assert.a_lightImage : assert.a_darkImage}
        // style={{ width: '100%', height: '100%' }}
        style={{ width: winWidth, height: winHeight }}
      />
    </View>
  );
};

export const BackgroundImageMemo = React.memo(BackgroundImage);
