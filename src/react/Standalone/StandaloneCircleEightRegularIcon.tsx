import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleEightRegularIcon = (
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
    <path
      fillOpacity={0.72}
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.838 1.172 4.375 1.172s2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm10.469-5c.755.026 1.38.287 1.875.781.494.495.755 1.12.781 1.875-.026.807-.326 1.472-.898 1.992.78.573 1.184 1.368 1.21 2.383-.026.834-.312 1.537-.859 2.11-.573.547-1.276.833-2.11.859h-.937c-.833-.026-1.536-.313-2.11-.86-.546-.572-.832-1.275-.858-2.109.025-1.015.43-1.81 1.21-2.383-.572-.52-.872-1.184-.898-1.992.026-.755.287-1.38.781-1.875.495-.495 1.12-.755 1.875-.781h.938Zm-.938 4.063h.938c.39 0 .716-.144.976-.43.287-.26.43-.586.43-.977 0-.39-.143-.716-.43-.976a1.265 1.265 0 0 0-.976-.43h-.938c-.39 0-.716.143-.976.43-.287.26-.43.586-.43.976s.143.716.43.977c.26.286.586.43.976.43Zm.938 1.25h-.938c-.495 0-.898.169-1.21.507-.34.313-.508.716-.508 1.211 0 .495.169.899.507 1.211.313.339.716.508 1.211.508h.938c.494 0 .898-.17 1.21-.508.34-.312.509-.716.509-1.21 0-.495-.17-.9-.508-1.212-.313-.338-.716-.508-1.211-.508Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEightRegularIcon);
export default ForwardRef;
