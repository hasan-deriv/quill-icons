import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.418 7.113h-.055q-.027 0-.054-.027 0-.027.027-.027a.14.14 0 0 1 .164 0 .18.18 0 0 1 .082.082q-.027.027-.082.027-.027 0-.055-.027-.027 0-.027-.028m-.602.055q-.054 0-.082-.027 0-.055.082-.082a.14.14 0 0 1 .164 0q.028 0 0 .027 0 .027-.054.027h-.028l-.027.028q-.027.027-.055.027m6.043 7.629q.438.492.41.793-.027.328-.355.52a8 8 0 0 1-.41.218q-.575.22-.984.656-.63.712-1.34.766t-1.094-.629a.34.34 0 0 1-.055-.191q-.492 0-.875-.055a4.3 4.3 0 0 0-.656-.055q-.465.027-.793.11a6 6 0 0 1-.52.082 1 1 0 0 1-.71.547q-.684.135-1.532-.301a3.7 3.7 0 0 0-1.12-.274 21 21 0 0 1-.493-.054q-.382-.055-.547-.328-.164-.302.055-.875a1.2 1.2 0 0 0 0-.52q0-.027-.027-.055a2 2 0 0 1-.028-.328q0-.165.082-.328.22-.328.52-.41.027 0 .054-.027.246-.055.41-.192.083-.082.165-.219.136-.19.273-.328-.082-.711.164-1.449.274-.793.738-1.504.465-.683.848-1.148.601-.875.629-1.778 0-.19-.027-.52a8 8 0 0 1 0-1.339q.054-.71.52-1.258.465-.546 1.64-.574 1.039.027 1.476.602.438.573.547 1.367.082.792.055 1.476v.137q0 .602.246 1.066.273.465.629.875l.027.028q.328.383.684.902.355.52.574 1.149.438 1.011.11 2.16l.109.054a.4.4 0 0 1 .11.082q.245.247.3.602v.027q.054.329.191.52M6.5 6.129a1 1 0 0 0-.082.601q.165.028.355.137a.65.65 0 0 1 .055-.465q.11-.19.274-.164.163 0 .246.246a.76.76 0 0 1 0 .493.18.18 0 0 1-.082.082l-.028.027q.274.109.328.137.356-.438.137-1.094-.246-.438-.601-.438-.383 0-.602.438m-1.121-.3q-.383.054-.465.546-.082.52.246.875.219-.165.164-.137v-.027a.6.6 0 0 1-.164-.438q.027-.273.192-.328.136 0 .218.192a.6.6 0 0 1 .055.355q.136-.081.273-.137a1.1 1.1 0 0 0-.136-.656q-.165-.246-.383-.246m-.383 1.667V7.47q-.164.136-.11.355.056.22.41.41.138.082.247.192.136.136.3.219a.6.6 0 0 0 .274.054q.465 0 .738-.246a1 1 0 0 1 .301-.164q.492-.164.602-.492.11-.355-.274-.492a1.7 1.7 0 0 0-.328-.11 1.5 1.5 0 0 1-.3-.136q-.411-.274-.711-.247-.52.083-.711.356-.028 0-.028.027a2.6 2.6 0 0 0-.41.301m.11 9.133q0-.273-.192-.602-.191-.3-.465-.629a4 4 0 0 1-.465-.656l-.546-.984q-.274-.383-.602-.438-.3-.054-.465.192a2 2 0 0 0-.191.218l-.22.274q-.19.164-.41.219l-.109.054a.58.58 0 0 0-.41.301q-.11.219-.027.547v.082q.082.3 0 .574-.165.547-.055.739.192.273.875.3.602 0 1.203.301.684.328 1.34.274.63-.082.738-.766m-.055-.711q.792.492 1.64.383a3.3 3.3 0 0 0 1.504-.602v-.027q.137-.438.164-.766.028-.628.137-1.066.11-.547.574-.766.055-.41.356-.465.274-.054.71.137.739.329.602.711h.137a.515.515 0 0 0-.219-.574 2 2 0 0 0-.629-.383 2 2 0 0 0-.027-.984 3.1 3.1 0 0 0-.41-.93 3.2 3.2 0 0 0-.547-.684q-.11 0 .082.192.274.246.574.902.3.657.055 1.422a1 1 0 0 0-.3-.055 5.3 5.3 0 0 0-.302-1.066 5 5 0 0 0-.328-.684 7.4 7.4 0 0 1-.547-1.23q-.3-.738-.492-1.395-.191.275-.601.41l-.274.137-.164.11Q6.144 9 5.598 8.617a1 1 0 0 1-.137-.11.9.9 0 0 0-.219-.163q-.082-.082-.164-.137a5 5 0 0 1-.328 1.367q-.274.712-.547 1.285-.11.246-.191.438a4.6 4.6 0 0 0-.383 1.695q-.41-.629-.274-1.258.138-.655.356-1.011.356-.684.219-.575-.192.301-.41.739a3.5 3.5 0 0 0-.329.902 2.1 2.1 0 0 0 0 .957q.138.465.684.82.027 0 .383.246.356.247.656.63.3.409.219.683-.136.273-.465.246.218.246.383.547m7.054-.328q.028-.192-.382-.656a1.2 1.2 0 0 1-.22-.602q-.054-.356-.245-.547a.7.7 0 0 0-.574-.137h-.055a1.3 1.3 0 0 1-.465.329q-.3.163-.574.109-.492-.192-.52-.793h-.027q-.273.164-.383.574a8 8 0 0 0-.11 1.067 3.2 3.2 0 0 1-.163.765q-.055.165-.11.356-.164.519-.027.984.328.574.93.52.6-.056 1.203-.684a2.9 2.9 0 0 1 1.066-.738q.575-.219.656-.547m-7-7.766q-.109-.165-.027-.191a.18.18 0 0 1 .082.082q0 .027.027.055.082.082.22.19.245.247.683.274.465-.054.793-.273.136-.083.3-.219a.3.3 0 0 0 .083-.054l.082-.083q.027-.054.082-.054.109.027-.082.164-.165.165-.41.3a1.73 1.73 0 0 1-.848.274q-.492-.028-.766-.273l-.191-.192z' />
    </g>
    <defs>
      <clipPath id='d650a63f313259156d5d06aa7ced8aa7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxSmIcon);
export default ForwardRef;
