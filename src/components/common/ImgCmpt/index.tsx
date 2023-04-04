import { useEffect, useState } from 'react';

function ImgCmpt({ src, srcNext, alt }: PropsType): JSX.Element {
  const [srcData, setSrcData] = useState('image1.jpg');

  useEffect(() => {
    setSrcData(src);
  }, [src]);

  const handleMouseOver = () => {
    if (!srcNext) return;
    setSrcData(srcNext);
  };

  const handleMouseOut = () => {
    setSrcData(src);
  };

  return (
    <img
      src={srcData}
      alt={alt}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
}

export default ImgCmpt;

type PropsType = {
  src: string;
  srcNext: string;
  alt: string;
};
