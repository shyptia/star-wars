import React from 'react';
import {Svg, Path} from 'react-native-svg';

export function RightArrowSvg({color = '#FFFFFF'}: {color?: string}) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30">
      <Path
        d="M10 24l8-8-8-8M18 24l8-8-8-8"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function LeftArrowSvg({color = '#FFFFFF'}: {color?: string}) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30">
      <Path
        d="M20 24l-8-8 8-8M12 24l-8-8 8-8"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
