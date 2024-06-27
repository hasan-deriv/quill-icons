import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIosMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.406 12.25c0 1.438-.719 2.344-1.937 2.344-1.188 0-1.906-.906-1.906-2.344s.718-2.344 1.906-2.344c1.219 0 1.937.906 1.937 2.344M18 8.406v7.219c0 .563-.031 1.469-.344 2.25-.156.406-.5.969-1 1.344-.312.218-.656.437-1.125.593-.531.157-1.156.188-1.937.188H6.375c-.781 0-1.406-.031-1.937-.187-.47-.157-.813-.375-1.125-.594-.5-.375-.844-.938-1-1.344C2 17.094 2 16.188 2 15.625V8.406c0-.562 0-1.469.313-2.25.156-.406.5-.968 1-1.343.312-.25.656-.47 1.124-.594C4.97 4.062 5.595 4 6.376 4h7.219c.781 0 1.406.063 1.937.219.469.156.813.375 1.125.593.5.375.844.938 1 1.344.313.782.344 1.688.344 2.25m-12.844 6.75v-3.469h-.718v3.47zm.032-4.437a.414.414 0 0 0-.407-.406.414.414 0 0 0-.406.406c0 .219.188.406.406.406a.414.414 0 0 0 .407-.406m5.968 1.531c0-1.844-1.031-3-2.687-3-1.625 0-2.656 1.156-2.656 3s1.03 3 2.656 3c1.656 0 2.687-1.156 2.687-3m4.656 1.25c0-.812-.5-1.312-1.687-1.562l-.656-.157c-.781-.156-1.094-.469-1.094-.937 0-.594.531-.938 1.281-.938s1.25.375 1.313 1.031h.719c-.032-1-.876-1.687-2.032-1.687-1.187 0-2.031.688-2.031 1.625 0 .844.5 1.375 1.656 1.625l.656.125c.782.188 1.126.5 1.126 1 0 .563-.594.969-1.376.969-.812 0-1.406-.375-1.5-1h-.718c.062 1 .937 1.656 2.187 1.656 1.313 0 2.156-.656 2.156-1.75' />
    </g>
    <defs>
      <clipPath id='9419a99eb23c3dbc289097037b89645d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIosMdIcon);
export default ForwardRef;
