import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearSmBoldIcon = (
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
      <path d='M7 3.75c.465 0 .902.055 1.34.137.219.054.601.164.82.547.055.109.082.218.11.328l.273 1.066c.027.137.3.3.465.246l1.039-.3c.11-.028.219-.055.328-.055.438 0 .738.273.875.437a7 7 0 0 1 1.367 2.352c.082.219.164.601-.082.957-.055.11-.137.191-.219.273l-.765.766c-.137.11-.137.41 0 .52l.765.765c.082.082.164.164.22.274.218.355.136.738.081.957a7 7 0 0 1-1.367 2.351c-.137.164-.437.438-.875.438-.11 0-.219-.028-.328-.055l-1.04-.328c-.163-.028-.437.11-.464.273l-.273 1.067c-.028.109-.055.218-.11.328-.219.383-.601.492-.82.547-.438.082-.875.109-1.34.109s-.93-.027-1.367-.11c-.219-.054-.602-.163-.82-.546-.055-.11-.083-.219-.11-.328l-.273-1.067c-.028-.164-.301-.3-.438-.273l-1.039.328c-.11.027-.246.027-.355.055-.438 0-.739-.274-.875-.438A7 7 0 0 1 .355 13.02c-.054-.22-.136-.602.083-.985.054-.082.136-.191.218-.273l.793-.739c.11-.109.11-.41 0-.52l-.793-.765c-.082-.082-.164-.164-.219-.273-.218-.356-.136-.738-.082-.957a7 7 0 0 1 1.368-2.352c.136-.164.437-.437.875-.437.109 0 .246.027.355.054l1.04.301c.136.055.41-.11.437-.246l.273-1.066c.027-.11.055-.219.11-.328.218-.383.601-.493.82-.547A7.5 7.5 0 0 1 7 3.75M5.96 5.172l-.245.957c-.219.875-1.23 1.476-2.106 1.23l-.957-.3a6.6 6.6 0 0 0-1.039 1.804l.739.684c.656.629.656 1.805 0 2.433l-.739.684a6.6 6.6 0 0 0 1.04 1.805l.956-.301c.875-.246 1.887.355 2.106 1.23l.246.957a5.3 5.3 0 0 0 2.078 0l.219-.957c.219-.875 1.23-1.476 2.105-1.23l.957.3a6.6 6.6 0 0 0 1.04-1.804l-.712-.684c-.656-.628-.656-1.804 0-2.433l.711-.684A6.6 6.6 0 0 0 11.32 7.06l-.957.3c-.847.246-1.886-.355-2.105-1.23l-.219-.957a5.3 5.3 0 0 0-2.078 0m-.272 5.578c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121M7 13.375a2.65 2.65 0 0 1-2.297-1.312 2.65 2.65 0 0 1 0-2.626C5.195 8.646 6.043 8.126 7 8.126c.93 0 1.777.52 2.27 1.313.464.82.464 1.832 0 2.624-.493.82-1.34 1.313-2.27 1.313' />
    </g>
    <defs>
      <clipPath id='a4c1442302eb9c54b3e48cf8ce420f5b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearSmBoldIcon);
export default ForwardRef;
