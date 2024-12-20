/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from "react";
import { media as wixMedia } from "@wix/sdk";

/* Create new type for image that extens HTMLIMG but 
excluding `src`, `width`,`height`,`alt` props

If the image is resized ? we'll customize our prop accordingly
: we'll leave it alone
*/
type WixImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  mediaIdentifier: string | undefined;
  placeholder?: string;
  alt?: string | null | undefined;
} & ( // If Scale to fill === true(by default it is) ? w/h are required : optionally set scaleToFill false in prop
    | {
        scaleToFill?: true;
        width: number;
        height: number;
      }
    | {
        scaleToFill: false;
      }
  );

const WixImage: React.FC<WixImageProps> = ({
  mediaIdentifier,
  placeholder = "/images/product-placeholder.jpg",
  alt,
  ...props
}) => {
  const imageUrl = mediaIdentifier
    ? props.scaleToFill || props.scaleToFill === undefined
      ? wixMedia.getScaledToFillImageUrl(
          mediaIdentifier,
          props.width,
          props.height,
          {},
        )
      : wixMedia.getImageUrl(mediaIdentifier).url
    : placeholder;
  return <img src={imageUrl} alt={alt || ""} {...props} />;
};

export default WixImage;
