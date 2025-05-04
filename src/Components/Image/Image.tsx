// src/components/Image.tsx
import React from "react";

import "./imagestyle.css";

// Define the Props type for the Image component
interface ImageProps {
  src: string; // Path to the image
  alt: string; // Alt text for the image
  width?: number; // Width of the image
  height?: number; // Height of the image
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="post-image"
      />
    </div>
  );
};

export default Image;
