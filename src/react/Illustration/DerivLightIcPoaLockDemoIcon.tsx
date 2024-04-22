import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcPoaLockDemoIcon = (
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
    <g clipPath='url(#2736b0258f6638f47774e6f99e08aa6b__a)'>
      <path
        fill='#85ACB0'
        fillOpacity={0.6}
        d='M104.626 121.211H27.463a8.35 8.35 0 0 1-5.906-2.442 8.33 8.33 0 0 1-2.441-5.906V8.347A8.336 8.336 0 0 1 27.463 0h77.163a8.34 8.34 0 0 1 5.906 2.441 8.33 8.33 0 0 1 2.442 5.906v104.516c0 4.591-3.729 8.348-8.348 8.348'
      />
      <path
        fill='#85ACB0'
        fillRule='evenodd'
        d='M11.435 15.583h41.043a11.436 11.436 0 1 1 0 22.874H11.435a11.436 11.436 0 1 1 0-22.874m2.588 17.142c1.725 0 2.977-.5 3.812-1.475.835-.974 1.252-2.394 1.252-4.23s-.417-3.255-1.252-4.23c-.835-.974-2.087-1.474-3.812-1.474H9.905v11.409zm10.183-9.405h5.4v-2.032H21.48v11.409h8.125v-2.004h-5.398v-2.754h5.23v-2.004h-5.23zm14.973 9.405h2.308v-11.41h-3.004l-1.56 3.842h-.138l-1.558-3.841h-3.229v11.409h2.366v-5.092l-.138-3.2h.194l2.365 5.87 2.364-5.87h.168l-.138 3.199zm9.738.194c1.697 0 2.95-.528 3.756-1.558.807-1.03 1.225-2.477 1.225-4.341s-.418-3.312-1.225-4.34c-.807-1.031-2.059-1.559-3.756-1.559s-2.95.528-3.756 1.559c-.808 1.03-1.225 2.477-1.225 4.34 0 1.864.417 3.311 1.225 4.34.807 1.031 2.059 1.56 3.756 1.56m0-9.82c-.78 0-1.307.251-1.614.78-.306.528-.445 1.223-.445 2.142v2.003c0 .918.14 1.642.446 2.143s.834.78 1.613.78c.78 0 1.307-.252 1.614-.78.307-.527.445-1.252.445-2.17V26.02c0-.917-.138-1.641-.445-2.143-.305-.528-.834-.778-1.614-.778m-35.088.133h-1.197v7.541h1.224c.807 0 1.42-.222 1.782-.696.39-.473.555-1.14.555-2.03v-2.06c0-.89-.195-1.558-.555-2.031-.39-.473-.973-.724-1.81-.724'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M81.975 58.324H34.03v5.76h47.945zm11.994 0h-5.871v5.76h5.87zm0 12.689h-5.871v5.758h5.87zm-11.994 0H34.03v5.758h47.945zm11.994 12.69h-59.94v5.76h59.94z'
      />
      <path
        fill='#FF444F'
        d='M123.797 96.501h-3.673v-6.29c0-7.234-5.899-13.133-13.134-13.133s-13.135 5.899-13.135 13.134v6.29h-3.672a4.217 4.217 0 0 0-4.203 4.201v23.095a4.217 4.217 0 0 0 4.203 4.203h33.614a4.22 4.22 0 0 0 4.201-4.203v-23.095a4.213 4.213 0 0 0-4.201-4.202m-22.762-6.29a5.963 5.963 0 0 1 5.955-5.953 5.963 5.963 0 0 1 5.955 5.954v6.29h-11.938v-6.29z'
      />
      <path
        fill='#fff'
        d='M111.747 108.41a4.758 4.758 0 0 0-9.517 0c0 1.921 1.169 3.563 2.811 4.314v8.349h3.896v-8.349c1.641-.751 2.81-2.393 2.81-4.312zM84.12 25.769a5.093 5.093 0 1 0 0-10.186 5.093 5.093 0 0 0 0 10.186m4.118 3.116h-8.21a5.726 5.726 0 0 0-5.732 5.733l-.027 3.868h19.645l.028-3.868a5.68 5.68 0 0 0-5.704-5.733'
      />
    </g>
    <defs>
      <clipPath id='2736b0258f6638f47774e6f99e08aa6b__a'>
        <path fill='#fff' d='M0 0h128v128H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcPoaLockDemoIcon);
export default ForwardRef;
