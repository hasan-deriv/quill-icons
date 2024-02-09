import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.75a5.4 5.4 0 0 0 2.625-.703 5.4 5.4 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.4 5.4 0 0 0-1.922-1.922A5.4 5.4 0 0 0 6 4.25a5.4 5.4 0 0 0-2.625.703 5.4 5.4 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.4 5.4 0 0 0 1.922 1.922A5.4 5.4 0 0 0 6 14.75M6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797 6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5m.563 2.25q-.048.516-.563.563-.516-.048-.562-.563.045-.516.562-.562.516.045.563.562m-1.313 6q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54A.73.73 0 0 0 6 11a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54m-.75 0q.024-.633.445-1.055.423-.421 1.055-.445.632.024 1.055.422l2.508-1.5q.304-.14.515.14.14.306-.14.516l-2.508 1.5q.07.21.07.422a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 4.5 11.75m4.688-4.875q-.048.516-.563.563-.516-.048-.562-.563.045-.516.562-.562.515.045.563.562M2.25 8.938q.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563.045-.516.562-.562m1.688-2.063q-.048.516-.563.563-.516-.048-.562-.563.045-.516.562-.562.516.045.563.562' />
    </g>
    <defs>
      <clipPath id='ed55d0fb8ea68a045e2cec39063f3948__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxCaptionRegularIcon);
export default ForwardRef;
