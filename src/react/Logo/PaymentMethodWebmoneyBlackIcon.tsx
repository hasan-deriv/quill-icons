import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodWebmoneyBlackIcon = (
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
    <g fill='#000'>
      <path d='M108.187 25.36c2.222.003 4.414.51 6.413 1.48.31.15.61.31.92.48l-1.36 1.21-2-2.1-3.44 3-2.05-2.21-6.45 5.78 4.11 4.5-1.62 1.41 4.05 4.5-1.6 1.41 5.84 6.4 3.43-3.14 3 3.37q-.925.708-1.94 1.28a14.67 14.67 0 1 1-7.27-27.37z' />
      <path d='m105.45 39.08 3.51-3.14 3.15 3.48-3.5 3.14zM111.45 41.96l-3.51 3.13 3.16 3.48 3.51-3.13zM102.94 33.13l3.51-3.14 3.15 3.49-3.51 3.13zM112.01 29.09l-2.63 2.35 2.36 2.61 2.64-2.35zM114.05 42.21l2.63-2.35 2.37 2.61-2.63 2.35zM119 45.13l-2.64 2.35 2.37 2.62 2.63-2.35zM117.42 35.4l1.76-1.57 1.58 1.74-1.76 1.57zM116.94 28.66l-1.76 1.56 1.58 1.75 1.76-1.57zM119.67 40.57l1.75-1.57 1.58 1.74-1.75 1.57zM114.43 34.34l-2.63 2.35 2.37 2.61 2.63-2.35zM11.88 37.48h-.11l-2.23 8.33H7.73L5 33.97h1.88l1.89 8.84h.12l2.19-8.84h1.49l2.34 8.84h.12l1.72-8.84h1.97l-2.73 11.84h-1.82z' />
      <path
        fillRule='evenodd'
        d='M26.18 45.27V44a5.1 5.1 0 0 1-2.68.89c-1.73 0-2.56-.89-2.56-2.89h5.46v-.63c0-2.73-1.3-4.08-3.4-4.08-2.52 0-3.82 1.74-3.82 4.38s1.17 4.37 4 4.37a5.93 5.93 0 0 0 3-.77m-1.33-4.44H21c.16-1.67 1.09-2.45 2-2.45s1.77.7 1.85 2.45M29.69 37.88a5.06 5.06 0 0 1 2.31-.62c2.09 0 3.22 1.44 3.22 4.11 0 3.12-1.52 4.64-4 4.64a7.8 7.8 0 0 1-3.22-.82V33.53l1.75-.41zm0 6.7a4 4 0 0 0 1.55.26c1.25 0 2.19-.76 2.19-3.47 0-2.12-.77-2.81-1.9-2.81a3.65 3.65 0 0 0-1.84.55z'
        clipRule='evenodd'
      />
      <path d='M42.94 43.31h-.08l-3.77-9.34h-2.04v11.84h1.51v-8.38h.16l3.43 8.38h1.08l3.43-8.58h.15v8.58h1.82V33.97h-2.09z' />
      <path
        fillRule='evenodd'
        d='M50.48 41.64c0-2.93 1.62-4.38 3.84-4.38s3.84 1.45 3.84 4.38S56.63 46 54.32 46s-3.84-1.51-3.84-4.36m5.91 0c0-2.26-.93-3.21-2.07-3.21s-2.07 1-2.07 3.21.88 3.2 2.07 3.2 2.07-.91 2.07-3.2'
        clipRule='evenodd'
      />
      <path d='M64.05 37.26a8.5 8.5 0 0 0-4.29 1.24v7.31h1.75V39.2a4.7 4.7 0 0 1 2.05-.6c.86 0 1.52.23 1.52 1.55v5.66h1.75v-6.05c0-1.72-.78-2.5-2.78-2.5' />
      <path
        fillRule='evenodd'
        d='M75.36 44v1.27a5.93 5.93 0 0 1-3 .77c-2.83 0-4-1.73-4-4.37s1.3-4.38 3.82-4.38c2.11 0 3.4 1.35 3.4 4.08V42h-5.45c0 2 .82 2.89 2.55 2.89a5.1 5.1 0 0 0 2.68-.89m-5.2-3.17H74c-.08-1.75-.94-2.45-1.85-2.45s-1.8.78-1.99 2.45'
        clipRule='evenodd'
      />
      <path d='M84 37.54h-1.84l.01-.04-1.92 6.15h-.1L78 37.5h-1.79l3.24 8.36c-.41 1.23-1.11 2.14-2.26 2.14v1.4c1.94 0 2.96-1.2 3.81-3.5z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodWebmoneyBlackIcon);
export default ForwardRef;
