import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleDotRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m12.5 0c-.026-.937-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148m-6.25 0c0-.677.17-1.302.508-1.875A3.759 3.759 0 0 1 16 12.75a3.759 3.759 0 0 1 3.242 1.875 3.62 3.62 0 0 1 .508 1.875 3.62 3.62 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.759 3.759 0 0 1-3.242-1.875 3.62 3.62 0 0 1-.508-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDotRegularIcon);
export default ForwardRef;
