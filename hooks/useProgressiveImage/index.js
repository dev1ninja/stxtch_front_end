import React from "react";

function sleep(delay) {
  return new Promise(function(resolve) {
      setTimeout(resolve, delay);
  });
}

const useProgressiveImg = (lowQualitySrc, highQualitySrc, rate) => {
  const [src, setSrc] = React.useState(lowQualitySrc);

  React.useEffect(async () => {
    setSrc(lowQualitySrc);
    let highQualitySrc_ = highQualitySrc
    const img = new Image();
    img.src = highQualitySrc_;
    img.onload = () => {
      setSrc(highQualitySrc_);
    };
  }, [lowQualitySrc, highQualitySrc, rate]);

  React.useEffect(() => {

  })

  return [src, { blur: src === lowQualitySrc }];
};

export default useProgressiveImg;