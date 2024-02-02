import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 8.625q.04 1.055.938 1.64.938.47 1.875 0 .897-.585.937-1.64-.04-1.055-.937-1.64-.937-.47-1.875 0-.9.585-.938 1.64m5 0q-.04 1.758-1.562 2.695-1.563.86-3.125 0-1.524-.937-1.563-2.695.039-1.758 1.563-2.695 1.562-.86 3.125 0 1.523.937 1.562 2.695m3.75 3.125q-1.406.04-2.148 1.25-.705 1.25 0 2.5.741 1.21 2.148 1.25 1.407-.04 2.148-1.25.705-1.25 0-2.5-.741-1.21-2.148-1.25m0 6.25a3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 8.75 14.25a3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 12.5 10.5q1.015 0 1.875.508a3.759 3.759 0 0 1 1.875 3.242 3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 12.5 18m-2.305 2.5q-1.601.038-2.734 1.094-1.094 1.054-1.211 2.656h12.5q-.117-1.602-1.21-2.656-1.134-1.055-2.735-1.094zm0-1.25h4.61q2.187.04 3.672 1.523Q19.96 22.258 20 24.445q-.078.977-1.055 1.055H6.055Q5.078 25.422 5 24.445q.04-2.187 1.523-3.672 1.485-1.484 3.672-1.523M20 6.75q-1.055.04-1.64.938-.47.938 0 1.875.585.898 1.64.937 1.055-.039 1.64-.937.47-.938 0-1.876-.585-.897-1.64-.937m0 5q-1.758-.04-2.695-1.562-.86-1.563 0-3.126Q18.242 5.54 20 5.5q1.758.039 2.695 1.563.86 1.562 0 3.125Q21.758 11.71 20 11.75m.625 2.5H17.5q0-.665-.156-1.25h3.281q1.875.039 3.086 1.29Q24.96 15.5 25 17.374q-.039.585-.625.625-.585-.039-.625-.625-.04-1.328-.898-2.227-.9-.858-2.227-.898m-13.125 0H4.375q-1.328.039-2.227.898-.858.9-.898 2.227-.039.585-.625.625-.585-.039-.625-.625.039-1.875 1.29-3.086Q2.5 13.04 4.374 13h3.281q-.156.585-.156 1.25' />
    </g>
    <defs>
      <clipPath id='9e3d152f55e7f21c84a8132a297b2c61__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersLgRegularIcon);
export default ForwardRef;
