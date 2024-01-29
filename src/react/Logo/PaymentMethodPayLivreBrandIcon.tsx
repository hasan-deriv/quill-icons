import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPayLivreBrandIcon = (
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
      fill='#215AFF'
      d='M19.683 28.082c-1.529-1.528-3.397-2.264-5.605-2.264H7.907v3.85h5.888c1.245 0 2.151.453 2.887 1.132.736.68 1.076 1.585 1.076 2.66s-.34 2.039-1.076 2.775-1.698 1.132-2.887 1.132l-4.813.057H4.057v11.323h4.472v-7.36l5.605-.057c2.265 0 4.133-.792 5.662-2.264s2.265-3.284 2.265-5.435c-.114-2.208-.85-4.02-2.378-5.549'
    />
    <path
      fill='#215AFF'
      d='M7.85 29.611H4v3.85h3.85zM29.704 48.52c-.68 0-1.36-.056-2.039-.226s-1.358-.396-1.981-.792c-.68-.34-1.19-.906-1.585-1.642a5.3 5.3 0 0 1-.623-2.548c0-1.755.566-3.057 1.755-3.906s2.83-1.303 4.982-1.303l4.926-.056v-.906q0-1.275-1.02-1.868c-.679-.397-1.528-.623-2.66-.623-2.038 0-3.284.68-3.68 2.038l-3.907.056c0-1.641.736-3 2.208-4.02 1.472-1.018 3.227-1.528 5.322-1.528s3.907.51 5.379 1.529 2.264 2.321 2.264 3.963v11.55h-3.85v-2.095c-.453.566-1.189 1.132-2.095 1.585a7.5 7.5 0 0 1-3.396.793m.34-3.396a5.56 5.56 0 0 0 3.453-1.19c1.075-.792 1.585-1.754 1.585-2.943H30.95c-1.189 0-2.038.226-2.66.68-.567.452-.85 1.018-.737 1.698.113 1.188.963 1.755 2.491 1.755M44.707 54.862l2.66-6.738-6.906-16.588h4.302l4.7 11.89 4.416-11.89h4.302l-9.285 23.326zM64.579 26.157h-4.076v22.08h4.076zM72.958 31.536h-4.076v16.702h4.076zM81.054 48.238 75.79 31.536h4.303l4.303 14.097 4.19-14.097H93l-5.322 16.702zM95.605 48.238V31.536h4.076v2.491c.566-.962 1.359-1.642 2.378-2.151 1.075-.51 2.321-.623 3.85-.397v4.36c-1.586-.51-3.001-.396-4.303.34-1.302.735-1.925 1.924-1.925 3.51v8.492h-4.076zM115.363 48.52q-3.566 0-6.114-2.547c-1.699-1.698-2.491-3.737-2.491-6.058q0-3.651 2.548-6.114c1.698-1.699 3.736-2.492 6.057-2.492 2.039 0 3.907.68 5.492 1.982 1.585 1.359 2.548 3 2.944 4.982.227 1.133.283 2.152.057 3.17h-12.965c.226 1.077.736 1.926 1.585 2.549.793.622 1.812.905 2.944.905 1.755 0 3.171-.566 4.303-1.755l3.567.963c-.68 1.302-1.755 2.378-3.227 3.17-1.529.85-3.058 1.246-4.7 1.246m-4.529-10.247h9.002c-.226-.962-.736-1.755-1.529-2.434s-1.755-.963-2.944-.963c-1.132 0-2.151.34-2.944.963-.849.68-1.358 1.472-1.585 2.434'
    />
    <path
      fill='url(#c179cadbd4632c75fbd7f48aea0d7b94__a)'
      d='M79.809 25.138H68.882v4.076h10.927z'
    />
    <defs>
      <linearGradient
        id='c179cadbd4632c75fbd7f48aea0d7b94__a'
        x1={79.781}
        x2={68.876}
        y1={27.172}
        y2={27.172}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0} />
        <stop offset={0.834} stopColor='#215AFF' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPayLivreBrandIcon);
export default ForwardRef;
