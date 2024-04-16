import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.844 5.5c-.938.031-1.813.531-2.281 1.344a2.626 2.626 0 0 0 2.28 3.937c.938 0 1.813-.5 2.282-1.312a2.63 2.63 0 0 0 0-2.625C15.656 6.03 14.781 5.5 13.844 5.5m2.656 5.844a4.17 4.17 0 0 1-2.656.937 4.1 4.1 0 0 1-3.313-1.687l-1.969 1.969a4.1 4.1 0 0 1 1.688 3.312c0 1-.344 1.938-.937 2.625h6c.656 0 1.187-.531 1.187-1.156zM6.125 18.5a2.62 2.62 0 0 0 2.625-2.625 2.63 2.63 0 0 0-1.656-2.437h-.032a2.3 2.3 0 0 0-.937-.188A2.62 2.62 0 0 0 3.5 15.875 2.6 2.6 0 0 0 6.125 18.5m1-6.625 2.719-2.719a3.5 3.5 0 0 1-.125-1C9.719 5.875 11.563 4 13.844 4S18 5.875 18 8.156v9.188C18 18.812 16.781 20 15.313 20H6.124A4.12 4.12 0 0 1 2 15.875a4.12 4.12 0 0 1 4.125-4.125c.344 0 .688.031 1 .125M4.844 7.656a.76.76 0 0 1 .75-.75H8.53c.313 0 .594.188.688.469a.72.72 0 0 1-.156.813l-2.907 2.906c-.281.281-.75.281-1.062 0a.775.775 0 0 1 0-1.063l1.625-1.625H5.594a.74.74 0 0 1-.75-.75m8.562-1.593v.593H14v-.593h.594v.593c.219 0 .437.063.594.219a.897.897 0 0 1 .062 1.281c.156.156.25.375.25.594 0 .5-.406.906-.906.906v.594H14v-.594h-.594v.594h-.594v-.594h-.593v-.594h.594V7.25h-.594v-.594h.594v-.593zm1.188 2.375h-1.188v.624h1.188a.336.336 0 0 0 .312-.312.336.336 0 0 0-.312-.312m0-1.188h-1.188v.594h1.188c.156 0 .312-.125.312-.282a.313.313 0 0 0-.312-.312M6.5 13.625v.313c.469.187.813.624.813 1.124v.094h-.75v-.094a.427.427 0 0 0-.438-.437.427.427 0 0 0-.437.438c0 .25.187.437.437.437.656 0 1.188.531 1.188 1.188 0 .5-.344.937-.813 1.125v.312h-.75v-.344a1.145 1.145 0 0 1-.781-1.093v-.125h.718v.125c0 .218.188.437.438.437s.438-.219.438-.437a.427.427 0 0 0-.438-.438c-.656 0-1.156-.531-1.156-1.187 0-.5.312-.97.781-1.126v-.312z' />
    </g>
    <defs>
      <clipPath id='62d048d50d8bfbd64792e724769aa60f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampMdBoldIcon);
export default ForwardRef;
