import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivEzBrandLightWordmarkHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 163 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='m20.739 1.084-1.772 10.05h-6.152c-5.74 0-11.21 4.65-12.224 10.39l-.43 2.443c-1.009 5.74 2.82 10.39 8.56 10.39h5.131c4.183 0 8.168-3.386 8.904-7.57L27.482 0zM16.374 25.84c-.227 1.292-1.39 2.344-2.682 2.344h-3.117c-2.58 0-4.306-2.094-3.854-4.679l.27-1.523c.457-2.58 2.919-4.678 5.498-4.678h5.39z'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='M68.118 34.359h6.385l4.037-22.902h-6.385zM68.33 14.443l.002-.005.479-2.717c-6.552-1.688-11.656.058-13.734.919l-3.832 21.724h6.39l3.109-17.643c.959-.191 4.08-.49 7.105.45z'
    />
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M42.914 11.133h-4.966c-4.844 0-9.46 3.923-10.314 8.767l-1.005 5.692c-.854 4.844 2.377 8.768 7.22 8.768h10.574l1.085-6.155H35.57c-1.613 0-2.693-1.306-2.405-2.924l.033-.193h16.02l.915-5.188c.854-4.844-2.377-8.767-7.22-8.767m.81 8.276-.037.33h-9.526l.052-.292c.287-1.613 1.759-3.032 3.376-3.032h3.721c1.6 0 2.68 1.396 2.415 2.994'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='M89.639 26.563c2.899-5.216 6.095-12.06 7.427-15.106h6.395c-2.177 5.788-7.165 15.633-11.998 22.902h-6.39c-2.218-6.919-3.65-16.559-3.924-22.902h6.39c.116 2.07 1.042 9.744 2.1 15.106'
    />
    <path
      fill='#414652'
      d='M111.779 35.182V2.438h22.113v6.19H119.15v6.426h13.088v6.048H119.15v7.89h15.829v6.19zM161.684 7.54q-1.512 1.56-3.591 4.064a129 129 0 0 0-4.3 5.387 188 188 0 0 0-4.394 6.048 104 104 0 0 0-3.874 5.953h16.679v6.19h-25.751v-4.394a89 89 0 0 1 3.213-5.34 218 218 0 0 1 4.016-5.953 146 146 0 0 1 4.205-5.812 170 170 0 0 1 4.016-5.055h-14.694v-6.19h24.475z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivEzBrandLightWordmarkHorizontalIcon);
export default ForwardRef;
