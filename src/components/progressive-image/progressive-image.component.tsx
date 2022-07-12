import { useEffect, useState } from 'react'
import './progressive-image.styles.css'

export interface ProgressiveImageProps {
  placeholderSrc: string;
  src: string;
  alt: string;
  className: string;
  props?: object
}


export function ProgressiveImage({ placeholderSrc, src, alt, className, ...props }: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState('');

  const customClass = !imgSrc ? "progressive-image__loading" : "progressive-image__loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src ? src : placeholderSrc
    img.onload = () => setImgSrc(src || placeholderSrc)
  }, [src, placeholderSrc]);

  return (
    <img
      src={imgSrc || placeholderSrc}
      alt={alt}
      { ...props }
      loading="lazy"
      className={`launch-card__image ${customClass}`}
    />
  );
};