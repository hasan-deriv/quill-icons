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
    <path d='M23.57 9.43c0 1.093-.586 2.03-1.484 2.578a3.08 3.08 0 0 1-2.969 0c-.898-.547-1.484-1.485-1.484-2.578a2.94 2.94 0 0 1 1.484-2.54 2.89 2.89 0 0 1 2.969 0 2.94 2.94 0 0 1 1.484 2.54m-12.304 6.484c0 1.055-.586 2.031-1.485 2.578-.898.508-2.031.508-2.969 0a3.02 3.02 0 0 1-1.445-2.578c0-1.055.547-2.031 1.446-2.539.937-.547 2.07-.547 2.968 0a2.94 2.94 0 0 1 1.485 2.54m-3.79 4.102h-.038a4.14 4.14 0 0 0 2.656-.313c.469.977 1.172 1.797 1.992 2.461a7.8 7.8 0 0 0 2.89 1.328c.235.04.508.078.743.117.039.938.351 1.836.937 2.54a9.6 9.6 0 0 1-5.547-1.602c-1.64-1.133-2.93-2.695-3.632-4.531m15.43 3.515c0 1.055-.586 2.032-1.484 2.578a3.08 3.08 0 0 1-2.969 0c-.898-.547-1.484-1.523-1.484-2.578s.586-2.031 1.484-2.539a2.89 2.89 0 0 1 2.969 0 2.94 2.94 0 0 1 1.484 2.54m-.312-3.281h-.04c.704-1.094 1.055-2.305 1.094-3.594.04-1.25-.234-2.5-.82-3.633.742-.468 1.367-1.171 1.68-1.992a9.66 9.66 0 0 1 1.68 5.82c-.118 2.07-.86 4.063-2.149 5.665a4.38 4.38 0 0 0-1.445-2.266M9.195 11.813c-.312-.079-.586-.079-.898-.079h-.313a9.8 9.8 0 0 1 3.946-3.828 9.56 9.56 0 0 1 5.39-1.133 3.85 3.85 0 0 0-.86 1.797c-.038.235-.077.47-.077.664-1.172.04-2.305.313-3.281.86-1.016.547-1.915 1.328-2.54 2.265-.43-.273-.898-.43-1.367-.546' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUbuntuIcon);
export default ForwardRef;
