import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.547-3.336v.383c.273.027.547.11.793.191.055 0 .11.028.164.028.3.109.492.437.41.738-.082.328-.41.492-.738.41-.028 0-.082-.027-.11-.027A4 4 0 0 0 7.492 9c-.383-.082-.793-.055-1.12.11-.302.109-.548.437-.22.656.274.164.602.246.903.355.082 0 .136.027.191.027.438.137.984.301 1.395.575.52.355.765.957.656 1.586-.11.601-.547 1.011-1.04 1.23a3 3 0 0 1-.71.164v.41c0 .328-.246.602-.574.602a.607.607 0 0 1-.602-.602v-.465c-.383-.109-.766-.218-1.176-.355a.58.58 0 0 1-.355-.738c.11-.328.437-.492.738-.383.082.027.137.055.219.082.3.082.601.191.93.246.464.082.847.027 1.093-.055.328-.136.465-.547.137-.765-.273-.164-.602-.274-.93-.356-.054-.027-.136-.027-.191-.054-.41-.11-.93-.274-1.313-.52-.546-.328-.793-.902-.683-1.531.11-.602.574-.985 1.066-1.203.137-.082.301-.11.465-.164v-.438c0-.328.274-.601.602-.601s.574.273.574.601' />
    </g>
    <defs>
      <clipPath id='421f3a0361424c57aec81152cec54671__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarSmBoldIcon);
export default ForwardRef;
