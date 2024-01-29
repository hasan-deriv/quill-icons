import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodJetonBrandIcon = (
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
      fill='#FF671F'
      d='M34.482 26v28h-1.013V26zm13.817 19.15c.856 0 1.55-.658 1.55-1.47V28.885h6.177V43.68c.1 2.684-1.35 5.205-3.784 6.575a8 8 0 0 1-3.524 1.017l-.283.01h-.282a8.05 8.05 0 0 1-3.806-1.027c-2.434-1.37-3.885-3.891-3.785-6.575h6.188c0 .812.694 1.47 1.55 1.47m50.767-9.903a8.3 8.3 0 0 1 2.65 1.72l.02.01a7.7 7.7 0 0 1 1.773 2.607 8.8 8.8 0 0 1 0 6.556c-.796 1.964-2.4 3.536-4.443 4.355a9.4 9.4 0 0 1-2.869.607l-.325.012h-.326a9.4 9.4 0 0 1-3.194-.619 8.2 8.2 0 0 1-2.68-1.729 8.1 8.1 0 0 1-1.753-2.626 8.5 8.5 0 0 1-.634-3.283 8.35 8.35 0 0 1 .634-3.273c.4-.97.996-1.855 1.754-2.608a8.2 8.2 0 0 1 2.68-1.729 9.28 9.28 0 0 1 6.713 0m-32.77-.666a9.1 9.1 0 0 1 3.343.583c.97.373 1.839.948 2.543 1.683v-.01A7.25 7.25 0 0 1 73.75 39.4a9.7 9.7 0 0 1 .526 3.292v.777c-.009.199-.052.396-.127.582l-.175.324H63.256c.138.639.478 1.223.975 1.674.315.286.685.512 1.091.665.421.16.871.242 1.325.24l.227.009.227-.008c.6-.04 1.18-.24 1.67-.583l.244-.203 4.54 1.202-.486.684a6.6 6.6 0 0 1-1.598 1.59 7.6 7.6 0 0 1-2.134 1.083 9.4 9.4 0 0 1-2.416.379l-.349.002a9.4 9.4 0 0 1-3.082-.557 7.7 7.7 0 0 1-2.66-1.646 8 8 0 0 1-1.812-2.617 8.5 8.5 0 0 1-.692-3.505 8.4 8.4 0 0 1 .653-3.338 8 8 0 0 1 1.754-2.57 7.8 7.8 0 0 1 2.553-1.665 7.8 7.8 0 0 1 3.01-.629m-38.06 10.237c-1.466 2.893-4.181 5.041-7.444 5.89-3.262.85-6.752.317-9.57-1.461zm54.08-14.176v4.41h3.128v4.236h-3.128v6.103c-.03.33.07.66.282.925.24.168.53.262.826.27l.149-.002q.236.022.474.022l.237-.004.419-.055.77-.185v3.94l-.39.147c-.088 0-.253.083-.75.213q-.496.106-1.001.142l-.337.015a7 7 0 0 1-.338 0 5.34 5.34 0 0 1-3.742-1.295 4.7 4.7 0 0 1-1.393-3.569v-6.667H75.67v-4.235h1.852v-4.411zm32.615 4.003.292.006a7 7 0 0 1 2.288.485 5.3 5.3 0 0 1 1.949 1.396c.501.6.878 1.284 1.111 2.016l.059.01c.249.779.374 1.59.37 2.404v9.71h-4.872v-9.128a3.12 3.12 0 0 0-.585-1.923 2.73 2.73 0 0 0-1.713-.683l-.169-.002-.168.008c-.616.05-1.216.3-1.682.75a3.16 3.16 0 0 0-.662 2.054v8.914h-4.873v-15.61h4.726v.86c.328-.266.692-.49 1.082-.665a7 7 0 0 1 2.847-.602m-19.227 4.273c-.47 0-.935.08-1.374.24-.418.158-.794.4-1.1.712-.351.361-.626.782-.81 1.24a4.5 4.5 0 0 0-.311 1.747c-.011.602.094 1.2.311 1.767.186.46.46.883.81 1.248.311.314.69.563 1.11.73.436.167.898.25 1.36.25l.23-.007a3.8 3.8 0 0 0 1.129-.243c.43-.168.818-.42 1.14-.74.343-.358.605-.78.77-1.239l.019.01a4.9 4.9 0 0 0 .302-1.776 4.8 4.8 0 0 0-.302-1.757 3.5 3.5 0 0 0-.79-1.22 3.2 3.2 0 0 0-1.13-.722 4 4 0 0 0-1.364-.24m-68.267-5.141A10.7 10.7 0 0 1 29.386 40v.555L7.949 46.13A10.64 10.64 0 0 1 6 40v-.666zm38.87 4.882a3.3 3.3 0 0 0-1.248.231c-.365.14-.696.347-.974.61a3.3 3.3 0 0 0-.624.925q-.04.128-.068.26l.02-.01h5.924a2.458 2.458 0 0 0-.682-1.211 2.9 2.9 0 0 0-.975-.583 3.8 3.8 0 0 0-1.14-.22zm-51.7-9.354c3.206-.835 6.635-.335 9.43 1.374l-16.8 4.374c1.484-2.823 4.164-4.914 7.37-5.748'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodJetonBrandIcon);
export default ForwardRef;
