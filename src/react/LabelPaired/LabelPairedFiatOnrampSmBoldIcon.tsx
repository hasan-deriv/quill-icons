import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampSmBoldIcon = (
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
      <path d='M12.363 5.063a2.4 2.4 0 0 0-1.996 1.175 2.298 2.298 0 0 0 1.996 3.446 2.298 2.298 0 0 0 1.996-3.445c-.41-.712-1.175-1.177-1.996-1.177m2.325 5.113c-.63.52-1.45.82-2.325.82A3.59 3.59 0 0 1 9.465 9.52l-1.723 1.722a3.59 3.59 0 0 1 1.477 2.899c0 .875-.301 1.695-.82 2.297h5.25c.574 0 1.039-.465 1.039-1.012zm-9.079 6.262a2.293 2.293 0 0 0 2.297-2.297 2.3 2.3 0 0 0-1.449-2.133H6.43a2 2 0 0 0-.82-.164 2.293 2.293 0 0 0-2.298 2.297 2.276 2.276 0 0 0 2.297 2.297m.875-5.797 2.38-2.38a3 3 0 0 1-.11-.874c0-1.996 1.613-3.637 3.61-3.637A3.653 3.653 0 0 1 16 7.387v8.039c0 1.285-1.066 2.324-2.352 2.324H5.61A3.606 3.606 0 0 1 2 14.14a3.606 3.606 0 0 1 3.61-3.609c.3 0 .6.028.874.11M4.488 6.949c0-.355.301-.656.657-.656h2.57c.273 0 .52.164.601.41.11.246.055.52-.136.711L5.637 9.957c-.246.246-.657.246-.93 0a.68.68 0 0 1 0-.93l1.422-1.422h-.984a.65.65 0 0 1-.657-.656m7.492-1.394v.52h.52v-.52h.52v.52c.19 0 .382.054.52.19.327.301.355.794.054 1.122a.75.75 0 0 1 .219.52.794.794 0 0 1-.793.792v.52h-.52v-.52h-.52v.52h-.52v-.52h-.519v-.52h.52V6.595h-.52v-.52h.52v-.52zm1.04 2.078h-1.04v.547h1.04a.294.294 0 0 0 .273-.274.294.294 0 0 0-.273-.273m0-1.04h-1.04v.52h1.04c.136 0 .273-.11.273-.246a.274.274 0 0 0-.273-.273m-7.082 5.579v.273c.41.164.71.547.71.985v.082h-.656v-.082a.374.374 0 0 0-.383-.383.374.374 0 0 0-.382.383c0 .218.164.383.382.383.575 0 1.04.464 1.04 1.039 0 .437-.301.82-.711.984v.273H5.28v-.3a1 1 0 0 1-.683-.957v-.11h.629v.11c0 .191.164.382.382.382a.39.39 0 0 0 .383-.382.374.374 0 0 0-.383-.383c-.574 0-1.011-.465-1.011-1.04 0-.437.273-.847.683-.984v-.273z' />
    </g>
    <defs>
      <clipPath id='9576cba691bbfebf5e2222f2e2c36024__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampSmBoldIcon);
export default ForwardRef;
