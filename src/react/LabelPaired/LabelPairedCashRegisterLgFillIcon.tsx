import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterLgFillIcon = (
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
      <path d='M2.5 5.5h8.75c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25H8.125v1.25h8.477c1.21 0 2.265.938 2.46 2.148l.86 5.82c.039.196.078.391.078.587V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23v-2.695c0-.196 0-.39.04-.547l.858-5.86c.196-1.21 1.25-2.148 2.5-2.148h2.227V10.5H2.5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25m1.25 1.875A.64.64 0 0 0 3.125 8c0 .352.273.625.625.625H10A.64.64 0 0 0 10.625 8c0-.312-.312-.625-.625-.625zm-1.25 15c0 .352.273.625.625.625h13.75a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H3.125a.64.64 0 0 0-.625.625m1.875-6.562c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m4.688-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938M6.25 18.938c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m6.563-4.063a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938M10 18.938c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938m6.563-4.063a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938.508 0 .938-.391.938-.938m-2.813 4.063c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937c0 .547.39.938.937.938' />
    </g>
    <defs>
      <clipPath id='558986ea8972b5875e6906b829faf5bc__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterLgFillIcon);
export default ForwardRef;
