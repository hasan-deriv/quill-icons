import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUbuntuIcon = (
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
    <path d='M16 6.813q2.695.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883-.038 2.695-1.328 4.883a9.7 9.7 0 0 1-3.476 3.476Q18.695 26.15 16 26.187q-2.695-.038-4.883-1.328a9.7 9.7 0 0 1-3.476-3.476Q6.35 19.195 6.313 16.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q13.304 6.85 16 6.813m2.07 3.632q-.273.469-.117.938.117.468.547.781.469.234.977.117.468-.156.742-.586.234-.468.117-.937a1.18 1.18 0 0 0-.586-.781 1.32 1.32 0 0 0-.937-.118q-.469.118-.743.586M9.71 17.75q.547 0 .9-.352.35-.35.35-.898 0-.547-.35-.898-.352-.352-.9-.352-.507 0-.858.352-.352.35-.352.898 0 .547.352.898.35.352.859.352m1.134.117q.547 1.953 2.187 3.086l.938-1.562q-1.524-1.134-1.524-2.891t1.524-2.89l-.938-1.563q-1.641 1.133-2.187 3.086.624.585.625 1.367 0 .82-.625 1.367m8.906 5.156q.47-.273.586-.78.117-.47-.117-.938a1.37 1.37 0 0 0-.742-.586 1.4 1.4 0 0 0-.977.117 1.21 1.21 0 0 0-.547.781q-.156.469.117.938.274.468.742.586.469.117.938-.118m.04-2.734q1.365-1.367 1.562-3.437l-1.797-.04q-.274 1.875-1.758 2.774-1.524.86-3.281.156l-.899 1.563q1.407.625 2.461.547 1.055-.08 1.328-.196.155-.86.86-1.25.702-.39 1.523-.117m-.235-4.102 1.797-.039q-.196-2.07-1.602-3.437-.781.273-1.484-.117-.704-.39-.86-1.25h-.039q-.234-.117-1.289-.196-1.054-.078-2.46.547l.898 1.602q1.758-.742 3.28.117 1.485.899 1.759 2.774' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUbuntuIcon);
export default ForwardRef;
