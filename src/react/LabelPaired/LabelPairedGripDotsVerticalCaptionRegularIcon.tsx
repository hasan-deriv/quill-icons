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
      <path d='M1.5 5.75a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375A.385.385 0 0 0 1.5 5.75m-1.5 0c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.125 0A1.12 1.12 0 0 1 0 5.75M1.5 9.5a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375A.385.385 0 0 0 1.5 9.5M0 9.5c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0A1.12 1.12 0 0 1 0 9.5m1.125 4.125a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375m0-1.5c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563M5.25 5.75a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375m-1.5 0c0-.398.21-.75.563-.96.328-.212.773-.212 1.125 0 .328.21.562.562.562.96 0 .422-.234.773-.562.984-.352.211-.797.211-1.125 0a1.12 1.12 0 0 1-.563-.984m1.125 4.125A.385.385 0 0 0 5.25 9.5a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375m0-1.5c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563m.375 4.875a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375m-1.5 0c0-.398.21-.75.563-.96a1.08 1.08 0 0 1 1.125 0c.328.21.562.562.562.96 0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.12 1.12 0 0 1-.563-.984' />
    </g>
    <defs>
      <clipPath id='50a0fc2a2af47e5c495cb2c6d74e1a5c__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalCaptionRegularIcon);
export default ForwardRef;
