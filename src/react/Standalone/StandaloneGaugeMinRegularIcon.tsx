import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneGaugeMinRegularIcon = (
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
    <path d='M16 7.75c-1.588.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C7.64 13.505 7.25 14.964 7.25 16.5c0 1.537.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.787 1.146 4.375 1.172 1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C19.047 8.167 17.589 7.776 16 7.75m0 18.75c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.411 1.328-5C8.266 9.938 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328m.938-16.25c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937.573.052.885.364.938.937m-2.188 10c0 .365.117.664.352.898.234.235.533.352.898.352s.664-.117.898-.352c.235-.234.352-.533.352-.898s-.117-.664-.352-.898C16.664 19.117 16.365 19 16 19s-.664.117-.898.352c-.235.234-.352.533-.352.898m3.75 0c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758 0-.234.04-.469.117-.703l-4.18-2.5c-.312-.235-.39-.521-.234-.86.235-.312.521-.39.86-.234l4.18 2.5c.468-.443 1.054-.677 1.757-.703.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758m-5.937-8.125c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937.573.052.885.364.938.937m9.687 5.313c-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938m-.937-5.313c-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937.573.052.885.364.938.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGaugeMinRegularIcon);
export default ForwardRef;
