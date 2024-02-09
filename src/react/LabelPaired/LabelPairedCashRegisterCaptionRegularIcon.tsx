import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterCaptionRegularIcon = (
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
      <path d='M6.375 4.25h-4.5q-.352.023-.375.375v.75q.023.352.375.375h4.5q.352-.023.375-.375v-.75q-.023-.352-.375-.375m-4.5-.75h4.5q.469.024.797.328.304.329.328.797v.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328H4.5v.75h5.438q.585 0 .984.375.422.352.515.914l.54 3.867a1 1 0 0 1 .023.211V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14v-1.5q0-.046.023-.094l.54-3.867q.093-.563.515-.914.399-.375.984-.375H3.75V6.5H1.875a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-.75q.024-.468.328-.797.328-.304.797-.328M.75 14q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-.75H.75zm9.938-5.344Q10.57 8.046 9.96 8H2.063q-.633.047-.75.656L.75 12.5h10.5zm-8.063.281q.516.048.563.563-.048.515-.563.563-.516-.048-.562-.563.045-.516.562-.562m1.688.563q.045-.516.562-.562.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563m-.563 1.313q.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563.045-.516.562-.562M6.563 9.5q.045-.516.562-.562.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563M6 10.813q.516.045.563.562-.048.515-.563.563-.516-.048-.562-.563.045-.516.562-.562M8.813 9.5q.045-.516.562-.562.515.045.563.562-.048.515-.563.563-.516-.048-.562-.563m-.563 1.313q.515.045.563.562-.048.515-.563.563-.516-.048-.562-.563.046-.516.562-.562' />
    </g>
    <defs>
      <clipPath id='46861236592295c7ac86d6970d5620b8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterCaptionRegularIcon);
export default ForwardRef;
