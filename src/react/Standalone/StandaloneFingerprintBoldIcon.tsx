import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFingerprintBoldIcon = (
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
    <path d='M7.875 16.5v1.563c0 .546-.43.937-.937.937C6.39 19 6 18.61 6 18.063V16.5c0-5.508 4.453-10 10-10 3.008 0 5.742 1.367 7.578 3.516a.974.974 0 0 1-.117 1.328.974.974 0 0 1-1.328-.117C20.648 9.507 18.46 8.375 16 8.375c-4.492 0-8.125 3.672-8.125 8.125m17.89-2.031c.157.664.235 1.328.235 2.031v1.602a.95.95 0 0 1-.937.937.925.925 0 0 1-.938-.937v-1.563c0-.586-.078-1.172-.195-1.719-.117-.468.234-.976.742-1.093.508-.118.976.234 1.094.742M16 9.625c3.79 0 6.875 3.086 6.875 6.875v.977a30 30 0 0 1-.195 3.242.93.93 0 0 1-.938.781c-.547 0-1.015-.508-.937-1.055.117-.976.195-1.953.195-2.968V16.5c0-2.734-2.266-5-5-5a5 5 0 0 0-1.328.195c-.39.117-.86 0-1.133-.312-.43-.469-.273-1.211.313-1.406A6.5 6.5 0 0 1 16 9.625m-4.14 2.695c.312.39.312.938 0 1.328A5.1 5.1 0 0 0 11 16.5v.977c0 1.132-.156 2.265-.39 3.359-.079.39-.47.664-.86.664a.97.97 0 0 1-.937-1.21c.195-.9.312-1.837.312-2.813V16.5c0-1.562.508-3.047 1.406-4.18.352-.43.977-.39 1.328 0m7.89 4.18v.977c0 1.562-.156 3.125-.469 4.609a.836.836 0 0 1-.82.664.878.878 0 0 1-.86-1.055c.274-1.367.43-2.773.43-4.218V16.5c0-1.094-.937-2.031-2.031-2.031a2.04 2.04 0 0 0-2.031 2.031v.977c0 1.601-.235 3.164-.625 4.687a.845.845 0 0 1-.82.586c-.586 0-.977-.547-.82-1.133.35-1.328.546-2.734.546-4.14V16.5a3.751 3.751 0 0 1 7.5 0M16 15.563a.95.95 0 0 1 .938.937v.977c0 2.578-.508 5.117-1.407 7.539l-.234.586c-.195.468-.742.742-1.211.546s-.742-.742-.547-1.21l.234-.586a18.8 18.8 0 0 0 1.29-6.875V16.5c0-.508.39-.937.937-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFingerprintBoldIcon);
export default ForwardRef;
