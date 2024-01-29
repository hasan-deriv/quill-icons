import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialWhatsappBlackIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path d='m0 32 2.261-8.113a15.86 15.86 0 0 1-2.123-7.96C.138 7.143 7.288 0 16.073 0c4.262 0 8.265 1.658 11.267 4.667A15.8 15.8 0 0 1 32 15.935c0 8.785-7.15 15.928-15.935 15.928h-.008c-2.666 0-5.286-.673-7.616-1.94zm8.838-4.965.482.29a13.3 13.3 0 0 0 6.737 1.849h.008c7.295 0 13.238-5.936 13.238-13.239 0-3.537-1.375-6.86-3.873-9.365a13.14 13.14 0 0 0-9.365-3.881c-7.303 0-13.246 5.935-13.246 13.238 0 2.498.695 4.935 2.024 7.044l.313.504-1.336 4.881z' />
      <path
        fillRule='evenodd'
        d='M12.085 9.258c-.298-.665-.611-.68-.894-.688-.23-.008-.497-.008-.764-.008s-.695.1-1.062.497c-.366.397-1.39 1.36-1.39 3.323 0 1.956 1.428 3.85 1.627 4.118.199.267 2.758 4.415 6.799 6.011 3.361 1.33 4.049 1.062 4.774.994.734-.07 2.353-.963 2.69-1.895.328-.932.328-1.726.228-1.895-.099-.168-.366-.267-.764-.465-.397-.2-2.352-1.162-2.72-1.3-.366-.137-.633-.198-.893.2-.267.397-1.031 1.29-1.26 1.558-.23.267-.466.298-.863.1-.398-.2-1.681-.62-3.201-1.98-1.184-1.053-1.986-2.36-2.216-2.757-.229-.397-.023-.611.176-.81.176-.175.397-.466.596-.695.199-.23.267-.397.397-.665.13-.267.069-.496-.03-.695-.1-.198-.879-2.161-1.23-2.948'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SocialWhatsappBlackIcon);
export default ForwardRef;
