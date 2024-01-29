import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatility101sIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#0AA0B0'
      d='M22.5 13H24v9h-1.5v10h-1V22H20v-9h1.5v-2h1zM30 11v7h-1.5v4h-1v-4H26v-7zM16.5 20v-4h-1v4H14v8h1.5v2h1v-2H18v-8zM10.5 15H12v6h-1.5v7h-1v-7H8v-6h1.5v-2h1zM4.5 19H6v4H4.5v2h-1v-2H2v-4h1.5v-2h1z'
    />
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M27 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-2.747 6.274V7h2.916v-.726h-.888V2.812h-1.38L23.9 4.132l.576.45.852-1.116h.054v2.808zm3.748.654q.312.144.768.144.306 0 .552-.078.252-.078.426-.216.18-.144.276-.336a.9.9 0 0 0 .096-.42q0-.81-1.038-.948l-.354-.048q-.192-.03-.264-.096a.28.28 0 0 1-.066-.198q0-.12.096-.192t.324-.072q.198 0 .384.09.192.084.342.234l.51-.522a2 2 0 0 0-.246-.204 1 1 0 0 0-.27-.156 1.3 1.3 0 0 0-.336-.096 2.3 2.3 0 0 0-.432-.036q-.282 0-.51.078a1.1 1.1 0 0 0-.384.21.94.94 0 0 0-.246.324 1 1 0 0 0-.084.414q0 .84 1.062.972l.342.042q.318.042.318.264a.27.27 0 0 1-.102.222q-.102.078-.366.078a1 1 0 0 1-.462-.108 1.4 1.4 0 0 1-.372-.294l-.522.528q.246.27.558.42'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M24.253 7v-.726h1.128V3.466h-.054l-.852 1.116-.576-.45 1.002-1.32h1.38v3.462h.888V7zM28.77 7.072q-.456 0-.769-.144-.312-.15-.558-.42l.522-.528q.168.186.372.294t.462.108q.264 0 .366-.078a.27.27 0 0 0 .102-.222q0-.222-.318-.264l-.342-.042q-1.062-.132-1.062-.972 0-.228.084-.414a.94.94 0 0 1 .246-.324q.162-.138.384-.21.228-.078.51-.078.246 0 .432.036.192.03.336.096.15.06.27.156.126.09.246.204l-.51.522q-.15-.15-.342-.234a.9.9 0 0 0-.384-.09q-.228 0-.324.072a.23.23 0 0 0-.096.192q0 .126.066.198.072.066.264.096l.354.048q1.038.138 1.038.948a.9.9 0 0 1-.096.42q-.096.192-.276.336a1.3 1.3 0 0 1-.426.216 1.8 1.8 0 0 1-.552.078'
    />
    <path
      fill='#414652'
      d='M10.064 6.728q-.184.352-.664.352t-.664-.352-.184-.992V4.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q0 .64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.776 7.336q.528.76 1.624.76 1.095 0 1.624-.76.528-.76.528-2.128t-.528-2.128T9.4 2.32t-1.624.76-.528 2.128.528 2.128m-4.82-.304V8h3.887v-.968H5.66V2.416H3.82l-1.336 1.76.768.6 1.136-1.488h.072v3.744z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M2.955 8v-.968H4.46V3.288h-.072L3.251 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM9.4 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128T9.4 2.32t1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992T9.4 3.336t-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatility101sIcon);
export default ForwardRef;
