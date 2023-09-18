import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleTrashRegularIcon = (
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
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.838 1.172 4.375 1.172s2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm6.25-4.375H13.852l.468-.43a.52.52 0 0 1 .43-.195h2.5a.52.52 0 0 1 .43.195l.468.43H19.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-.078l-.469 6.953a1.172 1.172 0 0 1-.39.82c-.235.235-.521.352-.86.352h-3.906c-.339 0-.625-.117-.86-.352a1.172 1.172 0 0 1-.39-.82l-.469-6.953h-.078c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Zm6.172 1.25h-4.844l.469 6.875h3.906l.469-6.875Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleTrashRegularIcon);
export default ForwardRef;
