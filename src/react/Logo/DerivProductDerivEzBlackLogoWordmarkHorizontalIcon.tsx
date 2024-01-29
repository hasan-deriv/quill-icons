import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductDerivEzBlackLogoWordmarkHorizontalIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 251 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#414652'
      d='M0 13.5C0 6.044 6.044 0 13.5 0h45C65.956 0 72 6.044 72 13.5v45C72 65.956 65.956 72 58.5 72h-45C6.044 72 0 65.956 0 58.5z'
    />
    <path
      fill='#303541'
      d='M13.5 0C6.044 0 0 6.044 0 13.5v.392L67.308 3.268A13.45 13.45 0 0 0 58.5 0zM68.697 4.652 56.35 72h2.15C65.956 72 72 65.956 72 58.5v-45c0-3.384-1.246-6.478-3.303-8.848'
    />
    <path
      fill='#FF444F'
      d='M19.191 46.915v-21.83h14.742v4.127h-9.828v4.284h8.726v4.032h-8.726v5.26h10.553v4.127zM52.461 28.487q-1.008 1.04-2.394 2.71a86 86 0 0 0-2.866 3.59 125 125 0 0 0-2.93 4.032 70 70 0 0 0-2.583 3.97h11.12v4.126H35.64v-2.93a59 59 0 0 1 2.142-3.56 146 146 0 0 1 2.678-3.968 97 97 0 0 1 2.803-3.875 113 113 0 0 1 2.678-3.37h-9.797v-4.127h16.317z'
    />
    <g fill='#414652'>
      <path
        fillRule='evenodd'
        d='m108.739 19.493-1.772 10.05h-6.152c-5.74 0-11.21 4.65-12.224 10.39l-.43 2.443c-1.009 5.74 2.82 10.39 8.56 10.39h5.131c4.183 0 8.168-3.386 8.904-7.57l4.726-26.787zm-4.365 24.756c-.227 1.292-1.39 2.344-2.682 2.344h-3.117c-2.58 0-4.306-2.094-3.854-4.679l.27-1.523c.457-2.58 2.918-4.678 5.498-4.678h5.39z'
        clipRule='evenodd'
      />
      <path d='M156.118 52.768h6.385l4.037-22.902h-6.385zM156.331 32.852v-.006l.48-2.716c-6.552-1.688-11.656.058-13.734.919l-3.832 21.724h6.389l3.11-17.643c.959-.191 4.08-.49 7.105.45z' />
      <path
        fillRule='evenodd'
        d='M130.914 29.541h-4.966c-4.844 0-9.461 3.924-10.314 8.768L114.629 44c-.853 4.844 2.377 8.768 7.221 8.768h10.573l1.085-6.155h-9.937c-1.613 0-2.693-1.306-2.405-2.924l.033-.194h16.02l.915-5.187c.854-4.844-2.377-8.768-7.22-8.768m.811 8.277-.038.33h-9.526l.052-.292c.287-1.613 1.759-3.032 3.376-3.032h3.721c1.599 0 2.679 1.395 2.415 2.994'
        clipRule='evenodd'
      />
      <path d='M177.639 44.972c2.899-5.216 6.095-12.06 7.427-15.106h6.395c-2.177 5.788-7.165 15.633-11.998 22.902h-6.39c-2.218-6.919-3.65-16.559-3.924-22.902h6.391c.115 2.07 1.041 9.744 2.099 15.106M199.779 53.591V20.847h22.113v6.19H207.15v6.426h13.088v6.048H207.15v7.89h15.829v6.19zM249.684 25.95q-1.512 1.56-3.591 4.063a129 129 0 0 0-4.3 5.387 188 188 0 0 0-4.394 6.048 104 104 0 0 0-3.874 5.953h16.679v6.19h-25.751v-4.394a89 89 0 0 1 3.213-5.34 218 218 0 0 1 4.016-5.953 146 146 0 0 1 4.205-5.812 170 170 0 0 1 4.016-5.055h-14.694v-6.19h24.475z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(DerivProductDerivEzBlackLogoWordmarkHorizontalIcon);
export default ForwardRef;
