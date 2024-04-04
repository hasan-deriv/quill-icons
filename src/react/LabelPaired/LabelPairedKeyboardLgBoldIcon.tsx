import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 9.875a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625v-10c0-.312-.312-.625-.625-.625zm-2.5.625C.25 9.133 1.344 8 2.75 8h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zM7.125 18h8.75c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625h-8.75a.617.617 0 0 1-.625-.625v-.625c0-.312.273-.625.625-.625m-2.812-2.812c0-.313.273-.626.625-.626h.625c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.625-.625zm.625-3.75h.625c.312 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.625-.624v-.626c0-.312.273-.624.625-.624m2.5 3.75c0-.313.273-.626.625-.626h.624c.313 0 .626.313.626.626v.624a.64.64 0 0 1-.626.626h-.624a.617.617 0 0 1-.626-.625zm.625-3.75h.624c.313 0 .626.312.626.624v.626a.64.64 0 0 1-.626.624h-.624a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.625-.624m2.5 3.75c0-.313.273-.626.624-.626h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.624-.625zm.624-3.75h.626c.312 0 .624.312.624.624v.626a.64.64 0 0 1-.624.624h-.626a.617.617 0 0 1-.624-.624v-.626c0-.312.273-.624.624-.624m2.5 3.75c0-.313.274-.626.626-.626h.624c.313 0 .626.313.626.626v.624a.64.64 0 0 1-.626.626h-.624a.617.617 0 0 1-.626-.625zm.626-3.75h.624c.313 0 .626.312.626.624v.626a.64.64 0 0 1-.626.624h-.624a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.626-.624m2.5 3.75c0-.313.273-.626.625-.626h.625c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.625-.625zm.625-3.75h.625c.312 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.625-.624v-.626c0-.312.273-.624.625-.624' />
    </g>
    <defs>
      <clipPath id='720143d97081aa36ecf3092429a7761a__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardLgBoldIcon);
export default ForwardRef;
