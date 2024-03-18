import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLifeRingRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m21.703 23.14-3.555-3.554A3.78 3.78 0 0 1 16 20.25a3.8 3.8 0 0 1-2.187-.664l-3.555 3.555C11.78 24.469 13.773 25.25 16 25.25c2.188 0 4.18-.781 5.703-2.11m.899-.898A8.68 8.68 0 0 0 24.75 16.5c0-2.187-.82-4.18-2.148-5.703l-3.555 3.555c.43.625.703 1.367.703 2.148 0 .82-.273 1.563-.703 2.188zm.898.899.43.43a.66.66 0 0 1 0 .898.66.66 0 0 1-.899 0l-.43-.469A9.88 9.88 0 0 1 16 26.5 9.98 9.98 0 0 1 9.36 24l-.43.469a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l.469-.43A9.98 9.98 0 0 1 6 16.5c0-2.5.938-4.844 2.5-6.602l-.469-.43a.66.66 0 0 1 0-.898.66.66 0 0 1 .899 0l.43.43c1.757-1.523 4.1-2.5 6.64-2.5 2.5 0 4.844.977 6.602 2.5l.43-.43a.66.66 0 0 1 .898 0 .66.66 0 0 1 0 .899l-.43.43C25.023 11.655 26 13.96 26 16.5c0 2.54-.977 4.883-2.5 6.64M21.703 9.898A8.66 8.66 0 0 0 16 7.75c-2.227 0-4.219.82-5.742 2.148l3.555 3.555c.624-.43 1.367-.703 2.187-.703.781 0 1.523.273 2.148.703zm-8.789 8.79a3.8 3.8 0 0 1-.664-2.188c0-.781.234-1.523.664-2.148L9.36 10.797C8.031 12.32 7.25 14.312 7.25 16.5c0 2.227.781 4.219 2.11 5.742zM13.5 16.5a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLifeRingRegularIcon);
export default ForwardRef;
