import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodMandiriBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M34.61 42.147c4.844 0 6.24 3.075 6.24 6.355l.01 5.483a24.4 24.4 0 0 0 .215 3.629h-3.448l-.246-1.671h-.092a5.6 5.6 0 0 1-4.454 2.05 4.5 4.5 0 0 1-3.345-1.221 4.49 4.49 0 0 1-1.406-3.269c0-3.812 3.376-5.73 8.959-5.698v-.328c0-1.025-.4-2.634-3.079-2.634a8 8 0 0 0-4.053 1.117l-.75-2.48a10.93 10.93 0 0 1 5.45-1.333m39.067-5.668V53.37c0 1.548.061 3.219.123 4.244h-3.407l-.154-2.389h-.062a5.43 5.43 0 0 1-4.925 2.727c-3.592 0-6.444-3.075-6.444-7.708 0-5.043 3.078-8.056 6.752-8.056a4.83 4.83 0 0 1 4.248 1.988h.062V36.48zm-52.345 5.709c2.504 0 5.049 1.712 5.049 6.54v8.886h-3.725V49.28c0-2.501-.872-3.988-2.7-3.988a2.9 2.9 0 0 0-2.667 2.05 5.4 5.4 0 0 0-.185 1.271v9.04H13.39v-8.773c0-2.101-.841-3.588-2.606-3.588a2.975 2.975 0 0 0-2.73 2.184 3.3 3.3 0 0 0-.215 1.24v8.917H4.123V47.026c0-1.733 0-3.188-.123-4.49h3.284l.123 2.224h.092a5.22 5.22 0 0 1 4.401-2.573h.248a4.36 4.36 0 0 1 4.186 2.789h.062a5.64 5.64 0 0 1 1.857-1.886 5.05 5.05 0 0 1 3.079-.902m30.467 0c2.627 0 5.357 1.712 5.357 6.478v8.948h-3.808v-8.518c0-2.163-.81-3.803-2.883-3.803a3.19 3.19 0 0 0-2.976 2.184 3.9 3.9 0 0 0-.154 1.24v8.856h-3.848V47.025c0-1.733 0-3.188-.123-4.49h3.345l.185 2.265h.102a5.43 5.43 0 0 1 4.803-2.613m28.466.348v15.078h-3.89V42.536zm11.082 0v3.342a5.3 5.3 0 0 0-1.108-.123 3.354 3.354 0 0 0-3.407 2.88 6.5 6.5 0 0 0-.123 1.178v7.8h-3.797V46.553c-.002-1.619-.017-2.847-.123-4.016h3.315l.123 2.87h.123a4.156 4.156 0 0 1 4.105-2.87q.446-.045.892 0m5.634 0v15.078h-3.838V42.536zm-65.08 10.527a2.05 2.05 0 0 0 2.186 2.162 3.08 3.08 0 0 0 2.976-2.05c.083-.272.125-.555.123-.84l-.02-2.091c-2.7-.062-5.264.523-5.264 2.819m34.593-7.995c-2.453 0-3.818 2.163-3.818 4.981s1.365 4.766 3.787 4.766a3.365 3.365 0 0 0 3.284-2.695 4.3 4.3 0 0 0 .123-1.117v-2.225a5.4 5.4 0 0 0-.093-1.025 3.334 3.334 0 0 0-3.283-2.685'
    />
    <path
      fill='#FAB900'
      d='M120.901 26.598c-1.909-2.173-3.93-1.189-5.531-.39-.677.329-5.562 3.076-5.562 3.076-1.9.9-4.167.446-5.572-1.118a1.7 1.7 0 0 1-.205-.307l-.195-.328a15 15 0 0 0-1.026-1.6 10 10 0 0 0-.77-.87c-1.827-1.845-4.751-3.137-9.646-.8a2519 2519 0 0 1-9.851 5.648 4.704 4.704 0 0 1-5.696-1.292l-.082-.133-.092-.154-.513-.758a26 26 0 0 0-.687-1.025c-.257-.37-.493-.595-.77-.882-1.827-1.834-4.73-3.075-9.574-.82l-9.739 5.566-4.987 2.85 2.576 3.156a5.25 5.25 0 0 0 6.28 1.302l8.753-5.053c7.45-4.1 11.124-.185 12.745 2.419.062.082.103.174.154.246v.082l.185.307a4.1 4.1 0 0 0 3.53 1.937 4.4 4.4 0 0 0 2.196-.738l8.466-4.817c7.542-4.1 11.288 0 12.878 2.624q.185.33.411.636a3.87 3.87 0 0 0 3.263 1.742 5 5 0 0 0 2.052-.666L124 30.606a42 42 0 0 0-3.099-4.008'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodMandiriBrandDarkIcon);
export default ForwardRef;
