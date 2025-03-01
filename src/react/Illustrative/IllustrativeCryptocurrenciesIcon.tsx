import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeCryptocurrenciesIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M15.987 3.347C9.013 3.347 3.333 9.013 3.333 16s5.68 12.653 12.654 12.653c6.973 0 12.666-5.68 12.666-12.653 0-6.973-5.68-12.653-12.666-12.653Zm0 23.986c-6.24 0-11.32-5.08-11.32-11.32S9.747 4.68 15.987 4.68 27.32 9.76 27.32 16s-5.08 11.32-11.333 11.32v.013Z' />
      <path d='M19.4 15.88a2.602 2.602 0 0 0 .613-1.653c0-1.2-.826-2.214-1.933-2.507V9.333a.66.66 0 0 0-.667-.666.66.66 0 0 0-.666.666v2.294h-1.254V9.333a.66.66 0 0 0-.666-.666.66.66 0 0 0-.667.666v2.294a1.992 1.992 0 0 0-1.933 2v5.08c0 1.08.866 1.96 1.933 2v1.96a.66.66 0 0 0 .667.666.66.66 0 0 0 .666-.666v-1.96h1.254v1.96a.66.66 0 0 0 .666.666.66.66 0 0 0 .667-.666v-1.96a2.6 2.6 0 0 0 2.587-2.6c0-.947-.507-1.76-1.254-2.214l-.013-.013Zm-5.173-2.933h3.186c.707 0 1.267.573 1.267 1.266 0 .694-.573 1.267-1.267 1.267H13.56V13.6a.66.66 0 0 1 .667-.667v.014Zm3.84 6.413h-3.84a.66.66 0 0 1-.667-.667v-1.88h4.507c.706 0 1.266.574 1.266 1.267s-.573 1.267-1.266 1.267v.013Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCryptocurrenciesIcon);
export default ForwardRef;
