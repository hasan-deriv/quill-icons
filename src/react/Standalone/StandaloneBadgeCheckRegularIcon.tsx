import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBadgeCheckRegularIcon = (
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
    <path d='M13.46 9.273v.04q-.272.39-.741.273-1.602-.43-2.89.742-1.173 1.29-.743 2.89.117.469-.313.743-1.444.78-1.523 2.539.078 1.758 1.563 2.578.39.234.273.703-.43 1.603.742 2.89 1.29 1.173 2.89.743.469-.117.743.313.78 1.444 2.539 1.523 1.758-.078 2.578-1.562.234-.39.703-.274 1.603.43 2.89-.742 1.173-1.29.743-2.89-.117-.469.313-.743 1.444-.78 1.523-2.539-.078-1.758-1.562-2.54-.39-.272-.274-.741.43-1.602-.742-2.89-1.29-1.173-2.89-.743-.469.117-.743-.313Q17.76 7.83 16 7.75q-1.758.078-2.54 1.523M16 6.5q2.187.078 3.398 1.797 2.07-.352 3.672 1.133 1.485 1.6 1.133 3.672Q25.922 14.312 26 16.5q-.078 2.187-1.797 3.398.352 2.07-1.133 3.672-1.6 1.485-3.672 1.133Q18.188 26.422 16 26.5q-2.187-.078-3.398-1.797-2.07.352-3.672-1.133-1.484-1.6-1.133-3.672Q6.078 18.688 6 16.5q.078-2.187 1.797-3.398-.351-2.07 1.133-3.672 1.6-1.485 3.672-1.133Q13.812 6.578 16 6.5m4.18 7.93-5 5q-.43.39-.86 0l-2.5-2.5q-.39-.43 0-.86.43-.39.86 0l2.07 2.032 4.57-4.532q.43-.39.86 0 .39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBadgeCheckRegularIcon);
export default ForwardRef;
