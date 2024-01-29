import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodAdvcashBlackIcon = (
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
      <path d='M28.615 51.584h-5.041l-1.901-5.055H12.17l-1.895 5.055H5.22l1.953-5.055H5.896L4 41.474h15.768l.631 1.67-1.579-4.198-1.895-5.069-1.91 5.07-.948 2.527H9.112l.977-2.528H5.896L4 33.877h12.925-4.897l2.183-5.687h5.428l2.183 5.687h8.028l-1.91 5.07h-4.18zM31.114 51.053c.287 0 .502-.172.588-.46l-.244-.1c-.043.215-.158.33-.344.33-.216 0-.36-.172-.36-.43 0-.274.144-.446.36-.446.172 0 .301.13.344.33l.244-.086a.56.56 0 0 0-.215-.33.56.56 0 0 0-.373-.13.6.6 0 0 0-.446.187.59.59 0 0 0-.186.46.7.7 0 0 0 .172.488c.115.13.273.187.46.187' />
      <path
        fillRule='evenodd'
        d='M31.085 51.642c-.345 0-.646-.115-.89-.36a1.18 1.18 0 0 1-.36-.875c0-.345.115-.647.36-.876a1.2 1.2 0 0 1 .89-.36c.344 0 .646.115.876.36.244.244.359.53.359.876 0 .344-.115.646-.36.876-.229.23-.53.359-.875.359m.746-.489c.202-.2.302-.46.302-.76 0-.302-.1-.547-.302-.748a1 1 0 0 0-.746-.301 1.03 1.03 0 0 0-1.049 1.048 1.03 1.03 0 0 0 1.048 1.063c.288 0 .546-.1.747-.302M38.768 51.555h-3.289l6.563-17.707h3.59l6.807 17.707h-3.59l-1.565-4.136h-7.066zm2.47-6.965h4.983l-2.556-6.807zM61.027 51.555v-3.418c-.445 2.283-1.68 3.662-4.02 3.662-2.413 0-4.812-1.939-4.812-6.204 0-4.136 2.413-6.074 4.811-6.074 2.341 0 3.562 1.35 4.021 3.618v-9.291h3.074v17.707zm-2.656-1.924c1.536 0 2.57-1.422 2.57-4.065 0-2.556-1.034-3.963-2.57-3.963-1.537 0-2.758 1.422-2.758 3.963-.014 2.657 1.22 4.065 2.758 4.065'
        clipRule='evenodd'
      />
      <path d='M72.459 51.555h-2.126l-5.07-11.805h3.376l3.015 7.698 3.074-7.698H77.7zM83.631 39.506c2.456 0 4.74 1.566 5.314 4.022l-2.815 1.034c-.402-2.169-1.393-3.074-2.685-3.074-1.58 0-2.614 1.465-2.614 4.136 0 2.858 1.25 4.136 2.642 4.136 1.436 0 2.198-1.106 2.671-3.303l2.815 1.034c-.445 2.614-2.815 4.294-5.313 4.294-3.418 0-6.233-2.527-6.233-6.16-.014-3.591 2.8-6.119 6.218-6.119M105.331 42.91c0 .632.589.962 2.484 1.364 3.016.632 4.036 1.724 4.036 3.677 0 2.053-1.293 3.82-4.582 3.82-2.455 0-4.15-.92-5.026-2.787l2.097-1.177c.589 1.134 1.68 1.623 3.001 1.623 1.25 0 1.752-.402 1.752-1.034 0-.69-.589-1.092-2.484-1.494-2.743-.56-4.036-1.608-4.036-3.805 0-2.356 1.939-3.62 4.323-3.62 1.982 0 3.849.733 4.725 2.787l-2.097 1.062c-.589-1.134-1.465-1.565-2.499-1.565-1.134.043-1.694.488-1.694 1.149M116.446 51.555h-3.073V33.848h3.073v9.78c.445-2.614 1.68-4.108 4.021-4.108 1.838 0 3.547 1.25 3.547 3.706v8.329h-3.073v-7.18c0-.546-.172-1.035-.474-1.537-.301-.503-.804-.733-1.493-.733-1.896 0-2.528 1.91-2.528 2.83z' />
      <path
        fillRule='evenodd'
        d='m93.038 44.217-2.815-1.034a4.3 4.3 0 0 1 .732-1.637 4.5 4.5 0 0 1 1.25-1.15 5.5 5.5 0 0 1 1.651-.66 8.5 8.5 0 0 1 1.94-.215c1.78 0 3.058.287 3.833.847.776.575 1.164 1.508 1.164 2.815v8.387h-3.088l.014-1.867v-.546l-.99 1.206a3.77 3.77 0 0 1-1.843 1.237l-.005.002a.1.1 0 0 0-.02.01 5.1 5.1 0 0 1-1.35.202c-1.019 0-1.852-.273-2.47-.833-.617-.56-.933-1.321-.933-2.298 0-.876.187-1.536.575-1.967s.919-.776 1.594-1.006 1.479-.445 2.412-.632a20 20 0 0 0 3.03-.876V43.7c0-.632-.157-1.092-.473-1.393-.316-.302-.833-.445-1.566-.445q-1.314 0-1.81.56c-.315.33-.588.933-.832 1.795m.43 3.892c0 .445.13.79.403 1.062.273.273.646.403 1.134.403.201 0 .445-.044.718-.144s.546-.244.79-.43a3.5 3.5 0 0 0 1.206-1.81v-1.896q-.609.186-1.121.335h-.002c-1.073.315-1.83.538-2.266.843q-.861.624-.861 1.637'
        clipRule='evenodd'
      />
      <path d='m29.85 41.474-1.91 5.055h-1.264l-1.939-5.055z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodAdvcashBlackIcon);
export default ForwardRef;
