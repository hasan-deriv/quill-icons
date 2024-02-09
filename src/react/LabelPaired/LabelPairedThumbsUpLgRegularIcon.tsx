import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.29 8.703-.196.625q-.664 2.422-2.813 3.828l-.117.078a2.36 2.36 0 0 0-.781.743q-.39.429-.86.156-.468-.352-.156-.86A3.5 3.5 0 0 1 7.5 12.18l.117-.078q1.719-1.133 2.266-3.086l.195-.664q.273-.9 1.016-1.329.78-.429 1.68-.195.858.273 1.328 1.016.429.78.195 1.68l-.156.624a9.3 9.3 0 0 1-.625 1.602H17.5q1.055.039 1.758.742T20 14.25q-.039 1.055-.742 1.758.117.351.117.742-.04 1.133-.82 1.836.195.468.195.977-.078 1.445-1.25 2.148v.039q-.039 1.055-.742 1.758-.704.703-1.758.742h-3.516q-1.288 0-2.421-.742l-1.485-.977a4.8 4.8 0 0 1-1.25-1.25q-.234-.507.195-.86.508-.273.86.157.352.547.898.899l1.485 1.015q.78.508 1.757.508H15q.547 0 .898-.352.352-.35.352-.898a.9.9 0 0 0-.04-.273q-.038-.508.43-.704.82-.312.86-1.21a1.1 1.1 0 0 0-.273-.743.78.78 0 0 1-.118-.547.58.58 0 0 1 .352-.39q.625-.352.664-1.133 0-.352-.156-.625-.235-.469.195-.82.547-.352.586-1.055 0-.547-.352-.898Q18.048 13 17.5 13h-5.04a.61.61 0 0 1-.546-.312.6.6 0 0 1 .04-.626 10 10 0 0 0 .976-2.226l.156-.664q.156-.82-.664-1.133-.82-.156-1.133.664M1.25 14.25V23h2.5v-8.75zm-1.25 0q0-.547.352-.898Q.702 13 1.25 13h2.5q.547 0 .898.352.352.35.352.898V23q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352Q0 23.548 0 23z' />
    </g>
    <defs>
      <clipPath id='2a4c0fad9d827fb4f9ff40582cfc97a4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpLgRegularIcon);
export default ForwardRef;
