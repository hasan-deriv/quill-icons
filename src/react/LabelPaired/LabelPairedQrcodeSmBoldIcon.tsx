import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 5.938H1.688v2.625h2.625zM1.688 4.625h2.625q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H1.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93V5.938q.027-.547.383-.93.382-.356.93-.383m2.625 8.313H1.688v2.624h2.625zm-2.625-1.313h2.625q.546.027.93.383.355.383.382.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H1.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93v-2.624q.027-.548.383-.93.382-.356.93-.383m7-5.687v2.625h2.624V5.937zm-1.313 0q.027-.547.383-.93.382-.356.93-.383h2.624q.548.027.93.383.356.383.383.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H8.689a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zM2.344 7.03q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H2.78q-.41-.027-.437-.437zm.437 6.563h.438q.41.027.437.437v.438q-.027.41-.437.437H2.78q-.41-.027-.437-.437v-.438q.027-.41.437-.437M9.344 7.03q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H9.78q-.41-.027-.437-.437zm-1.969 5.032q.027-.411.438-.438h1.75q.41.027.437.438.027.41.438.437h.874q.411-.027.438-.437.027-.411.438-.438.41.027.437.438v2.624q-.027.411-.437.438h-1.75q-.411-.027-.438-.437-.027-.411-.437-.438-.411.027-.438.438v1.75q-.027.41-.437.437h-.876q-.41-.027-.437-.437zM10.438 16q.41.027.437.438-.027.41-.437.437-.411-.027-.438-.437.027-.411.438-.438m1.75 0q.41.027.437.438-.027.41-.437.437-.411-.027-.438-.437.027-.411.438-.438' />
    </g>
    <defs>
      <clipPath id='746c350bb665bfe2d2a13450c0d43dca__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeSmBoldIcon);
export default ForwardRef;
