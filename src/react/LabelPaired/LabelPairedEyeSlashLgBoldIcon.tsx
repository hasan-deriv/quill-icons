import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.523 5.695 4.375 3.438a11.3 11.3 0 0 1 2.93-1.719q1.68-.625 3.672-.664 2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.156.469 0 .938-.43.976-1.211 2.187a16 16 0 0 1-1.914 2.461l4.101 3.203q.626.586.157 1.328-.586.626-1.328.157L.352 7.18q-.626-.586-.157-1.328.586-.626 1.328-.157m5.899 4.61 1.797 1.406q1.367-1.172 3.281-1.211 2.109.04 3.555 1.445Q17.46 13.391 17.5 15.5q0 1.25-.547 2.305l2.11 1.64a15 15 0 0 0 1.68-2.07q.703-1.054 1.093-1.875a18 18 0 0 0-1.172-2.031 13.4 13.4 0 0 0-1.914-2.188 9.7 9.7 0 0 0-2.773-1.875q-1.563-.742-3.477-.781-2.97.078-5.078 1.68m8.008 6.289q.195-.508.195-1.094-.039-1.328-.898-2.227-.9-.858-2.227-.898h-.078q.078.313.078.625 0 .585-.273 1.094zm.351 5.117L17.421 23q-2.108 1.172-4.921 1.25-2.383-.039-4.258-.937-1.875-.9-3.242-2.227-1.406-1.29-2.305-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.548-1.406 1.875-3.203l1.485 1.133Q3.672 14.367 3.164 15.5q.43.898 1.172 2.031.78 1.134 1.914 2.188a9.7 9.7 0 0 0 2.773 1.875q1.563.742 3.477.781 1.797-.039 3.281-.664M7.5 15.5v-.312l2.188 1.718q.663 1.29 2.109 1.64l2.187 1.72a4.7 4.7 0 0 1-1.484.234q-2.109-.04-3.555-1.445Q7.54 17.609 7.5 15.5' />
    </g>
    <defs>
      <clipPath id='7a5697d43af920e464f9602d975cd421__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashLgBoldIcon);
export default ForwardRef;
