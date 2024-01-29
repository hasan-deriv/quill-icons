import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PartnersProductSmarttraderBlackLogoIcon = (
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
    <path
      fill='#303541'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.307 3.268A13.45 13.45 0 0 0 58.499 0zM68.696 4.652 56.349 72h2.15c7.456 0 13.5-6.044 13.5-13.5v-45c0-3.384-1.245-6.477-3.303-8.847'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M56.349 71.999 13.499 72C6.045 72 0 65.956 0 58.5V13.892L67.307 3.268q.744.642 1.389 1.384z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M26.463 43.198q1.04 0 1.7-.158.694-.189 1.103-.472.41-.315.567-.725.158-.41.158-.913 0-1.071-1.008-1.764-1.008-.725-3.465-1.544a30 30 0 0 1-2.142-.85 8.6 8.6 0 0 1-1.922-1.229 6.1 6.1 0 0 1-1.386-1.795q-.535-1.071-.535-2.583t.567-2.71a5.8 5.8 0 0 1 1.606-2.078q1.04-.85 2.52-1.292 1.48-.472 3.34-.472 2.205 0 3.81.472 1.608.473 2.647 1.04l-1.418 3.874a12 12 0 0 0-2.047-.819q-1.103-.378-2.678-.378-1.764 0-2.551.504-.756.473-.756 1.48 0 .6.283 1.009.285.41.788.756.535.316 1.197.598.693.252 1.512.536 1.7.63 2.96 1.26 1.26.598 2.08 1.417a5.1 5.1 0 0 1 1.26 1.922q.41 1.102.41 2.677 0 3.056-2.143 4.757-2.142 1.67-6.457 1.67-1.45 0-2.615-.19a16 16 0 0 1-2.079-.41 13 13 0 0 1-1.543-.535q-.63-.283-1.071-.535l1.386-3.906q.976.535 2.394.976 1.449.41 3.528.41M52.844 25.117v4.19h-6.583v17.64h-4.914v-17.64h-6.584v-4.19z'
    />
  </svg>
);
const ForwardRef = forwardRef(PartnersProductSmarttraderBlackLogoIcon);
export default ForwardRef;
