import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodLitecoinBlackIcon = (
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
      <path d='M28.075 26a14.078 14.078 0 1 0 0 28.156 14.078 14.078 0 0 0 0-28.156m.228 14.541-1.465 4.941h7.833a.402.402 0 0 1 .385.515l-.681 2.346a.54.54 0 0 1-.518.388H21.894l2.023-6.831-2.238.681.494-1.597 2.24-.681 2.84-9.597a.534.534 0 0 1 .515-.391h3.03a.402.402 0 0 1 .39.51l-2.385 8.116 2.238-.681-.48 1.624zM54.832 30.16a1.072 1.072 0 1 1 .212 2.134 1.072 1.072 0 0 1-.212-2.135M49.416 30.274h.879c.17 0 .272.075.245.272l-2.285 17.93a.263.263 0 0 1-.3.262h-.871c-.18 0-.239-.092-.218-.262l2.254-17.937a.28.28 0 0 1 .296-.265M53.997 35.443h.868c.19 0 .249.092.242.27l-1.604 12.763a.272.272 0 0 1-.317.262h-.872c-.163 0-.265-.089-.245-.262l1.628-12.77a.27.27 0 0 1 .3-.263' />
      <path
        fillRule='evenodd'
        d='M93.125 35.232a4.96 4.96 0 0 0-4.928 3.77 26 26 0 0 0-.541 3.085 27 27 0 0 0-.245 3.085 3.75 3.75 0 0 0 1.086 2.725q1.062 1.02 2.912 1.021a4.96 4.96 0 0 0 3.13-1.021 4.88 4.88 0 0 0 1.77-2.724 25 25 0 0 0 .541-3.086 28 28 0 0 0 .242-3.112 3.59 3.59 0 0 0-1.073-2.725 4.03 4.03 0 0 0-2.894-1.018m2.462 5.616a68 68 0 0 0-.15 1.24q-.246 1.977-.436 2.822a3.58 3.58 0 0 1-1.25 2.044 3.42 3.42 0 0 1-2.206.762 2.58 2.58 0 0 1-2.748-2.724q.01-.821.122-1.635.124-.974.15-1.24c.163-1.263.31-2.206.436-2.819a3.6 3.6 0 0 1 1.25-2.043 3.44 3.44 0 0 1 2.207-.763 2.58 2.58 0 0 1 2.748 2.724q-.013.819-.123 1.632'
        clipRule='evenodd'
      />
      <path d='M101.216 35.443h.869c.17 0 .241.092.218.262l-1.604 12.77a.28.28 0 0 1-.094.196.28.28 0 0 1-.206.067h-.872c-.163 0-.269-.078-.245-.262l1.635-12.77a.28.28 0 0 1 .299-.263M113.098 36.196q-.898-.939-2.531-.937a4.7 4.7 0 0 0-1.958.409 4 4 0 0 0-1.525 1.226q-.109.103-.109-.055l.136-1.134c.02-.16-.051-.262-.218-.262h-.869a.27.27 0 0 0-.205.067.27.27 0 0 0-.094.195l-1.604 12.77c-.021.168.037.263.218.263h.872a.28.28 0 0 0 .299-.262l1.168-9.15a3.73 3.73 0 0 1 1.199-2.044 3.2 3.2 0 0 1 2.156-.783 2.4 2.4 0 0 1 1.842.739c.477.538.722 1.243.681 1.961q.006.293-.027.583l-1.114 8.694a.21.21 0 0 0 .041.184.26.26 0 0 0 .204.078h.869a.28.28 0 0 0 .206-.067.3.3 0 0 0 .066-.088.25.25 0 0 0 .027-.107l1.117-8.912c.038-.34.055-.617.055-.79a3.55 3.55 0 0 0-.902-2.578M102.708 30.28a1.073 1.073 0 1 0-.996 1.903 1.073 1.073 0 0 0 .996-1.902M78.59 36.274a4.97 4.97 0 0 1 3.157-1.042c1.061-.061 2.103.3 2.898 1.005a3.58 3.58 0 0 1 1.076 2.724v.31a.16.16 0 0 1-.099.146.2.2 0 0 1-.06.01H84.54a.2.2 0 0 1-.145-.06.2.2 0 0 1-.056-.147v-.02a2.58 2.58 0 0 0-2.752-2.725c-.8-.01-1.58.26-2.203.763a3.58 3.58 0 0 0-1.236 2.057c-.13.613-.273 1.556-.436 2.82-.02.176-.082.697-.15 1.239a14 14 0 0 0-.123 1.635 2.582 2.582 0 0 0 2.749 2.724 3.4 3.4 0 0 0 2.203-.763 3.6 3.6 0 0 0 1.253-2.043.3.3 0 0 1 0-.051.17.17 0 0 1 .167-.126h1.073a.12.12 0 0 1 .095.046.12.12 0 0 1 .024.104q-.036.152-.072.29a4.85 4.85 0 0 1-1.767 2.723c-.897.687-2 1.047-3.13 1.022q-1.85 0-2.911-1.022a3.72 3.72 0 0 1-1.09-2.724q.04-1.55.245-3.085.188-1.558.545-3.086a4.92 4.92 0 0 1 1.767-2.724' />
      <path
        fillRule='evenodd'
        d='M72.961 36.26a4.03 4.03 0 0 0-2.898-1.021 4.96 4.96 0 0 0-4.927 3.77 26 26 0 0 0-.542 3.085 21 21 0 0 0-.245 3.085 3.75 3.75 0 0 0 1.086 2.725q1.064 1.02 2.912 1.021a4.96 4.96 0 0 0 3.13-1.021 4.87 4.87 0 0 0 1.77-2.725q.036-.137.072-.29a.12.12 0 0 0-.066-.137.1.1 0 0 0-.053-.012h-1.083a.17.17 0 0 0-.167.126v.051a3.58 3.58 0 0 1-1.25 2.043c-.628.5-1.411.762-2.213.743a2.58 2.58 0 0 1-2.748-2.725q.01-.716.098-1.427l7.863-2.434a.32.32 0 0 0 .252-.317c.048-.409.079-1.1.085-1.808a3.74 3.74 0 0 0-1.076-2.731m-.31 3.675a.18.18 0 0 1-.129.167l-6.518 2.012v-.027c.164-1.263.31-2.207.436-2.82a3.6 3.6 0 0 1 1.25-2.043 3.44 3.44 0 0 1 2.207-.763 2.68 2.68 0 0 1 1.995.777c.804.787.807 1.628.76 2.697'
        clipRule='evenodd'
      />
      <path d='M61.486 47.298a.2.2 0 0 0-.11.027c-.558.262-1.624.514-2.19.037-.405-.392-.32-1.093-.226-1.878l.012-.097.953-7.672h2.725a.34.34 0 0 0 .218-.062.3.3 0 0 0 .081-.204l.075-.606c.01-.167-.061-.262-.218-.262h-2.724l.518-4.223c.023-.15-.017-.262-.218-.262h-.841a.273.273 0 0 0-.3.262l-.382 2.98-.163 1.345-1.151 9.351c-.143 1.23.112 2.214 1.11 2.67.882.323 1.852.31 2.724-.038a.32.32 0 0 0 .201-.255l.11-.882a.21.21 0 0 0-.204-.231' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodLitecoinBlackIcon);
export default ForwardRef;
