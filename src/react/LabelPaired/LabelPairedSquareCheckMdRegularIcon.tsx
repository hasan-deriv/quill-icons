import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm10.344 3.344-4 4q-.345.312-.688 0l-2-2q-.312-.345 0-.688.345-.312.688 0L6 13.281l3.656-3.625q.345-.312.688 0 .312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='c08cd351775f2e7225a04bff8592093c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckMdRegularIcon);
export default ForwardRef;
