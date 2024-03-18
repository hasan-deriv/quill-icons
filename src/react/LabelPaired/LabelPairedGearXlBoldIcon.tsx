import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearXlBoldIcon = (
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
      <path d='M12 6c.797 0 1.547.094 2.297.234.375.094 1.031.282 1.406.938.094.187.14.375.188.562l.468 1.829c.047.234.516.515.797.421l1.782-.515c.187-.047.375-.094.562-.094.75 0 1.266.469 1.5.75a12 12 0 0 1 2.344 4.031c.14.375.281 1.031-.14 1.64-.095.188-.235.329-.376.47l-1.312 1.312c-.235.188-.235.703 0 .89l1.312 1.313c.14.14.281.282.375.469.375.61.235 1.266.14 1.64A12 12 0 0 1 21 25.923c-.234.281-.75.75-1.5.75-.187 0-.375-.047-.562-.094l-1.782-.562c-.281-.047-.75.187-.797.468l-.468 1.828a2.6 2.6 0 0 1-.188.563c-.375.656-1.031.844-1.406.938-.75.14-1.5.187-2.297.187s-1.594-.047-2.344-.187c-.375-.094-1.031-.282-1.406-.938-.094-.187-.14-.375-.187-.562l-.47-1.829c-.046-.28-.515-.515-.75-.468l-1.78.562c-.188.047-.422.047-.61.094-.75 0-1.266-.469-1.5-.75A12 12 0 0 1 .61 21.89c-.093-.375-.234-1.032.141-1.688.094-.14.234-.328.375-.469l1.36-1.265c.187-.188.187-.703 0-.89l-1.36-1.313c-.14-.141-.281-.282-.375-.47-.375-.608-.234-1.265-.14-1.64.515-1.5 1.312-2.86 2.343-4.031.235-.281.75-.75 1.5-.75.188 0 .422.047.61.094l1.78.515c.235.094.704-.187.75-.421l.47-1.829c.046-.187.093-.375.187-.562.375-.656 1.031-.844 1.406-.938C10.406 6.094 11.203 6 12 6m-1.781 2.438-.422 1.64c-.375 1.5-2.11 2.531-3.61 2.11l-1.64-.516c-.75.937-1.36 1.969-1.781 3.094l1.265 1.172c1.125 1.078 1.125 3.093 0 4.171l-1.265 1.172a11.3 11.3 0 0 0 1.78 3.094l1.641-.516c1.5-.422 3.235.61 3.61 2.11l.422 1.64a9.1 9.1 0 0 0 3.562 0l.375-1.64c.375-1.5 2.11-2.532 3.61-2.11l1.64.516c.75-.937 1.36-1.969 1.782-3.094l-1.22-1.172c-1.124-1.078-1.124-3.093 0-4.172l1.22-1.171a11.3 11.3 0 0 0-1.782-3.094l-1.64.515c-1.453.422-3.235-.609-3.61-2.109l-.375-1.64a9.1 9.1 0 0 0-3.562 0M9.75 18c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C10.172 16.5 9.75 17.203 9.75 18M12 22.5c-1.64 0-3.094-.844-3.937-2.25-.797-1.36-.797-3.094 0-4.5.843-1.36 2.296-2.25 3.937-2.25 1.594 0 3.047.89 3.89 2.25.797 1.406.797 3.14 0 4.5-.843 1.406-2.296 2.25-3.89 2.25' />
    </g>
    <defs>
      <clipPath id='71f8eaaf7ef77654e1015d81d5bda516__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearXlBoldIcon);
export default ForwardRef;
