import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 18v1.875A1.11 1.11 0 0 1 1.125 21C.469 21 0 20.531 0 19.875V18C0 11.39 5.344 6 12 6c3.61 0 6.89 1.64 9.094 4.219a1.17 1.17 0 0 1-.14 1.594 1.17 1.17 0 0 1-1.595-.141C17.58 9.609 14.953 8.25 12 8.25c-5.39 0-9.75 4.406-9.75 9.75m21.469-2.437c.187.796.281 1.593.281 2.437v1.922a1.14 1.14 0 0 1-1.125 1.125 1.11 1.11 0 0 1-1.125-1.125v-1.875c0-.703-.094-1.406-.234-2.063-.141-.562.28-1.171.89-1.312.61-.14 1.172.281 1.313.89M12 9.75c4.547 0 8.25 3.703 8.25 8.25v1.172c0 1.312-.094 2.625-.234 3.89-.094.563-.563.938-1.125.938-.657 0-1.22-.61-1.125-1.266A30 30 0 0 0 18 19.172V18c0-3.281-2.719-6-6-6-.562 0-1.078.094-1.594.234-.469.141-1.031 0-1.36-.375-.515-.562-.327-1.453.376-1.687A7.8 7.8 0 0 1 12 9.75m-4.969 3.234a1.27 1.27 0 0 1 0 1.594A6.13 6.13 0 0 0 6 18v1.172c0 1.36-.187 2.719-.469 4.031-.093.469-.562.797-1.031.797-.75 0-1.312-.703-1.125-1.453a16 16 0 0 0 .375-3.375V18c0-1.875.61-3.656 1.688-5.016.421-.515 1.171-.468 1.593 0M16.5 18v1.172c0 1.875-.187 3.75-.562 5.531a1 1 0 0 1-.985.797c-.656 0-1.172-.61-1.031-1.266.328-1.64.515-3.328.515-5.062V18c0-1.312-1.124-2.437-2.437-2.437-1.36 0-2.437 1.124-2.437 2.437v1.172c0 1.922-.282 3.797-.75 5.625-.141.422-.516.703-.985.703-.703 0-1.172-.656-.984-1.36.422-1.593.656-3.28.656-4.968V18a4.501 4.501 0 0 1 9 0M12 16.875c.61 0 1.125.516 1.125 1.125v1.172c0 3.094-.61 6.14-1.687 9.047l-.282.703c-.234.562-.89.89-1.453.656-.562-.234-.89-.89-.656-1.453l.281-.703a22.6 22.6 0 0 0 1.547-8.25V18c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='ffa840bda06d4249bba00ec3adfd213e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintXlBoldIcon);
export default ForwardRef;
