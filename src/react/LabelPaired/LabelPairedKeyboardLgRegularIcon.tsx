import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardLgRegularIcon = (
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
      <path d='M2.75 9.25c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zM.25 10.5C.25 9.133 1.344 8 2.75 8h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zm3.438.313h.624c.313 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.624-.624v-.626c0-.312.273-.624.624-.624m-.626 4.374c0-.312.274-.624.626-.624h.624c.313 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.624-.625zm.626 3.126h.624c.313 0 .625.312.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.624-.625v-.625c0-.313.273-.625.624-.625m3.125-6.875c0-.313.273-.626.625-.626h.625c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.625-.626zm.625 3.124h.625c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.625-.625v-.626c0-.312.274-.624.625-.624m3.125-3.124c0-.313.273-.626.624-.626h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.624-.626zm.624 3.124h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.624-.625v-.626c0-.312.273-.624.624-.624m3.126-3.124c0-.313.273-.626.624-.626h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.625.626h-.624a.617.617 0 0 1-.626-.626zm.624 3.124h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.625.626h-.624a.617.617 0 0 1-.626-.625v-.626c0-.312.274-.624.626-.624m3.126-3.124c0-.313.273-.626.625-.626h.625c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.625-.626zm.625 3.124h.625c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.625-.625v-.626c0-.312.273-.624.625-.624m-.625 4.376c0-.313.273-.625.625-.625h.625c.312 0 .625.312.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.625-.625zm-10.938-.313h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='8332e1a48d7a746786e0a702e648c13b__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardLgRegularIcon);
export default ForwardRef;
