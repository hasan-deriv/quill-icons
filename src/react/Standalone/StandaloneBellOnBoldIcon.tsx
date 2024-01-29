import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellOnBoldIcon = (
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
    <path d='M16 6.5q.547 0 .898.352.352.35.352.898v.703q2.187.39 3.555 1.992 1.406 1.602 1.445 3.867v1.29a7.9 7.9 0 0 0 1.719 4.882l.586.743q.312.469.117.976a.99.99 0 0 1-.86.547H8.188a.99.99 0 0 1-.859-.547 1.01 1.01 0 0 1 .117-.976l.586-.743a7.9 7.9 0 0 0 1.719-4.882v-1.29q.04-2.265 1.445-3.867 1.368-1.6 3.555-1.992V7.75q0-.547.352-.898.35-.352.898-.352m0 3.75h-.312q-1.72.04-2.891 1.172-1.133 1.172-1.172 2.89v1.29q0 2.89-1.562 5.273h11.875q-1.524-2.382-1.563-5.273v-1.29q-.04-1.718-1.172-2.89-1.172-1.133-2.89-1.172zM18.5 24q0 1.015-.742 1.758-.742.742-1.758.742-1.015 0-1.758-.742Q13.5 25.016 13.5 24h5m-15-9.687q.078-.86.938-.938h3.125q.858.078.937.938-.078.858-.937.937H4.438q-.86-.079-.938-.937m20.938-.938h3.125q.858.078.937.938-.079.858-.937.937h-3.125q-.86-.079-.938-.937.078-.86.938-.938m2.421-6.055q.313.82-.43 1.29l-2.5 1.25q-.82.311-1.25-.43-.311-.82.391-1.25l2.5-1.25q.82-.313 1.29.39M5.57 8.61q-.703-.47-.39-1.29.43-.703 1.25-.39l2.5 1.25q.703.43.43 1.25-.47.703-1.29.43z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellOnBoldIcon);
export default ForwardRef;
