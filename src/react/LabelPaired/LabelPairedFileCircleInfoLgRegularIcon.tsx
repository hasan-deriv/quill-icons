import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 24.25h9.063q.585.703 1.328 1.21-.195.04-.391.04h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328v1.328q-.665.195-1.25.508V13H9.625a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V6.75h-5q-.547 0-.898.352Q1.5 7.452 1.5 8v15q0 .547.352.898.35.352.898.352M14 11.75a1 1 0 0 0-.195-.273L9.273 6.945A.6.6 0 0 0 9 6.79v4.336q.039.585.625.625zm7.5 8.125q0-1.172-.586-2.187a4.3 4.3 0 0 0-1.602-1.602 4.3 4.3 0 0 0-2.187-.586q-1.171 0-2.187.586-1.016.585-1.602 1.602a4.3 4.3 0 0 0-.586 2.187q0 1.171.586 2.188.585 1.015 1.601 1.601 1.017.585 2.188.586 1.171 0 2.188-.586a4.3 4.3 0 0 0 1.601-1.602q.585-1.015.586-2.187m-10 0q0-1.524.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.7 5.7 0 0 1 2.813-.743q1.485 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07q.742 1.29.742 2.813a5.54 5.54 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.7 5.7 0 0 1-2.813.742 5.7 5.7 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07 5.54 5.54 0 0 1-.743-2.813m5.625-1.25q-.86-.078-.937-.937.078-.86.937-.938.859.078.938.938-.079.858-.938.937m-1.25 3.75q.039-.585.625-.625V20.5q-.585-.039-.625-.625.039-.585.625-.625h.625q.585.039.625.625v1.875q.585.039.625.625-.039.585-.625.625H16.5q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='e87040d14aa968d096f8a6d5a631dc1c__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoLgRegularIcon);
export default ForwardRef;
