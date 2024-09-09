import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftMdBoldIcon = (
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
      <path d='M4.281 10c0-1.094.907-2 2-2 1.094 0 2 .906 2 2 0 .344-.062.656-.219.938l.626 1.28.03-.03c.032-.032.063-.032.095-.063.406-.187.906-.125 1.28.125.063-.062.157-.094.25-.156a1.27 1.27 0 0 1 1.25.125c.032-.031.063-.031.063-.063.031 0 .063-.031.094-.031a1.22 1.22 0 0 1 1.656.594l.875 1.844a2.29 2.29 0 0 1-1.125 3.093l-2.219 1.063c-.468.218-1 .312-1.5.281h-.062a2.97 2.97 0 0 1-2.437-1.687l-.063-.188a1.63 1.63 0 0 1-.062-1.375l.218-.5c.032-.094.094-.219.157-.344L5.78 11.937c-.843-.218-1.5-1-1.5-1.937m1.907-.094a1.23 1.23 0 0 1 1.187.063c0-.594-.5-1.063-1.094-1.063a1.107 1.107 0 0 0-.781 1.875c.094-.375.313-.687.688-.875m2.625 6.219-.032-.031c.094.156 0 .343-.125.437-.187.063-.344 0-.437-.156l-.344-.75-.187.469a.73.73 0 0 0 0 .625l.093.187a2.03 2.03 0 0 0 1.657 1.157H9.5q.563.046 1.031-.188l2.25-1.062c.688-.313.969-1.157.656-1.844l-.874-1.844c-.063-.156-.282-.219-.407-.156a.38.38 0 0 0-.156.156.55.55 0 0 1-.437.219.49.49 0 0 1-.407-.25c-.062-.156-.25-.219-.406-.156a.42.42 0 0 0-.187.218c-.032.188-.188.375-.407.375-.187.031-.375-.094-.469-.25l-.062-.156c-.062-.156-.281-.187-.406-.125-.094.031-.156.094-.188.219a.41.41 0 0 1-.406.344.44.44 0 0 1-.469-.25l-.781-1.626L7 10.845c-.094-.094-.281-.156-.406-.094a.314.314 0 0 0-.157.344l.375.844zM3.436 5A.447.447 0 0 0 3 5.438v13.156c0 .218.188.437.438.437s.437-.218.437-.437V5.437A.447.447 0 0 0 3.438 5' />
    </g>
    <defs>
      <clipPath id='c658944226a3aeb25443300fef91efe3__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftMdBoldIcon);
export default ForwardRef;
