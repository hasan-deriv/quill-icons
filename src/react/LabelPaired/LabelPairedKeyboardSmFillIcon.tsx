import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75m.438 1.75a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zM4.5 7.688v.875c0 .246.191.437.438.437h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437h-.875a.45.45 0 0 0-.438.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437zM4.5 12.938v.874c0 .247.191.438.438.438h6.125a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437H4.937a.45.45 0 0 0-.437.438M7.563 7.25a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.875a.45.45 0 0 0 .437-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m3.063-3.063a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m3.063-3.063a.45.45 0 0 0-.438.438v.875c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437zm-.438 3.063v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437h-.876a.45.45 0 0 0-.437.438m.438 2.187a.45.45 0 0 0-.438.438v.874c0 .247.191.438.438.438h.874a.45.45 0 0 0 .438-.437v-.876a.47.47 0 0 0-.437-.437z' />
    </g>
    <defs>
      <clipPath id='66ce46fe0d9339ffe056a91c14b08347__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardSmFillIcon);
export default ForwardRef;
