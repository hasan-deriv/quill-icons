import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneEyeSlashBoldIcon = (
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
    <path d='m5.023 6.695 4.375 3.438a11.3 11.3 0 0 1 2.93-1.719Q14.008 7.79 16 7.75q2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.156.469 0 .938-.43.976-1.211 2.187a16 16 0 0 1-1.914 2.461l4.101 3.203q.626.586.157 1.328-.586.626-1.328.157L3.852 8.18q-.626-.586-.157-1.328.586-.626 1.328-.157m5.899 4.61 1.797 1.406Q14.086 11.539 16 11.5q2.109.04 3.555 1.445Q20.96 14.391 21 16.5q0 1.25-.547 2.305l2.11 1.64a15 15 0 0 0 1.68-2.07q.703-1.054 1.093-1.875a18 18 0 0 0-1.172-2.031 13.4 13.4 0 0 0-1.914-2.188 9.7 9.7 0 0 0-2.773-1.875Q17.914 9.664 16 9.625q-2.97.078-5.078 1.68m8.008 6.289q.195-.508.195-1.094-.04-1.328-.898-2.227-.9-.858-2.227-.898h-.078Q16 13.688 16 14q0 .585-.273 1.094zm.351 5.117L20.921 24Q18.814 25.172 16 25.25q-2.383-.039-4.258-.937-1.874-.9-3.242-2.227-1.406-1.29-2.305-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.548-1.406 1.875-3.203l1.485 1.133Q7.172 15.367 6.664 16.5q.43.898 1.172 2.031.78 1.134 1.914 2.188a9.7 9.7 0 0 0 2.773 1.875q1.563.742 3.477.781 1.797-.039 3.281-.664M11 16.5v-.312l2.188 1.718q.663 1.29 2.109 1.64l2.187 1.72A4.7 4.7 0 0 1 16 21.5q-2.109-.04-3.555-1.445Q11.04 18.609 11 16.5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEyeSlashBoldIcon);
export default ForwardRef;
