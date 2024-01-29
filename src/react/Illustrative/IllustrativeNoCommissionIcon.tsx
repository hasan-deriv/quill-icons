import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeNoCommissionIcon = (
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
    <g>
      <path d='M24.165 15.693a1 1 0 0 1-.133-.5l-.02-1.686a2.41 2.41 0 0 0-1.167-2.02l-1.453-.86a1 1 0 0 1-.367-.367l-.86-1.453a2.39 2.39 0 0 0-2.02-1.167l-1.693-.02a1 1 0 0 1-.5-.133l-1.474-.827a2.38 2.38 0 0 0-2.333 0l-1.473.827a1 1 0 0 1-.5.133l-1.687.02c-.827.013-1.6.46-2.02 1.167l-.86 1.453c-.087.153-.22.28-.367.367l-1.453.86a2.39 2.39 0 0 0-1.167 2.02l-.02 1.693c0 .173-.046.347-.133.5l-.827 1.473a2.38 2.38 0 0 0 0 2.334l.827 1.473c.087.153.133.327.133.5l.02 1.687c.014.826.46 1.6 1.167 2.02l1.453.86c.154.086.28.22.367.366l.86 1.454a2.39 2.39 0 0 0 2.02 1.166l1.693.02c.174 0 .347.047.5.134l1.474.826a2.41 2.41 0 0 0 2.333 0l1.473-.826c.154-.087.327-.134.5-.134l1.687-.02c.827-.013 1.6-.46 2.02-1.166l.86-1.454c.087-.153.22-.28.367-.366l1.453-.86a2.39 2.39 0 0 0 1.167-2.02l.02-1.694c0-.173.046-.346.133-.5l.827-1.473a2.38 2.38 0 0 0 0-2.333zm-.333 3.16-.827 1.474c-.193.346-.3.74-.307 1.14l-.02 1.686c0 .367-.2.707-.513.894l-1.453.86c-.34.2-.634.493-.834.833l-.86 1.453a1.05 1.05 0 0 1-.893.514l-1.687.02c-.4 0-.793.113-1.14.306l-1.473.827c-.32.18-.713.18-1.033 0l-1.474-.827a2.4 2.4 0 0 0-1.14-.306l-1.686-.02c-.367 0-.707-.2-.894-.514l-.86-1.453c-.2-.34-.493-.633-.833-.833l-1.453-.86a1.05 1.05 0 0 1-.514-.894l-.02-1.686c0-.4-.113-.794-.306-1.14l-.827-1.474c-.18-.32-.18-.713 0-1.033l.827-1.473c.193-.347.3-.74.306-1.14l.02-1.687c0-.367.2-.707.514-.893l1.453-.86c.34-.2.633-.494.833-.834l.86-1.453c.187-.313.527-.513.894-.513l1.686-.02c.4 0 .794-.114 1.14-.307l1.474-.827c.16-.086.34-.133.513-.133s.36.047.513.133l1.474.827c.346.193.74.3 1.14.307l1.686.02c.367 0 .707.2.894.513l.86 1.453c.2.34.493.634.833.834l1.453.86c.314.186.514.526.514.893l.02 1.687c0 .4.113.793.306 1.14l.827 1.473c.18.32.18.713 0 1.033z' />
      <path d='m17.232 13.46-8.8 8.8a.664.664 0 0 0 .473 1.133c.173 0 .34-.066.473-.193l8.8-8.8a.664.664 0 1 0-.94-.94zM16.238 19.133a2.14 2.14 0 0 0-2.133 2.134 2.14 2.14 0 0 0 2.133 2.133 2.14 2.14 0 0 0 2.134-2.133 2.14 2.14 0 0 0-2.134-2.134m0 2.934c-.44 0-.8-.36-.8-.8s.36-.8.8-.8.8.36.8.8-.36.8-.8.8M10.372 17.533a2.14 2.14 0 0 0 2.133-2.133 2.14 2.14 0 0 0-2.133-2.133A2.14 2.14 0 0 0 8.238 15.4a2.14 2.14 0 0 0 2.134 2.133m0-2.933c.44 0 .8.36.8.8s-.36.8-.8.8-.8-.36-.8-.8.36-.8.8-.8M25.972 1.333a4.34 4.34 0 0 0-4.334 4.334A4.34 4.34 0 0 0 25.972 10a4.34 4.34 0 0 0 4.333-4.333 4.34 4.34 0 0 0-4.333-4.334m0 1.334c.586 0 1.126.173 1.593.466L23.438 7.26a2.96 2.96 0 0 1-.466-1.593c0-1.654 1.346-3 3-3m0 6a2.97 2.97 0 0 1-1.594-.467l4.127-4.127c.293.46.467 1.007.467 1.594 0 1.653-1.347 3-3 3' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeNoCommissionIcon);
export default ForwardRef;
