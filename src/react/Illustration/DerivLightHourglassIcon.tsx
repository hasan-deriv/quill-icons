import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightHourglassIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M54.245 62.403C26.704 42.628 21.231 19.128 21.98 9.6h84.043c.749 9.528-4.796 33.028-32.338 52.803-.75.54-1.732 1.453 0 2.697 27.542 19.775 32.929 43.775 32.18 53.303h-83.8c-.749-9.528 4.638-33.528 32.18-53.303 1.733-1.244.751-2.157 0-2.697'
    />
    <path
      fill='#B2C6C7'
      fillRule='evenodd'
      d='M21.98 9.6c-.75 9.528 4.723 33.028 32.265 52.803.751.54 1.733 1.453 0 2.697-27.541 19.775-32.929 43.775-32.18 53.303h83.8c.749-9.528-4.638-33.528-32.18-53.303-1.732-1.244-.75-2.157 0-2.697 27.542-19.775 33.087-43.275 32.338-52.803zm3.52 2.5c-.75 9.528 6.17 30.376 33.712 50.152.703.505.959.955.965 1.348-.006.393-.262.843-.965 1.348C31.67 84.724 25.25 105.572 26 115.1h76.5c.749-9.528-5.747-30.376-33.288-50.152-.704-.505-.96-.955-.966-1.348.006-.393.262-.843.966-1.348 27.541-19.776 34.036-40.624 33.287-50.152z'
      clipRule='evenodd'
    />
    <path
      fill='#B2C6C7'
      d='M110.727 128H16.846c-1.589 0-2.846-1.322-2.846-2.954v-3.692c0-1.632 1.288-2.954 2.876-2.954h93.843c1.589 0 2.877 1.322 2.877 2.953v3.695c0 1.631-1.281 2.952-2.869 2.952M110.727 9.6H16.846C15.257 9.6 14 8.278 14 6.646V2.954C14 1.322 15.288 0 16.876 0h93.843c1.589 0 2.877 1.322 2.877 2.953v3.695c0 1.631-1.281 2.952-2.869 2.952'
    />
    <path
      fill='#BCE1E1'
      d='M68.035 71.837c18.068 7.191 29.83 29.194 29.83 43.283H29.461c2.666-18.522 12.311-30.377 21.197-37.963 7.109-6.07 14.632-6.413 17.377-5.32'
    />
    <path
      fill='#D9F2F1'
      d='M51.47 79.465c-8.355 4.824-13.4 18.553-14.878 24.814-.492 2.175.653 1.467 1.084.494.394-.89 2.03-5.042 5.813-11.764 4.729-8.403 6.108-8.897 8.571-11.962 1.97-2.452.427-2.077-.59-1.582M63.888 70.228c-3.596-.144-1.738-4.375-.36-6.472.136-.207.3-.09.36 0 1.378 2.097 3.595 6.328 0 6.472'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightHourglassIcon);
export default ForwardRef;
