import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownSmRegularIcon = (
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
      <path d='M.25 5.5c0-.465.383-.875.875-.875h12.25a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875H1.125A.864.864 0 0 1 .25 7.25zm.875 0v1.75h12.25V5.5zm0 3.5H2v6.125c0 .492.383.875.875.875H9.52c.164.328.355.629.574.875H2.875c-.984 0-1.75-.766-1.75-1.75zm3.5 1.313a.45.45 0 0 1 .438-.438h4.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H5.062a.43.43 0 0 1-.437-.437m5.77 1.53a3.97 3.97 0 0 1 3.418-1.968c1.394 0 2.707.766 3.39 1.969a3.9 3.9 0 0 1 0 3.937c-.683 1.23-1.996 1.969-3.39 1.969a3.92 3.92 0 0 1-3.418-1.969 3.9 3.9 0 0 1 0-3.937m.765.438a3.06 3.06 0 0 0 0 3.063 3.04 3.04 0 0 0 2.653 1.531 3.04 3.04 0 0 0 2.652-1.531 3.06 3.06 0 0 0 0-3.063 3.1 3.1 0 0 0-2.652-1.531 3.1 3.1 0 0 0-2.653 1.531m.793 1.45a.463.463 0 0 1 .629 0c.246.273.52.519.793.792v-2.46a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.46c.246-.273.52-.52.766-.793a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63c-.52.492-1.012 1.011-1.532 1.53a.463.463 0 0 1-.629 0 40 40 0 0 0-1.53-1.53.463.463 0 0 1 0-.63M12.5 9h.875v.027c-.3.028-.602.082-.875.164z' />
    </g>
    <defs>
      <clipPath id='9d3bd4ee6159e58e498131d88edb0822__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownSmRegularIcon);
export default ForwardRef;
