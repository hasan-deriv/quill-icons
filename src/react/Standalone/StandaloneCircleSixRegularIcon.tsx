import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleSixRegularIcon = (
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
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m1.719-14.805q.351.469-.04.899L16.157 14q1.523.078 2.54 1.133 1.015 1.054 1.054 2.617-.038 1.602-1.094 2.656Q17.602 21.461 16 21.5q-1.602-.038-2.656-1.094-1.055-1.054-1.094-2.656.04-1.836 1.328-3.086l3.242-3.008q.469-.351.899.04M16 15.25q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSixRegularIcon);
export default ForwardRef;
