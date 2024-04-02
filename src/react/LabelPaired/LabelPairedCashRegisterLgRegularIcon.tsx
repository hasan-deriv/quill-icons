import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterLgRegularIcon = (
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
      <path d='M10.625 6.75h-7.5a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625m-7.5-1.25h7.5c1.016 0 1.875.86 1.875 1.875v1.25c0 1.055-.86 1.875-1.875 1.875H7.5v1.25h9.063c1.25 0 2.304.938 2.46 2.148l.938 6.446c0 .117.039.234.039.351V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23v-2.656l.938-6.446a2.486 2.486 0 0 1 2.46-2.148H6.25V10.5H3.125A1.85 1.85 0 0 1 1.25 8.625v-1.25c0-1.016.82-1.875 1.875-1.875M1.25 23c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25v-1.25H1.25zm16.563-8.906c-.118-.625-.625-1.094-1.25-1.094H3.398c-.625 0-1.132.469-1.25 1.094L1.25 20.5h17.46zm-13.438.469a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m2.813.937c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938M10 17.688a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937' />
    </g>
    <defs>
      <clipPath id='8f36dfaffce97ef3e1c5a9552204f1d5__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterLgRegularIcon);
export default ForwardRef;
