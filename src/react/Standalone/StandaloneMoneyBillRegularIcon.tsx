import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMoneyBillRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M23.5 10.25q.039 1.055.742 1.758.704.703 1.758.742V11.5q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 0H9.75q-.038 1.602-1.094 2.656Q7.602 13.961 6 14v5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656h12.5q.038-1.602 1.094-2.656Q24.398 19.039 26 19v-5q-1.602-.039-2.656-1.094-1.055-1.054-1.094-2.656M6 21.5q0 .547.352.898.35.352.898.352H8.5q-.039-1.055-.742-1.758T6 20.25zm20-1.25q-1.055.039-1.758.742-.703.704-.742 1.758h1.25q.547 0 .898-.352.352-.35.352-.898zm-18.75-10q-.547 0-.898.352Q6 10.952 6 11.5v1.25q1.055-.039 1.758-.742T8.5 10.25zm-2.5 1.25q.039-1.055.742-1.758T7.25 9h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm13.75 5q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.25 0q0-1.015.508-1.875A3.759 3.759 0 0 1 16 12.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.76 3.76 0 0 1-3.242-1.875 3.6 3.6 0 0 1-.508-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoneyBillRegularIcon);
export default ForwardRef;
