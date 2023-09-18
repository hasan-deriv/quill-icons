import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleDollarBoldIcon = (
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
      d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.063-.703-1.223-1.692-2.213-2.968-2.968A8.062 8.062 0 0 0 16 8.375a8.062 8.062 0 0 0-4.063 1.094c-1.275.755-2.265 1.745-2.968 2.969-.73 1.223-1.094 2.578-1.094 4.062 0 1.484.365 2.838 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm10.82-4.766v.547c.365.052.742.13 1.133.235.078.026.143.052.195.078.495.182.704.534.625 1.054-.208.47-.56.665-1.054.586-.026-.026-.052-.039-.078-.039-.052 0-.091-.013-.118-.039a7.567 7.567 0 0 0-.82-.195 2.812 2.812 0 0 0-1.601.156c-.235.104-.391.248-.47.43-.103.182-.038.364.196.547.39.208.807.364 1.25.469h.04c.051.025.103.039.155.039.026.026.066.039.118.039a6.973 6.973 0 0 1 1.953.78c.781.574 1.093 1.329.937 2.267-.208.885-.703 1.47-1.484 1.757-.313.13-.638.209-.977.235v.625c-.052.494-.338.768-.86.82-.494-.052-.767-.326-.82-.82v-.703a17.742 17.742 0 0 1-1.68-.47c-.468-.208-.65-.572-.546-1.093.208-.469.56-.638 1.055-.508.052 0 .104.013.156.04.052 0 .104.012.156.038.443.157.886.287 1.328.391.678.078 1.198.04 1.563-.117.234-.104.39-.26.469-.469.052-.234-.026-.43-.235-.586a3.615 3.615 0 0 0-1.367-.508l-.234-.078-.04-.039a6.306 6.306 0 0 1-1.874-.703c-.782-.52-1.107-1.25-.977-2.188.234-.859.742-1.445 1.524-1.757a4.55 4.55 0 0 1 .703-.196v-.625c.052-.52.325-.807.82-.859.52.052.807.338.86.86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDollarBoldIcon);
export default ForwardRef;
