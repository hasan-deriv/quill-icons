import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivGoBrandLightLogoHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 72 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#FF444F'
        d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
      />
      <path
        fill='#E12E3A'
        d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
      />
      <path
        fill='#fff'
        d='M26.453 28.897q-3.434 0-4.977 1.921-1.512 1.89-1.512 5.198 0 1.605.378 2.93.378 1.29 1.134 2.236a5.26 5.26 0 0 0 1.89 1.48q1.134.504 2.646.504.819 0 1.386-.031a7 7 0 0 0 1.04-.126v-7.592h4.914v10.805q-.882.346-2.835.724-1.953.41-4.82.41-2.457 0-4.473-.756-1.985-.757-3.402-2.205-1.418-1.45-2.205-3.56-.756-2.11-.756-4.82 0-2.74.85-4.85.852-2.11 2.332-3.56a9.75 9.75 0 0 1 3.465-2.236 12.1 12.1 0 0 1 4.284-.756q1.544 0 2.772.22 1.26.19 2.142.473.913.252 1.48.535.6.284.85.441L31.62 30.22a12 12 0 0 0-2.33-.914q-1.293-.41-2.836-.41M40.475 36.016q0 1.606.378 2.898.41 1.29 1.134 2.236a5.24 5.24 0 0 0 1.827 1.418q1.071.504 2.457.504 1.355 0 2.426-.504a4.9 4.9 0 0 0 1.827-1.418q.756-.945 1.134-2.236.41-1.291.41-2.898 0-1.606-.41-2.898-.378-1.323-1.134-2.237a4.76 4.76 0 0 0-1.827-1.449q-1.071-.504-2.426-.504-1.386 0-2.457.536a5.1 5.1 0 0 0-1.827 1.449q-.724.913-1.134 2.236-.378 1.292-.378 2.867m16.664 0q0 2.803-.85 4.945-.82 2.11-2.269 3.56-1.448 1.417-3.465 2.142-1.984.724-4.284.724-2.236 0-4.22-.724a9.8 9.8 0 0 1-3.466-2.142q-1.48-1.45-2.33-3.56-.852-2.142-.851-4.945 0-2.804.882-4.914.882-2.142 2.362-3.591a10 10 0 0 1 3.465-2.174 12 12 0 0 1 4.158-.724q2.237 0 4.221.724a9.6 9.6 0 0 1 3.465 2.174q1.48 1.45 2.331 3.59.85 2.112.85 4.915'
      />
    </g>
    <defs>
      <clipPath id='04d5e770325e4ca912498d281dbe4ab0__a'>
        <path fill='#fff' d='M0 0h72v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivGoBrandLightLogoHorizontalIcon);
export default ForwardRef;
