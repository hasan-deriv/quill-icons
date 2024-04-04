import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.625-3.812v.437c.313.031.625.125.906.219.063 0 .125.031.188.031.344.125.562.5.469.844-.094.375-.47.562-.844.469-.031 0-.094-.032-.125-.032-.219-.062-.438-.125-.656-.156-.438-.094-.907-.062-1.282.125-.343.125-.625.5-.25.75.313.188.688.281 1.032.406.093 0 .156.031.218.031.5.157 1.125.344 1.594.657.594.406.875 1.094.75 1.812-.125.688-.625 1.156-1.187 1.406-.25.094-.532.157-.813.188v.469c0 .375-.281.687-.656.687a.694.694 0 0 1-.688-.687v-.531c-.437-.126-.875-.25-1.343-.407a.66.66 0 0 1-.407-.844c.125-.374.5-.562.844-.437.094.031.156.063.25.094.344.094.688.219 1.063.281.53.094.968.031 1.25-.062.374-.157.53-.626.156-.876-.313-.187-.688-.312-1.063-.406-.062-.031-.156-.031-.219-.062-.468-.125-1.062-.313-1.5-.594-.625-.375-.906-1.031-.78-1.75.124-.687.656-1.125 1.218-1.375.156-.094.344-.125.531-.187v-.5c0-.376.313-.688.688-.688s.656.313.656.688' />
    </g>
    <defs>
      <clipPath id='90400e0975e86106d12942992b7b5801__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarMdBoldIcon);
export default ForwardRef;
