import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksBmwIcon = (
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
    <g clipPath='url(#544e268b78ec5aaccd446d422bfd0639__a)'>
      <path
        fill='#0E0E0E'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16 31c8.284 0 15-6.716 15-15S24.284 1 16 1 1 7.716 1 16s6.716 15 15 15m0 1c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='m16.3 5.175.906-1.992.06-.181v.18l.121 2.657c.258 0 .516.045.811.095l.155.026-.12-3.864c-.212-.03-.438-.045-.665-.06a9 9 0 0 1-.664-.06l-.845 2.173-.06.181-.06-.181-.846-2.174c-.423 0-.906.06-1.328.121l-.121 3.864c.302-.06.664-.12.966-.12l.12-2.657v-.181l.061.18.906 1.993zM23.666 9.281c.242.242.544.604.725.845l3.26-2.053c-.09-.09-.196-.226-.302-.362a4 4 0 0 0-.301-.362l-2.053 1.328-.121.121.12-.181.906-1.811-.664-.665-1.811.906-.181.12.12-.12 1.329-2.053c-.242-.18-.483-.362-.785-.604l-2.053 3.2c.12.091.272.212.423.333.15.12.302.241.422.332l1.933-1.027.12-.06-.12.12z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M9.478 6.564c.483.604.18 1.208-.302 1.75-.725.725-1.087 1.088-2.053 2.114L4.346 7.832c.15-.181.332-.393.513-.604.18-.211.362-.423.513-.604 1.026-1.147 1.389-1.449 1.872-1.51.241-.06.543 0 .724.182.423.302.362.785.302.966v.06h.06c.423-.12.846-.06 1.148.242m-2.536-.423c-.242.242-.845.846-1.389 1.51l.544.483s1.086-1.147 1.388-1.45c.121-.12.242-.301.181-.482-.06-.181-.241-.302-.422-.242-.121 0-.242.121-.302.181m1.087 1.087c-.363.362-1.39 1.45-1.39 1.45l.544.603c0-.03.333-.378.673-.734.325-.34.657-.687.716-.775q.035-.067.086-.138c.056-.082.118-.171.156-.285.06-.181 0-.302-.121-.362a.39.39 0 0 0-.363 0c-.06 0-.18.12-.301.241'
        clipRule='evenodd'
      />
      <path
        fill='#0166B1'
        d='M16 16V6.52c-5.253 0-9.48 4.288-9.48 9.48zM16 25.48A9.457 9.457 0 0 0 25.48 16H16z'
      />
      <path
        fill='#fff'
        d='M16 16h9.48c0-5.193-4.227-9.48-9.48-9.48zM6.52 16A9.457 9.457 0 0 0 16 25.48V16z'
      />
    </g>
    <defs>
      <clipPath id='544e268b78ec5aaccd446d422bfd0639__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBmwIcon);
export default ForwardRef;
