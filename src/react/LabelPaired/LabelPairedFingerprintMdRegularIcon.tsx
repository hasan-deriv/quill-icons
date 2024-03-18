import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintMdRegularIcon = (
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
      <path d='M1 12v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V12c0-4.406 3.563-8 8-8 2.5 0 4.75 1.156 6.219 2.969a.536.536 0 0 1-.094.718c-.219.157-.531.125-.687-.093C12.156 6.03 10.188 5 8 5c-3.875 0-7 3.156-7 7m14.688-2.125c.187.688.312 1.406.312 2.125v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V12a6.1 6.1 0 0 0-.281-1.844c-.063-.281.094-.562.375-.625a.5.5 0 0 1 .594.344M8 6.5h-.031c3.062 0 5.5 2.469 5.5 5.5v.781c0 .938-.031 1.875-.156 2.813-.032.25-.25.406-.5.406a.493.493 0 0 1-.5-.562c.124-.876.187-1.75.187-2.657V12c0-2.469-2.031-4.5-4.5-4.5-.562 0-1.094.125-1.594.281-.187.094-.437.032-.593-.125-.22-.25-.157-.656.156-.75A5.5 5.5 0 0 1 8 6.5M4.531 8.469c.157.187.157.5-.031.687-.625.781-1 1.781-1 2.844v.781c0 .969-.125 1.938-.375 2.875a.47.47 0 0 1-.469.344.513.513 0 0 1-.5-.625 10.4 10.4 0 0 0 .344-2.594V12c0-1.344.469-2.594 1.313-3.562.187-.22.53-.188.718.03M8 9a3 3 0 0 1 3 3v.781c0 1.313-.156 2.594-.406 3.844-.031.219-.25.375-.469.375a.488.488 0 0 1-.5-.594C9.875 15.22 10 14 10 12.781V12c0-1.094-.906-2-2-2-1.125 0-2 .906-2 2v.781c0 1.313-.187 2.625-.562 3.875a.47.47 0 0 1-.47.344c-.343 0-.562-.312-.468-.656.313-1.157.5-2.344.5-3.563V12a3 3 0 0 1 3-3m.5 3v.781c0 2.031-.375 4.031-1.125 5.938l-.187.468c-.094.282-.375.407-.625.282-.282-.094-.407-.375-.282-.625l.157-.5A15.3 15.3 0 0 0 7.5 12.78V12c0-.25.219-.5.5-.5.25 0 .5.25.5.5' />
    </g>
    <defs>
      <clipPath id='8073afffa11ff8094ab19e440dbbd025__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintMdRegularIcon);
export default ForwardRef;
