import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLifeRingRegularIcon = (
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
    <path d='m21.742 23.102-3.555-3.555q-.937.664-2.187.703-1.25-.039-2.187-.703l-3.555 3.555Q12.64 25.172 16 25.25q3.36-.078 5.742-2.148m.86-.86q2.07-2.382 2.148-5.742-.078-3.36-2.148-5.742l-3.555 3.555q.664.937.703 2.187-.039 1.25-.703 2.188zm.898.86.43.468q.39.43 0 .86-.43.39-.86 0l-.468-.43Q19.906 26.422 16 26.5q-3.906-.078-6.602-2.5l-.468.43q-.43.39-.86 0-.39-.43 0-.86l.43-.468Q6.078 20.367 6 16.5q.078-3.867 2.5-6.602l-.43-.468q-.39-.43 0-.86.43-.39.86 0l.468.43Q12.133 6.578 16 6.5q3.867.078 6.602 2.5l.468-.43q.43-.39.86 0 .39.43 0 .86l-.43.468q2.422 2.696 2.5 6.602-.078 3.906-2.5 6.602M21.742 9.898Q19.36 7.828 16 7.75q-3.36.078-5.742 2.148l3.555 3.555q.937-.664 2.187-.703 1.25.039 2.188.703zm-8.789 8.79q-.664-.938-.703-2.188.039-1.25.703-2.187l-3.555-3.555Q7.328 13.14 7.25 16.5q.078 3.36 2.148 5.742zM13.5 16.5q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLifeRingRegularIcon);
export default ForwardRef;
