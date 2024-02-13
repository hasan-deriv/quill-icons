import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeSmRegularIcon = (
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
      <path d='M4.313 5.5H1.688q-.411.027-.438.438v2.625q.027.41.438.437h2.625q.41-.027.437-.437V5.937q-.027-.41-.437-.437m-2.625-.875h2.625q.546.027.93.383.355.383.382.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H1.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93V5.938q.027-.547.383-.93.382-.356.93-.383M4.313 12.5H1.688q-.411.027-.438.438v2.624q.027.411.438.438h2.625q.41-.027.437-.437v-2.626q-.027-.41-.437-.437m-2.625-.875h2.625q.546.027.93.383.355.383.382.93v2.624a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.383H1.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.382-.93v-2.624q.027-.548.383-.93.382-.356.93-.383m7-6.125q-.411.027-.438.438v2.625q.027.41.438.437h2.624q.411-.027.438-.437V5.937q-.027-.41-.437-.437zm-1.313.438q.027-.547.383-.93.382-.356.93-.383h2.624q.548.027.93.383.356.383.383.93v2.625a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H8.689a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93zm0 6.125q.027-.411.438-.438h1.75q.41.027.437.438v1.859h1.75v-1.86q.027-.41.438-.437.41.027.437.438v2.296q-.027.411-.437.438H9.562q-.41-.027-.437-.438V12.5H8.25v4.156q-.027.411-.437.438-.411-.027-.438-.438zm-4.594-5.47h.438q.41.029.437.438v.438q-.027.41-.437.437H2.78q-.41-.027-.437-.437V7.03q.027-.41.437-.437m-.437 7.438q.027-.41.437-.437h.438q.41.027.437.437v.438q-.027.41-.437.437H2.78q-.41-.027-.437-.437zM9.78 6.594h.438q.41.027.437.437v.438q-.027.41-.437.437H9.78q-.41-.027-.437-.437V7.03q.027-.41.437-.437M9.125 16q.027-.41.438-.437H10q.41.027.438.437v.438q-.028.41-.438.437h-.437q-.411-.027-.438-.437zm2.625-.437h.438q.41.027.437.437v.438q-.027.41-.437.437h-.438q-.41-.027-.437-.437V16q.027-.41.437-.437' />
    </g>
    <defs>
      <clipPath id='6a3823e3be96563ce078606cc2f20498__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeSmRegularIcon);
export default ForwardRef;
