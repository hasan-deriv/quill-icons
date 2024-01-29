import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 24.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q12.383 6.789 10 6.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q1.25 13.195 1.25 15.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q7.617 24.211 10 24.25M10 5.5q2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328m.938 3.75q-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937m-2.188 10q0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898Q10.548 18 10 18q-.547 0-.898.352-.352.35-.352.898m-1.25 0q.039-1.055.742-1.758T10 16.75q1.055.039 1.758.703l4.18-2.5q.507-.234.859.235.234.507-.235.859l-4.18 2.5q.118.352.118.703-.039 1.055-.742 1.758T10 21.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758m7.813-8.125q-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937M3.75 14.563q.859.078.938.937-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937m2.813-3.438q-.079.859-.938.938-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937' />
    </g>
    <defs>
      <clipPath id='4ca449df06c0900181c6412ea8c67ed8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxLgRegularIcon);
export default ForwardRef;
