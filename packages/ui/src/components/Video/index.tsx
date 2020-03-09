import React, { useRef, useEffect } from 'react';

interface Props {
  source: any;
}

export const Video: React.FC<Props> = ({ source }) => {
  const video = useRef(null);

  useEffect(() => {
    if (source) {
      // @ts-ignore
      video.current.srcObject = source;
    }
  });

  return <video autoPlay ref={video} />;
};
