import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivLifeBrandLightIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 262 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.195 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
    />
    <path
      fill='#414652'
      d='M182.09 40.944q-.272 1.635-.546 3.195a12.5 12.5 0 0 0-.189 2.972q.155 2.527 1.472 4.012 1.318 1.486 4.684 1.858l-1.213 5.646q-3.052-.075-5.221-.929-2.17-.853-3.557-2.266a9.3 9.3 0 0 1-2.1-3.343q-.713-1.931-.855-4.235a22.4 22.4 0 0 1 .078-3.566q.182-1.856.58-3.863l6.966-38.932 7.134-1.188zm15.904 17.014h-6.909l6.91-38.634h6.91zm5.218-45.618q-1.71.001-2.924-1.04-1.216-1.039-1.33-2.897-.147-2.377 1.255-3.752 1.4-1.374 3.259-1.374 1.709 0 2.964 1.077 1.254 1.078 1.373 3.009.138 2.229-1.338 3.603t-3.259 1.374m15.317 6.984h12.927l-.981 5.795h-12.927l-4.436 24.518q-.657 3.79-1.144 6.761a46 46 0 0 1-1.254 5.572 23.8 23.8 0 0 1-2.144 5.015q-1.375 2.413-3.814 5.015l-6.148-.892q2.05-2.897 3.191-4.903a25 25 0 0 0 1.865-4.086q.726-2.082 1.192-4.792.464-2.712 1.239-7.021l6.127-34.473q.663-3.714 1.859-6.613 1.196-2.897 3.193-4.866 1.996-1.968 4.83-3.01 2.834-1.039 6.845-1.04 2.6.001 4.973.521 2.371.52 3.597 1.114l-2.41 5.498q-.614-.297-2.089-.743-1.477-.445-4.3-.445-2.451 0-4.117.705-1.666.707-2.776 1.969-1.112 1.263-1.707 3.046-.598 1.784-.979 4.012zm25.273 39.6q-3.79 0-6.605-1.077-2.816-1.078-4.789-2.972a12.9 12.9 0 0 1-3.021-4.421 16.5 16.5 0 0 1-1.22-5.349q-.32-5.2.943-10.03 1.263-4.828 3.932-8.544a19.8 19.8 0 0 1 6.695-5.906q4.024-2.192 9.3-2.193 3.046 0 5.287.78 2.238.781 3.696 2.118a9.3 9.3 0 0 1 2.232 3.084q.777 1.746.891 3.603.214 3.494-.9 5.906-1.115 2.415-3.094 4.05-1.98 1.634-4.711 2.526a41 41 0 0 1-5.708 1.41 54 54 0 0 1-6.049.707 929 929 0 0 1-5.811.335 8 8 0 0 0-.016.965l.037.595q.104 1.71.608 3.232a6.5 6.5 0 0 0 1.687 2.674q1.185 1.152 3.195 1.82t5.205.669q1.41 0 2.919-.26a24 24 0 0 0 2.856-.669 33 33 0 0 0 2.401-.817q1.052-.407 1.476-.78l.955 5.869q-1.437.819-4.685 1.746-3.25.929-7.706.929m-8.366-21.248q4.3-.15 7.841-.558t6.08-1.412q2.539-1.002 3.882-2.711 1.344-1.71 1.175-4.458a4.5 4.5 0 0 0-.347-1.412q-.307-.741-.976-1.374-.67-.63-1.81-1.04-1.14-.408-2.774-.409-2.6 0-4.798 1.114a13.5 13.5 0 0 0-3.868 2.935q-1.672 1.821-2.786 4.235a21.6 21.6 0 0 0-1.619 5.09'
    />
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivLifeBrandLightIcon);
export default ForwardRef;
