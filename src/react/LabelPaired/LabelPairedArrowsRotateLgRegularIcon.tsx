import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowsRotateLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2.695 13.742h.04c-.105.313-.326.482-.665.508-.442-.052-.638-.287-.586-.703.47-1.98 1.485-3.594 3.047-4.844 1.537-1.25 3.36-1.9 5.469-1.953 1.615.026 3.073.417 4.375 1.172a8.656 8.656 0 0 1 3.125 3.086V8.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v3.75c-.026.39-.234.599-.625.625h-3.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h2.11a7.34 7.34 0 0 0-2.696-2.734C12.67 8.365 11.406 8.026 10 8c-1.797.026-3.36.573-4.687 1.64-1.303 1.042-2.175 2.41-2.618 4.102m14.61 3.555v-.04c.078-.312.286-.481.625-.507.442.052.638.287.586.703-.47 1.98-1.472 3.594-3.008 4.844-1.563 1.25-3.399 1.9-5.508 1.953-1.615-.026-3.073-.417-4.375-1.172A8.759 8.759 0 0 1 2.5 20.031v2.344c-.026.39-.234.599-.625.625-.365-.026-.573-.234-.625-.625v-3.75c.052-.39.26-.599.625-.625h3.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.11a7.34 7.34 0 0 0 2.696 2.734c1.12.651 2.383.99 3.789 1.016 1.797-.026 3.36-.573 4.688-1.64 1.302-1.042 2.174-2.396 2.617-4.063' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateLgRegularIcon);
export default ForwardRef;
