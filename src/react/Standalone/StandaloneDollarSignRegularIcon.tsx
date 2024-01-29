import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneDollarSignRegularIcon = (
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
    <path d='M16.625 7.125v1.914q1.914.195 3.281.547.547.195.469.781-.195.547-.781.43-.977-.235-2.266-.43-1.29-.196-2.578-.117-1.25.117-2.07.625-.743.469-1.016 1.563-.117.858.117 1.328.273.468.86.898 1.367.743 3.515 1.211l.078.04q1.016.233 1.993.546a9.6 9.6 0 0 1 1.796.82 3.46 3.46 0 0 1 1.329 1.407q.429.898.195 2.109-.47 1.992-2.422 2.734-1.132.39-2.5.43v1.914q-.039.585-.625.625-.547-.039-.625-.625v-1.953q-.351 0-.742-.078a18 18 0 0 1-1.836-.39 12.3 12.3 0 0 1-2.031-.665q-.508-.273-.352-.82.313-.508.82-.352.938.39 1.875.664.976.235 1.72.352 2.304.312 3.827-.274 1.446-.586 1.68-1.797.117-.858-.117-1.328-.235-.508-.86-.898-1.367-.743-3.515-1.25h-.078a21 21 0 0 1-1.993-.586 8 8 0 0 1-1.796-.82 3.26 3.26 0 0 1-1.29-1.367q-.468-.939-.234-2.11.352-1.64 1.563-2.383A5.95 5.95 0 0 1 14.633 9h.742V7.125q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDollarSignRegularIcon);
export default ForwardRef;
