import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M4.625 5.5q.585.039.625.625V8h7.5V6.125q.039-.585.625-.625.585.039.625.625V8h1.25q1.055.039 1.758.742t.742 1.758V23q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23V10.5q.039-1.055.742-1.758T2.75 8H4V6.125q.039-.585.625-.625M16.5 13h-15v10q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898zm-1.25-3.75H2.75q-.547 0-.898.352-.352.35-.352.898v1.25h15V10.5q0-.547-.352-.898-.35-.352-.898-.352' />
    </g>
    <defs>
      <clipPath id='59651c19de936f090e9c058265324502__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarLgRegularIcon);
export default ForwardRef;
