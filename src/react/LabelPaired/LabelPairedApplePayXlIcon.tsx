import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.438 13.453c.375-.422.609-.984.562-1.594-.516.047-1.125.329-1.5.75-.328.375-.61.985-.516 1.547.563.047 1.125-.281 1.454-.703m.515.797c.328.047 1.266.14 1.828.984-.047.047-1.078.657-1.078 1.922.047 1.5 1.313 1.969 1.36 1.969-.047.047-.235.75-.704 1.406-.421.61-.843 1.219-1.5 1.219-.656.047-.89-.375-1.64-.375s-.985.375-1.64.422c-.657 0-1.126-.656-1.548-1.266-.843-1.265-1.5-3.468-.656-5.015.469-.75 1.219-1.22 2.063-1.22.656 0 1.218.423 1.64.423.375 0 1.078-.516 1.875-.469m4.735-1.687h3.421c1.782 0 3 1.218 3 3 0 1.78-1.265 3-3.047 3h-1.968v3.14h-1.406zm1.406 1.171v3.657h1.64c1.22 0 1.922-.657 1.922-1.828s-.703-1.829-1.922-1.829zm7.594 8.016c-1.313 0-2.204-.75-2.25-1.969 0-1.172.89-1.828 2.578-1.922l1.734-.093v-.516c0-.75-.469-1.172-1.36-1.172-.703 0-1.218.375-1.312.938h-1.265c0-1.172 1.125-2.016 2.625-2.016 1.64 0 2.671.844 2.671 2.156v4.547h-1.312v-1.125c-.375.75-1.219 1.172-2.11 1.172m.375-1.078c.984 0 1.687-.61 1.687-1.453v-.516l-1.547.094c-.89.047-1.36.375-1.36.984 0 .516.47.89 1.22.89m4.828 3.515c-.094 0-.47 0-.563-.046v-1.078h.422c.656 0 .984-.235 1.219-.938l.14-.422-2.437-6.656h1.5l1.687 5.437 1.688-5.437H30l-2.531 6.984c-.563 1.64-1.219 2.157-2.578 2.157' />
    </g>
    <defs>
      <clipPath id='86101449c15c9e1c49785e7321425363__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayXlIcon);
export default ForwardRef;
