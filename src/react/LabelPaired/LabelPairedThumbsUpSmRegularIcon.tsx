import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpSmRegularIcon = (
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
      <path d='m7.875 5.992-.11.465a4.6 4.6 0 0 1-1.968 2.652l-.082.055c-.219.137-.41.328-.574.547a.437.437 0 0 1-.602.11c-.191-.165-.246-.438-.11-.63.22-.3.493-.546.821-.765l.082-.055a3.74 3.74 0 0 0 1.586-2.16l.11-.438c.245-.82 1.066-1.312 1.886-1.093.82.246 1.313 1.066 1.094 1.886l-.137.465c-.11.383-.246.739-.41 1.094h2.789c.957 0 1.75.793 1.75 1.75 0 .492-.219.93-.52 1.258q.082.246.082.492c0 .52-.246.984-.574 1.313.082.19.137.437.137.656a1.77 1.77 0 0 1-.875 1.531c0 .984-.793 1.75-1.75 1.75H8.04a3.07 3.07 0 0 1-1.696-.492l-1.067-.711c-.328-.246-.629-.52-.847-.875a.42.42 0 0 1 .136-.602.42.42 0 0 1 .602.137c.164.246.355.438.602.602l1.066.71c.355.247.766.356 1.203.356H10.5a.88.88 0 0 0 .875-.875c0-.055-.027-.11-.027-.164a.437.437 0 0 1 .3-.52.89.89 0 0 0 .602-.82.88.88 0 0 0-.191-.547.41.41 0 0 1-.082-.355.42.42 0 0 1 .218-.301.84.84 0 0 0 .492-.766.76.76 0 0 0-.136-.437.43.43 0 0 1 .164-.574.9.9 0 0 0 .41-.739.88.88 0 0 0-.875-.875H8.723c-.164 0-.301-.109-.383-.246a.42.42 0 0 1 0-.437c.3-.465.547-1.012.683-1.559l.137-.437a.684.684 0 0 0-.465-.82.684.684 0 0 0-.82.464m-7 3.883V16h1.75V9.875zm-.875 0C0 9.41.383 9 .875 9h1.75a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 16z' />
    </g>
    <defs>
      <clipPath id='6ea606120a0167a96609dd60873198fa__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpSmRegularIcon);
export default ForwardRef;
