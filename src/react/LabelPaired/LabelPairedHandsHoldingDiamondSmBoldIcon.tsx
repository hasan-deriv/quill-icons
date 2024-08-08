import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.371 4.023a.843.843 0 0 1 1.23 0l2.626 2.625a.843.843 0 0 1 0 1.23l-2.625 2.626a.843.843 0 0 1-1.23 0L5.745 7.879a.843.843 0 0 1 0-1.23zM2.22 5.5c1.066 0 1.969.902 1.969 1.969v3.527a1.95 1.95 0 0 1 1.23-.465c.492 0 .984.219 1.34.574l1.668 1.668c.219.22.41.438.574.684.137-.246.328-.465.547-.684l1.668-1.668a1.93 1.93 0 0 1 1.34-.574c.492 0 .93.192 1.258.465V7.47c0-1.067.874-1.969 1.968-1.969s1.969.902 1.969 1.969v5.933c0 .848-.355 1.696-.957 2.325l-1.86 1.832c-.273.273-.683.273-.93 0a.6.6 0 0 1 0-.903l1.86-1.86c.356-.382.575-.874.575-1.394V7.47c0-.356-.301-.657-.657-.657-.383 0-.656.301-.656.657v3.992c0 .71-.3 1.394-.793 1.887l-.437.437-.711.711-.438.438c-.273.273-.684.273-.93 0a.6.6 0 0 1 0-.903l.438-.437.71-.739a.64.64 0 0 0 .192-.41c0-.328-.273-.574-.601-.574-.137 0-.301.055-.41.164l-1.668 1.668c-.547.52-.82 1.258-.82 1.996v1.395c0 .383-.302.656-.657.656a.63.63 0 0 1-.656-.656v-1.395c0-.738-.301-1.476-.848-1.996l-1.668-1.668a.64.64 0 0 0-.41-.191c-.328 0-.574.273-.574.601 0 .137.054.301.164.41l.738.711.438.438c.246.273.246.684 0 .93-.274.273-.684.273-.93 0l-.438-.438-.738-.71-.437-.438a2.67 2.67 0 0 1-.766-1.887V7.469c0-.356-.3-.657-.656-.657-.383 0-.656.301-.656.657v5.933c0 .52.19 1.012.574 1.395l1.86 1.832c.245.273.245.683 0 .93-.274.273-.684.273-.93 0l-1.86-1.832a3.25 3.25 0 0 1-.957-2.325V7.47c0-1.067.875-1.969 1.969-1.969' />
    </g>
    <defs>
      <clipPath id='c0ee3eac7a26abd3c5e0f554bf395b9e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondSmBoldIcon);
export default ForwardRef;
