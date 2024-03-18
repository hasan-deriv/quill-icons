import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.95 5.8c0 .766-.41 1.423-1.04 1.805a2.16 2.16 0 0 1-2.078 0c-.629-.382-1.039-1.039-1.039-1.804 0-.739.41-1.422 1.039-1.778a2.02 2.02 0 0 1 2.078 0 2.06 2.06 0 0 1 1.04 1.778m-8.614 4.54c0 .738-.41 1.422-1.04 1.805a2.16 2.16 0 0 1-2.077 0A2.11 2.11 0 0 1 .207 10.34c0-.738.383-1.422 1.012-1.777a2.02 2.02 0 0 1 2.078 0 2.06 2.06 0 0 1 1.039 1.777m-2.652 2.87h-.028a2.9 2.9 0 0 0 1.86-.218c.328.684.82 1.258 1.394 1.723a5.5 5.5 0 0 0 2.024.93c.164.027.355.054.52.082.026.656.245 1.285.655 1.777a6.7 6.7 0 0 1-3.882-1.121c-1.149-.793-2.051-1.887-2.543-3.172m10.8 2.462c0 .738-.41 1.422-1.039 1.805a2.16 2.16 0 0 1-2.078 0c-.629-.383-1.039-1.067-1.039-1.805s.41-1.422 1.04-1.777a2.02 2.02 0 0 1 2.077 0 2.06 2.06 0 0 1 1.04 1.777m-.218-2.297h-.028a4.85 4.85 0 0 0 .766-2.516 5.2 5.2 0 0 0-.574-2.543c.52-.328.957-.82 1.175-1.394a6.77 6.77 0 0 1 1.176 4.074 6.95 6.95 0 0 1-1.504 3.965 3.07 3.07 0 0 0-1.011-1.586m-9.38-5.906c-.218-.055-.41-.055-.628-.055h-.219a6.85 6.85 0 0 1 2.762-2.68 6.7 6.7 0 0 1 3.773-.793c-.3.356-.52.793-.601 1.258a3 3 0 0 0-.055.465c-.82.027-1.613.219-2.297.602-.71.382-1.34.93-1.777 1.586-.301-.192-.63-.301-.957-.383' />
    </g>
    <defs>
      <clipPath id='b5093897ddbe96f1a0728a15afc5d3c7__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuSmIcon);
export default ForwardRef;
