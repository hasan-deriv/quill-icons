import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleSortUpRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.838 1.172 4.375 1.172s2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm9.57-6.055c.287-.26.573-.26.86 0l3.75 3.75c.182.183.234.404.156.664a.719.719 0 0 1-.586.391h-7.5c-.26 0-.456-.13-.586-.39-.078-.261-.026-.482.156-.665l3.75-3.75ZM13.773 14h4.454L16 11.773 13.773 14Zm-1.953 4.805c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L16 21.227l3.32-3.282c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-3.75 3.75c-.287.26-.573.26-.86 0l-3.75-3.75Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSortUpRegularIcon);
export default ForwardRef;
