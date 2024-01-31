import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.82 10.813a16.3 16.3 0 0 0-2.11 2.46q-.82 1.25-1.21 2.227.39.976 1.21 2.227a16.3 16.3 0 0 0 2.11 2.46Q6.11 21.4 7.75 22.18q1.68.78 3.75.82 2.07-.04 3.75-.82a11.4 11.4 0 0 0 2.93-1.992 16.3 16.3 0 0 0 2.11-2.461q.82-1.25 1.21-2.227-.39-.976-1.21-2.227a16.3 16.3 0 0 0-2.11-2.46 11.4 11.4 0 0 0-2.93-1.993Q13.57 8.04 11.5 8q-2.07.04-3.75.82a11.4 11.4 0 0 0-2.93 1.992M11.5 6.75q2.383.04 4.258.938a12.8 12.8 0 0 1 3.281 2.226q1.368 1.29 2.266 2.656.898 1.368 1.367 2.461.195.469 0 .938-.469 1.094-1.367 2.46-.899 1.368-2.266 2.657a12.8 12.8 0 0 1-3.281 2.227q-1.876.898-4.258.937-2.383-.039-4.258-.937a12.8 12.8 0 0 1-3.281-2.227q-1.368-1.29-2.266-2.656-.898-1.368-1.328-2.461a1.17 1.17 0 0 1 0-.938q.43-1.094 1.328-2.46.899-1.368 2.266-2.657a12.8 12.8 0 0 1 3.281-2.226q1.875-.9 4.258-.938M7.75 15.5q0 1.015.508 1.875A3.759 3.759 0 0 0 11.5 19.25a3.76 3.76 0 0 0 3.242-1.875 3.6 3.6 0 0 0 .508-1.875 3.6 3.6 0 0 0-.508-1.875A3.759 3.759 0 0 0 11.5 11.75a3.76 3.76 0 0 0-3.242 1.875A3.6 3.6 0 0 0 7.75 15.5m8.75 0q0 1.368-.664 2.5A5.17 5.17 0 0 1 14 19.836a5 5 0 0 1-2.5.664 5 5 0 0 1-2.5-.664A5.17 5.17 0 0 1 7.164 18a4.85 4.85 0 0 1-.664-2.5q0-1.368.664-2.5A5.17 5.17 0 0 1 9 11.164a5 5 0 0 1 2.5-.664q1.328 0 2.5.664A5.17 5.17 0 0 1 15.836 13q.664 1.132.664 2.5' />
    </g>
    <defs>
      <clipPath id='0ab001e05470e659__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgRegularIcon);
export default ForwardRef;
