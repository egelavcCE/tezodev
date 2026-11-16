import type React from 'react';

type AFrameElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  position?: string;
  rotation?: string;
  scale?: string;
  visible?: boolean | string;
  material?: string;
  geometry?: string;
  color?: string;
  radius?: number | string;
  width?: number | string;
  height?: number | string;
  depth?: number | string;
  opacity?: number | string;
  transparent?: boolean | string;
  autoplay?: boolean | string;
  loop?: boolean | string;
  crossorigin?: string;
  playsinline?: boolean | string;
  timeout?: number | string;
  'vr-mode-ui'?: string;
  'loading-screen'?: string;
  'device-orientation-permission-ui'?: string;
  'wasd-controls'?: string;
  'look-controls'?: string;
  'cursor-listener'?: string;
  'raycaster'?: string;
  [key: string]: unknown;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': AFrameElement;
      'a-assets': AFrameElement;
      'a-asset-item': AFrameElement;
      'a-videosphere': AFrameElement;
      'a-sky': AFrameElement;
      'a-entity': AFrameElement;
      'a-camera': AFrameElement;
      'a-cursor': AFrameElement;
      'a-sphere': AFrameElement;
      'a-box': AFrameElement;
      'a-plane': AFrameElement;
      'a-cylinder': AFrameElement;
      'a-circle': AFrameElement;
      'a-ring': AFrameElement;
      'a-text': AFrameElement;
      'a-image': AFrameElement;
      'a-video': AFrameElement;
      'a-light': AFrameElement;
      'a-sound': AFrameElement;
      [elemName: string]: unknown;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': AFrameElement;
      'a-assets': AFrameElement;
      'a-asset-item': AFrameElement;
      'a-videosphere': AFrameElement;
      'a-sky': AFrameElement;
      'a-entity': AFrameElement;
      'a-camera': AFrameElement;
      'a-cursor': AFrameElement;
      'a-sphere': AFrameElement;
      'a-box': AFrameElement;
      'a-plane': AFrameElement;
      'a-cylinder': AFrameElement;
      'a-circle': AFrameElement;
      'a-ring': AFrameElement;
      'a-text': AFrameElement;
      'a-image': AFrameElement;
      'a-video': AFrameElement;
      'a-light': AFrameElement;
      'a-sound': AFrameElement;
      [elemName: string]: unknown;
    }
  }
}

export {};
