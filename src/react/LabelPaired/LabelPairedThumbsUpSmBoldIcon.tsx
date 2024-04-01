import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpSmBoldIcon = (
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
      <path d='M8.832 4.707a1.963 1.963 0 0 1 1.367 2.434l-.164.547c-.082.3-.191.601-.328.875h2.543c.957 0 1.75.792 1.75 1.75 0 .492-.219.93-.52 1.257.055.164.082.328.082.52 0 .547-.273 1.066-.71 1.394.027.11.054.22.054.356 0 .547-.273 1.039-.656 1.367-.055.93-.82 1.695-1.75 1.695H7.82a3.1 3.1 0 0 1-1.695-.52l-1.695-1.12a.66.66 0 0 1-.164-.93.63.63 0 0 1 .902-.164l1.695 1.121c.274.191.602.3.957.3h2.68a.47.47 0 0 0 .438-.437c0-.054-.028-.082-.028-.136a.684.684 0 0 1 .383-.793c.164-.055.3-.22.3-.383a.42.42 0 0 0-.109-.274.7.7 0 0 1-.082-.656c.055-.219.246-.355.493-.41.19-.027.355-.219.355-.437 0-.11-.055-.192-.11-.274-.163-.164-.218-.383-.163-.601a.7.7 0 0 1 .41-.465.44.44 0 0 0 .3-.41.47.47 0 0 0-.437-.438H8.586a.64.64 0 0 1-.574-.355c-.11-.22-.11-.465.027-.657.328-.465.574-.984.738-1.531l.164-.547a.684.684 0 0 0-.464-.82.684.684 0 0 0-.82.465l-.137.547a3.9 3.9 0 0 1-.82 1.476L5.276 9.984a.653.653 0 0 1-.93.055.68.68 0 0 1-.027-.93l1.395-1.53a2.6 2.6 0 0 0 .547-.958l.136-.547a1.963 1.963 0 0 1 2.434-1.367M.875 9h1.75a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 16V9.875C0 9.41.383 9 .875 9' />
    </g>
    <defs>
      <clipPath id='5e45c75f6b9b305031bec328c0bf595a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpSmBoldIcon);
export default ForwardRef;
