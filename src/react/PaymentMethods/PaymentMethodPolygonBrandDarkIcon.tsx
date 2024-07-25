import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPolygonBrandDarkIcon = (
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
      d='M41.363 51.414V34.897h2.467l.216 1.34h.13c.691-.908 1.9-1.556 3.547-1.556 3.029 0 5.491 2.468 5.491 6.14s-2.424 6.139-5.496 6.139c-1.641 0-2.77-.691-3.374-1.469h-.13v5.88h-2.856v.043zm8.995-10.593c0-2.16-1.382-3.504-3.072-3.504s-3.072 1.339-3.072 3.504 1.383 3.504 3.072 3.504 3.072-1.34 3.072-3.504M54.64 40.82c0-3.59 2.597-6.139 6.01-6.139 3.46 0 6.01 2.597 6.01 6.14 0 3.59-2.598 6.139-6.01 6.139-3.461 0-6.01-2.592-6.01-6.14m9.163 0c0-2.116-1.382-3.503-3.158-3.503-1.728 0-3.159 1.382-3.159 3.504s1.426 3.504 3.159 3.504 3.158-1.383 3.158-3.504M68.733 46.744V30.357h2.856v16.387zM82.226 34.897h3.028l-5.145 14.4c-.519 1.426-1.21 2.117-3.072 2.117h-2.765v-2.64h2.333c.432 0 .648-.216.777-.561l.26-.778-4.844-12.542h3.03l3.071 8.217h.475l2.77-8.217h.082zM85.816 47.353h2.9c.129.778.906 1.815 2.726 1.815 1.728 0 2.856-1.08 2.856-2.727V44.8h-.13c-.648.691-1.814 1.296-3.288 1.296-3.029 0-5.405-2.333-5.405-5.707 0-3.375 2.333-5.708 5.405-5.708 1.555 0 2.726.648 3.46 1.512h.13l.216-1.296h2.468v11.544c0 3.159-2.117 5.232-5.708 5.232-4.032 0-5.544-2.635-5.63-4.32m8.434-6.964c0-1.858-1.296-3.159-2.986-3.159-1.642 0-2.942 1.296-2.942 3.159s1.296 3.158 2.942 3.158 2.986-1.3 2.986-3.158M99.093 40.82c0-3.59 2.597-6.139 6.009-6.139 3.461 0 6.01 2.597 6.01 6.14 0 3.59-2.597 6.139-6.01 6.139-3.46 0-6.01-2.592-6.01-6.14m9.168 0c0-2.116-1.426-3.503-3.159-3.503-1.728 0-3.158 1.382-3.158 3.504s1.426 3.504 3.158 3.504c1.728 0 3.159-1.383 3.159-3.504M113.104 34.897h2.467l.216 1.124h.13c.475-.519 1.641-1.34 3.417-1.34 2.727 0 4.671 1.944 4.671 4.973v7.133h-2.856v-6.744c0-1.512-1.08-2.64-2.554-2.64a2.62 2.62 0 0 0-2.64 2.64v6.744h-2.851z'
    />
    <path
      fill='url(#6fb6ab85c90f6f2977a387f5555d22ec__a)'
      d='m25.97 45.361 7.003-4.065c.389-.216.605-.605.605-1.037v-8.131c0-.432-.216-.821-.605-1.037l-7.003-4.066a1.21 1.21 0 0 0-1.21 0l-7.008 4.066a1.16 1.16 0 0 0-.605 1.037v14.486l-4.93 2.856-4.929-2.856V40.95l4.93-2.856 3.244 1.858v-3.807l-2.64-1.512c-.172-.086-.388-.172-.604-.172s-.432.043-.605.172l-7.008 4.07A1.16 1.16 0 0 0 4 39.742v8.13c0 .433.216.822.605 1.038l7.003 4.065c.389.216.82.216 1.21 0l7.003-4.065c.389-.216.605-.605.605-1.037V33.385l.086-.043 4.848-2.813 4.93 2.856v5.664l-4.93 2.852-3.245-1.858v3.806l2.64 1.512c.389.216.821.216 1.215 0'
    />
    <defs>
      <linearGradient
        id='6fb6ab85c90f6f2977a387f5555d22ec__a'
        x1={3.952}
        x2={32.146}
        y1={48.67}
        y2={32.195}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#A726C1' />
        <stop offset={0.878} stopColor='#803BDF' />
        <stop offset={1} stopColor='#7B3FE4' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPolygonBrandDarkIcon);
export default ForwardRef;
