import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivPartnersWhiteIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 431 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path d='m35.019 1.829-2.99 16.955H21.65c-9.682 0-18.91 7.845-20.621 17.527l-.724 4.12c-1.703 9.683 4.757 17.528 14.44 17.528H23.4c7.057 0 13.78-5.713 15.02-12.77L46.394 0zM27.655 43.59c-.382 2.18-2.345 3.954-4.525 3.954h-5.259c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.276-7.892h9.093zm87.291 14.367 6.81-38.634h10.773l-6.811 38.634h-10.78zm1.165-38.188-1.622 9.193c-5.103-1.586-10.369-1.081-11.986-.759q-2.621 14.881-5.246 29.764h-10.78l6.465-36.648c3.506-1.452 12.116-4.399 23.169-1.55m-43.676-.993h-8.386c-8.17 0-15.959 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.039c-2.72 0-4.542-2.204-4.057-4.933l.056-.326h27.026l1.544-8.752c1.44-8.17-4.01-14.79-12.181-14.79zm1.36 13.963-.063.557H57.66l.087-.493c.486-2.721 2.968-5.116 5.697-5.116h6.277c2.697 0 4.52 2.355 4.073 5.052M174.56 19.324c-3.672 9.763-12.087 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.195 3.49 1.758 16.438 3.541 25.483 4.891-8.8 10.283-20.345 12.53-25.483zM194.08 18.357q3.64.002 6.344 1.046 2.699 1.036 4.523 2.86c1.211 1.21 2.155 2.648 2.828 4.305q1.007 2.495 1.188 5.46.316 5.133-.949 9.922-1.265 4.788-4.268 8.507c-2.003 2.479-4.606 4.456-7.806 5.943q-4.805 2.231-11.565 2.231c-.548 0-1.142-.03-1.789-.078a14 14 0 0 1-1.722-.224l-2.372 13.374h-6.911l9.065-50.74c2.027-.846 4.255-1.487 6.68-1.934q3.635-.672 6.754-.672m-12.16 34.18c.498.096 1.038.163 1.607.187q.856.036 1.674.036 4.237 0 7.479-1.632c2.161-1.095 3.966-2.564 5.411-4.426q2.168-2.784 3.211-6.385c.692-2.406.961-4.915.799-7.545a14 14 0 0 0-.568-3.193 7.1 7.1 0 0 0-1.545-2.75q-1.074-1.188-2.828-1.893-1.751-.708-4.427-.708-1.857.001-3.395.339c-1.03.218-1.881.43-2.564.629zm56.899 5.87a30 30 0 0 1-.856-1.82 15 15 0 0 1-.726-2.122q-1.542 1.487-4.2 2.975-2.656 1.488-6.669 1.487c-2.179 0-4.069-.35-5.671-1.04q-2.409-1.042-4.006-2.902-1.602-1.851-2.462-4.383-.862-2.521-1.049-5.569a28.5 28.5 0 0 1 1.073-9.734q1.38-4.752 4.494-8.47 3.117-3.712 8.025-6.017 4.91-2.304 11.672-2.303 2.005 0 4.708.447 2.703.444 4.698 1.487l-4.284 23.327a62 62 0 0 0-.431 3.27 19.5 19.5 0 0 0-.059 3.266c.07 1.142.238 2.291.509 3.458q.402 1.742 1.27 3.749zm-11.4-5.35q3.12-.002 5.266-1.337 2.148-1.342 3.671-3.12-.002-1.262.098-2.642c.068-.913.174-1.844.312-2.78l3.326-18.43q-.383-.144-1.241-.223a18 18 0 0 0-1.528-.073q-4.232 0-7.551 1.632c-2.212 1.095-4.067 2.54-5.565 4.348-1.5 1.808-2.606 3.918-3.326 6.318s-.998 4.916-.836 7.54q.097 1.56.49 3.156c.265 1.07.683 2.007 1.253 2.823a6.8 6.8 0 0 0 2.203 2.008q1.346.78 3.428.78m42.822-34.548q.894 0 2.012.072 1.119.081 2.208.26c.724.127 1.391.248 1.991.375.603.12 1.056.26 1.364.405l-1.637 6.022q-1.525-.597-3.471-.895a25.5 25.5 0 0 0-3.733-.296c-1.04 0-2.067.073-3.07.224-1.007.15-1.875.344-2.603.592l-5.864 32.692h-6.908l6.63-37.148q2.907-1.042 6.285-1.669a36.8 36.8 0 0 1 6.796-.634M289.226 59c-3.712 0-6.489-.816-8.322-2.449q-2.752-2.456-3.039-7.134-.189-3.048.561-7.8l5.913-33.066 7.134-1.186-2.16 11.96h13.15l-1.055 5.798h-13.15l-3.036 17.087q-.676 3.492-.517 6.094c.1 1.633.62 2.812 1.556 3.525.936.72 2.442 1.076 4.522 1.076 1.436 0 2.834-.23 4.192-.7q2.037-.71 3.116-1.3l.88 5.864q-1.075.67-3.698 1.451-2.627.78-6.047.78m20.291-1.04h-6.908l6.63-37.148q3.353-1.042 7.289-1.669 3.935-.634 7.056-.634 3.342-.002 5.816.93 2.47.926 4.055 2.522c1.058 1.07 1.865 2.358 2.43 3.864q.846 2.268 1.011 4.945.105 1.707-.077 3.604a52 52 0 0 1-.509 3.821l-3.537 19.765h-6.91l3.259-18.278c.259-1.384.508-2.799.743-4.232q.35-2.157.232-4.087-.184-2.973-1.939-4.94-1.757-1.97-6.213-1.971a29 29 0 0 0-3.629.224c-1.179.15-2.158.344-2.935.592zm48.426.967c-2.524 0-4.729-.362-6.602-1.076q-2.82-1.079-4.791-2.974a12.85 12.85 0 0 1-3.019-4.42 16.5 16.5 0 0 1-1.221-5.351q-.32-5.197.943-10.03 1.262-4.825 3.93-8.544a19.85 19.85 0 0 1 6.696-5.907q4.024-2.187 9.3-2.189 3.046 0 5.287.78 2.238.781 3.695 2.116a9.3 9.3 0 0 1 2.233 3.084 10.4 10.4 0 0 1 .89 3.603c.143 2.328-.156 4.3-.898 5.907a11.4 11.4 0 0 1-3.094 4.051q-1.982 1.634-4.712 2.522a40 40 0 0 1-5.708 1.414q-2.981.517-6.048.708c-2.049.12-3.985.236-5.812.332-.027.393-.031.72-.016.968l.037.592c.07 1.137.272 2.22.607 3.229a6.54 6.54 0 0 0 1.688 2.678q1.187 1.15 3.195 1.82c1.34.448 3.074.665 5.205.665q1.41.002 2.919-.26a23 23 0 0 0 2.856-.665 34 34 0 0 0 2.401-.816c.7-.272 1.195-.532 1.476-.78l.956 5.865q-1.437.823-4.687 1.747c-2.166.617-4.734.931-7.706.931m-8.363-21.252q4.298-.147 7.841-.556 3.54-.41 6.077-1.409c1.694-.671 2.987-1.572 3.884-2.715q1.342-1.706 1.174-4.456a4.5 4.5 0 0 0-.347-1.415q-.308-.736-.976-1.372c-.446-.417-1.051-.768-1.809-1.04q-1.141-.407-2.776-.405-2.6-.001-4.798 1.112a13.6 13.6 0 0 0-3.868 2.933q-1.67 1.824-2.786 4.238a21.6 21.6 0 0 0-1.616 5.085m47.704-19.166q.893 0 2.012.072 1.119.081 2.208.26c.724.127 1.39.248 1.991.375.603.12 1.056.26 1.364.405l-1.637 6.022q-1.525-.597-3.471-.895a25.5 25.5 0 0 0-3.734-.296q-1.562-.001-3.07.224c-1.006.15-1.874.344-2.602.592l-5.864 32.692h-6.908l6.63-37.148q2.907-1.042 6.285-1.669a36.7 36.7 0 0 1 6.796-.634m15.06 34.62q1.56.001 3.137-.296 1.58-.298 2.764-.968a5.15 5.15 0 0 0 1.896-1.82c.473-.767.674-1.717.604-2.86q-.069-1.113-.493-1.964c-.283-.569-.712-1.107-1.286-1.602q-.866-.736-2.133-1.446a85 85 0 0 0-3.034-1.596 45 45 0 0 1-3.22-1.638 12.3 12.3 0 0 1-2.61-1.929 8.6 8.6 0 0 1-1.834-2.636q-.686-1.524-.819-3.682c-.228-3.713.924-6.7 3.461-8.949q3.805-3.384 11.455-3.386 3.568 0 6.323.708 2.756.709 3.831 1.3l-2.252 5.647q-1.078-.59-3.421-1.264-2.344-.663-5.169-.665-1.41-.002-2.805.297-1.394.297-2.499 1.003a5.07 5.07 0 0 0-1.745 1.856q-.635 1.154-.533 2.788.124 2.002 1.764 3.307c1.093.864 2.709 1.771 4.846 2.709a37 37 0 0 1 3.567 1.82c1.055.622 1.962 1.312 2.728 2.08a8.4 8.4 0 0 1 1.803 2.714q.653 1.562.784 3.713.192 3.12-.85 5.496a9.9 9.9 0 0 1-3.064 3.942q-2.022 1.56-4.872 2.34t-6.267.78q-2.527-.001-4.589-.34-2.065-.325-3.615-.78-1.55-.443-2.581-.924c-.688-.32-1.215-.58-1.572-.78l2.328-5.647q.536.3 1.494.743.956.445 2.283.89 1.328.443 2.905.743 1.58.298 3.29.296' />
    </g>
    <defs>
      <clipPath id='3e0c1efe0c7b2864522119bc98607158__a'>
        <path fill='#fff' d='M0 0h431v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivPartnersWhiteIcon);
export default ForwardRef;
