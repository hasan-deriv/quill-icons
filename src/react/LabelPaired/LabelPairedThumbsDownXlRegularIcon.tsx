import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 26.203c.188.61.797.938 1.406.797.61-.187.938-.797.797-1.406l-.234-.75c-.235-.985-.656-1.875-1.172-2.672a.72.72 0 0 1 0-.75c.14-.281.375-.422.656-.422H21c.797 0 1.5-.656 1.5-1.5 0-.516-.281-.984-.703-1.266-.328-.187-.469-.656-.281-.984.14-.234.234-.469.234-.75 0-.562-.328-1.078-.844-1.312a.73.73 0 0 1-.375-.516.71.71 0 0 1 .14-.61c.188-.28.329-.562.329-.937 0-.656-.469-1.219-1.031-1.406-.375-.14-.61-.516-.516-.89 0-.095.047-.188.047-.329 0-.797-.703-1.5-1.5-1.5h-4.219c-.75 0-1.453.234-2.062.656L9.89 10.875c-.422.281-.75.61-1.032 1.031-.234.375-.703.469-1.03.235-.376-.235-.47-.703-.235-1.032.375-.609.89-1.125 1.453-1.5l1.828-1.218a5.3 5.3 0 0 1 2.906-.891H18c1.64 0 3 1.36 3 3v.047c.89.515 1.5 1.5 1.5 2.578 0 .422-.094.844-.234 1.172.562.562.984 1.36.984 2.203 0 .328-.047.61-.14.89.515.563.89 1.313.89 2.11 0 1.688-1.36 3-3 3h-4.781c.281.656.515 1.266.703 1.922l.234.797c.375 1.406-.468 2.812-1.875 3.234-1.406.375-2.812-.469-3.234-1.875l-.188-.75a6.42 6.42 0 0 0-2.718-3.703L9 22.031l.375-.61-.375.61c-.562-.375-1.031-.797-1.406-1.312-.235-.375-.14-.844.187-1.078.328-.235.797-.141 1.032.187.28.375.609.703.984.938l.14.093a7.86 7.86 0 0 1 3.376 4.547zM1.5 22.5h3V12h-3zm-1.5 0V12c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5v10.5c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 22.5' />
    </g>
    <defs>
      <clipPath id='611d57c40d0d4551b66f72c9513630e2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownXlRegularIcon);
export default ForwardRef;
