import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.902 15.508q.219.574.793.465.575-.219.465-.793l-.11-.465a7 7 0 0 0-.683-1.559.42.42 0 0 1-.027-.437.43.43 0 0 1 .383-.219h3.527a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629q-.027-.492-.41-.738-.3-.246-.137-.575a.87.87 0 0 0 .11-.437q-.029-.547-.465-.793a.41.41 0 0 1-.246-.273.55.55 0 0 1 .082-.383.76.76 0 0 0 .191-.52q-.027-.629-.602-.847-.328-.138-.3-.493a.6.6 0 0 0 .027-.191.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246H8.066q-.683 0-1.23.355l-1.04.711a2.1 2.1 0 0 0-.628.63q-.246.3-.602.109-.3-.246-.136-.602.355-.52.875-.875l1.039-.683a3.04 3.04 0 0 1 1.695-.52H10.5q.738.027 1.23.52.493.492.52 1.23v.027q.82.493.875 1.504 0 .355-.137.684.547.492.575 1.285 0 .273-.083.52.493.492.52 1.23-.027.738-.52 1.23-.492.493-1.23.52H9.46q.275.547.438 1.121l.11.438q.165.628-.137 1.175a1.66 1.66 0 0 1-.93.711q-.628.165-1.175-.136-.52-.3-.711-.93l-.137-.465a3.7 3.7 0 0 0-1.586-2.16l-.082-.055.219-.328-.219.328a2.45 2.45 0 0 1-.793-.765q-.22-.356.11-.602.327-.192.601.11.219.327.547.519l.082.055q1.503.985 1.969 2.68zM.875 13.375h1.75V7.25H.875zm-.875 0V7.25q0-.383.246-.629a.85.85 0 0 1 .629-.246h1.75q.383 0 .629.246a.85.85 0 0 1 .246.629v6.125a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246H.875a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629' />
    </g>
    <defs>
      <clipPath id='b8f06770fe9d53d2e648307fe0c00da8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownSmRegularIcon);
export default ForwardRef;
