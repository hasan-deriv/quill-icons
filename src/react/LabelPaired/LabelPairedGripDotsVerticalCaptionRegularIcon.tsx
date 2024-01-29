import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.75q-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375.352-.023.375-.375m-1.5 0q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984-.024.633-.562.984-.562.282-1.125 0A1.17 1.17 0 0 1 0 5.75M1.5 9.5q-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375.352-.023.375-.375M0 9.5q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984-.024.633-.562.984-.562.282-1.125 0A1.17 1.17 0 0 1 0 9.5m1.125 4.125q.352-.023.375-.375-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375m0-1.5q.633.023.984.563.282.562 0 1.124-.351.54-.984.563a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562M5.25 5.75q-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375.352-.023.375-.375m-1.5 0q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984-.024.633-.562.984-.562.282-1.125 0a1.17 1.17 0 0 1-.563-.984m1.125 4.125q.352-.023.375-.375-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375m0-1.5q.633.024.984.563.282.562 0 1.124-.351.54-.984.563a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562m.375 4.875q-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375.352-.023.375-.375m-1.5 0q.024-.633.563-.984.563-.282 1.125 0 .538.351.562.984-.024.633-.562.984-.562.282-1.125 0a1.17 1.17 0 0 1-.563-.984' />
    </g>
    <defs>
      <clipPath id='2acce713ca37b081f38f49c6b530c08c__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalCaptionRegularIcon);
export default ForwardRef;
