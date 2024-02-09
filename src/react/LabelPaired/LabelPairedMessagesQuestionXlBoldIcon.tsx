import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 8.25q-1.03.095-1.125 1.125v8.25q.095 1.032 1.125 1.125h2.25q1.032.094 1.125 1.125v.89l2.766-1.828q.28-.187.609-.187h6q1.032-.093 1.125-1.125v-8.25q-.093-1.03-1.125-1.125zM0 9.375q.047-1.454.984-2.39.937-.939 2.391-.985h12.75q1.454.047 2.39.984.939.938.985 2.391v8.25q-.047 1.454-.984 2.39-.937.939-2.391.985h-5.672l-4.219 2.813q-.563.328-1.125.046a1.17 1.17 0 0 1-.609-.984V21H3.375q-1.454-.047-2.39-.984-.939-.937-.985-2.391zM12 22.5h2.25v1.125q.095 1.032 1.125 1.125h4.5q.328 0 .61.188l2.765 1.828v-.891q.094-1.03 1.125-1.125h2.25q1.032-.093 1.125-1.125v-8.25q-.093-1.03-1.125-1.125H21V12h5.625q1.454.047 2.39.984.939.938.985 2.391v8.25q-.047 1.454-.984 2.39-.937.939-2.391.985H25.5v1.875a1.17 1.17 0 0 1-.61.984q-.562.282-1.124-.047L19.546 27h-4.171q-1.454-.047-2.39-.984-.939-.937-.985-2.391zm-5.062-12q.469-1.125 1.687-1.219h1.969a2.26 2.26 0 0 1 1.453.61q.562.609.562 1.453 0 1.172-1.03 1.781l-1.079.61v.046q-.047.657-.75.75-.703-.093-.75-.75v-.469q0-.421.375-.656l1.453-.844a.485.485 0 0 0 .281-.468q-.046-.515-.515-.563H8.625a.42.42 0 0 0-.281.235v.046q-.328.61-.985.422-.609-.281-.421-.937zm1.734 6.188q0-.61.515-.985.563-.328 1.126 0 .515.375.515.985 0 .609-.515.984-.563.329-1.126 0-.515-.375-.515-.985' />
    </g>
    <defs>
      <clipPath id='84ed06c2e231f899abfd9240fa12d24e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionXlBoldIcon);
export default ForwardRef;
