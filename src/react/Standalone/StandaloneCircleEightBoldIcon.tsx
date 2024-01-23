import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleEightBoldIcon = (
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
    <path d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.062-.703-1.225-1.692-2.214-2.968-2.97A8.062 8.062 0 0 0 16 8.376a8.062 8.062 0 0 0-4.062 1.094c-1.277.755-2.266 1.745-2.97 2.969-.728 1.223-1.093 2.578-1.093 4.062 0 1.484.365 2.839 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10.313-5c.807.026 1.47.3 1.992.82.52.521.794 1.185.82 1.992 0 .626-.17 1.172-.508 1.641.73.6 1.107 1.406 1.133 2.422-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-1.25c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227.026-1.016.417-1.823 1.172-2.422a2.595 2.595 0 0 1-.547-1.64c.026-.808.3-1.472.82-1.993.521-.52 1.185-.794 1.992-.82zm-.625 3.75h.624c.573-.052.886-.365.938-.937-.052-.573-.365-.886-.937-.938h-.625c-.573.052-.886.365-.938.938.052.572.365.885.938.937m.624 1.875h-.937c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898s.117.664.352.898c.234.235.533.352.898.352h1.25c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898s-.117-.664-.352-.898c-.234-.235-.533-.352-.898-.352z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEightBoldIcon);
export default ForwardRef;
