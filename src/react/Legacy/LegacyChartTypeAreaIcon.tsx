import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyChartTypeAreaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333'>
      <path d='M20.87 6s.13.06.13.24V21H3v-4.73l5.53-5.07.12-.13s0-.05.06-.05h.06l.12.12 3.5 2.75a1 1 0 0 0 .62.21 1 1 0 0 0 .74-.33L20.82 6zm0-1a1.06 1.06 0 0 0-.79.36L13 13.13l-3.5-2.75a1.06 1.06 0 0 0-1.66.08L2 15.83V22h20V6.24A1.18 1.18 0 0 0 20.87 5M2.096 3.624q.449 0 .648-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704a3 3 0 0 1 .344-.376q.184-.176.416-.296.232-.128.52-.192.288-.072.648-.072.448 0 .808.104.368.104.624.304.265.192.4.464.144.272.144.608 0 .264-.088.48-.08.217-.232.376a1.3 1.3 0 0 1-.336.264 1.5 1.5 0 0 1-.408.136v.048q.247.048.456.16.216.105.368.272.16.168.248.4.088.225.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52 2.1 2.1 0 0 1-.672.336q-.392.112-.864.112-.424 0-.752-.088a2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.345-.264-.512-.256-.176-.712-.176h-.504v-1zm5.1 3.472q-1.095 0-1.623-.76t-.528-2.128q0-1.368.528-2.128t1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .665-.352.184-.352.184-.992V3.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352m7.19-2.744h-.024l-.408.816-1.088 1.976-1.064-1.968-.424-.88h-.024V7H10.21V1.416h1.288l1.368 2.616h.016l1.352-2.616h1.296V7h-1.144z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyChartTypeAreaIcon);
export default ForwardRef;
