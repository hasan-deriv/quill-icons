import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePenLineBoldIcon = (
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
    <path d='m5.258 23.648.898-3.046a3.4 3.4 0 0 1 .86-1.446L18.89 7.281a2.523 2.523 0 0 1 3.554 0l1.524 1.524c.117.117.234.273.312.39a2.49 2.49 0 0 1-.312 3.164L12.094 24.234c-.04.04-.117.078-.156.157a4.2 4.2 0 0 1-1.29.703l-3.046.898-1.68.469a.8.8 0 0 1-.899-.234.8.8 0 0 1-.234-.899zm2.422-1.601-.625 2.148 2.148-.625.899-.273c.273-.078.468-.195.664-.39l8.945-8.946-2.422-2.422-8.945 8.945c-.04 0-.04.04-.078.078-.157.157-.235.352-.313.586zm6.758 2.578h11.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H14.438c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenLineBoldIcon);
export default ForwardRef;
