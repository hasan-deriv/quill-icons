import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownXlBoldIcon = (
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
      <path d='M15.14 28.406c-1.78.516-3.656-.562-4.171-2.343l-.235-.938a4.4 4.4 0 0 0-.937-1.64l-2.39-2.626a1.16 1.16 0 0 1 .046-1.593 1.12 1.12 0 0 1 1.594.093l2.437 2.625c.657.703 1.125 1.594 1.407 2.532l.234.937c.188.61.797.938 1.406.797.61-.187.938-.797.797-1.406l-.281-.938a9 9 0 0 0-1.266-2.625c-.234-.328-.234-.797-.047-1.172.188-.375.563-.609.985-.609H21c.375 0 .75-.328.75-.75 0-.281-.234-.562-.516-.703-.328-.094-.609-.422-.703-.75-.093-.375 0-.75.282-1.031.093-.141.187-.282.187-.516a.75.75 0 0 0-.61-.703c-.421-.094-.75-.375-.843-.703a1.2 1.2 0 0 1 .14-1.125.72.72 0 0 0 .188-.469c0-.281-.234-.562-.516-.703-.515-.188-.797-.75-.656-1.313 0-.093.047-.14.047-.234 0-.375-.375-.75-.75-.75h-4.594c-.61 0-1.172.188-1.64.516l-2.907 1.922a1.05 1.05 0 0 1-1.546-.329c-.375-.515-.235-1.171.28-1.546L10.5 8.39a5.3 5.3 0 0 1 2.906-.891H18c1.594 0 2.906 1.313 3 2.906.656.563 1.125 1.406 1.125 2.344 0 .234-.047.422-.094.61.75.562 1.219 1.406 1.219 2.39 0 .328-.047.61-.14.89.515.563.89 1.313.89 2.11 0 1.688-1.36 3-3 3h-4.36q.352.773.563 1.547l.281.937c.516 1.782-.515 3.657-2.343 4.172M1.5 24A1.48 1.48 0 0 1 0 22.5V12c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5v10.5c0 .844-.703 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='064850929cdd7d97f133727abc04c2f4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownXlBoldIcon);
export default ForwardRef;
