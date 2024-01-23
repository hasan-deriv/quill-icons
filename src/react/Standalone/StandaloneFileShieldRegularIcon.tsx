import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneFileShieldRegularIcon = (
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
    <path d='M17.25 25.25h.156c.313.338.651.664 1.016.977-.339.182-.73.273-1.172.273h-10c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.094c.52 0 .963.182 1.328.547l4.531 4.531c.365.365.547.807.547 1.328v1.68l-1.25.508V14h-4.375a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V7.75h-5c-.365 0-.664.117-.898.352C6.117 8.336 6 8.635 6 9v15c0 .365.117.664.352.898.234.235.533.352.898.352zm1.25-12.5a1.042 1.042 0 0 0-.195-.273l-4.532-4.532a.58.58 0 0 0-.273-.156v4.336c.026.39.234.599.625.625zm-1.25 5.508c0 1.094.273 2.265.82 3.515.547 1.25 1.524 2.292 2.93 3.125v-8.125zm8.75 0-3.75-1.485v8.125c1.406-.833 2.383-1.875 2.93-3.125.547-1.25.82-2.421.82-3.515m-4.023-2.93 4.687 1.875c.365.156.56.443.586.86.026.859-.117 1.822-.43 2.89-.286 1.068-.807 2.096-1.562 3.086-.781.99-1.875 1.784-3.281 2.383a.83.83 0 0 1-.704 0c-1.406-.6-2.5-1.393-3.28-2.383-.756-.99-1.277-2.018-1.563-3.086-.313-1.068-.456-2.031-.43-2.89.026-.417.221-.704.586-.86l4.687-1.875a.83.83 0 0 1 .704 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileShieldRegularIcon);
export default ForwardRef;
