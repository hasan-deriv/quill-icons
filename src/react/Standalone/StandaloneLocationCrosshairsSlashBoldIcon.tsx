import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLocationCrosshairsSlashBoldIcon = (
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
    <path d='m5.023 6.695 5.704 4.493q1.757-1.759 4.336-2.11v-1.64q.078-.86.937-.938.859.078.938.938v1.64q2.578.352 4.375 2.11 1.757 1.796 2.148 4.374h1.602q.858.079.937.938-.079.859-.937.938H23.46a8 8 0 0 1-1.016 2.93l5.703 4.452q.626.586.157 1.328-.586.626-1.328.157L3.852 8.18q-.626-.586-.157-1.328.586-.626 1.328-.157m7.188 5.664 1.523 1.172q.937-.742 2.266-.781 1.602.039 2.656 1.094 1.055 1.054 1.094 2.656 0 .82-.312 1.523l1.523 1.172q.664-1.21.664-2.695-.078-2.383-1.64-3.984-1.602-1.563-3.985-1.641-2.226.039-3.79 1.484m5.664 4.414h-.04q.04-.156.04-.273a2.04 2.04 0 0 0-.547-1.328A2.04 2.04 0 0 0 16 14.625q-.39 0-.703.117zm1.836 6.25a8.1 8.1 0 0 1-2.773.938v1.602q-.079.858-.938.937-.86-.079-.937-.937V23.96q-2.58-.39-4.376-2.148-1.756-1.758-2.109-4.375h-1.64q-.86-.079-.938-.938.078-.86.938-.937h1.64q.039-.587.235-1.133l1.601 1.289q-.039.39-.039.781.078 2.383 1.64 3.984 1.602 1.602 3.985 1.641 1.095 0 2.07-.39z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsSlashBoldIcon);
export default ForwardRef;
