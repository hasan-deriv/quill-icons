import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHarmonyOsMdIcon = (
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
      <path d='M5.25 4h9.469A3.28 3.28 0 0 1 18 7.281v9.469c0 1.813-1.469 3.25-3.281 3.25H5.25A3.23 3.23 0 0 1 2 16.75V7.281C2 5.47 3.438 4 5.25 4m.625 3.688v3.593h.719V9.75h1.562v1.531h.688V7.687h-.688v1.407H6.594V7.688zm4.875 0v3.593h.688V9.5l-.063-.594h.063l.937 1.594h.406l.969-1.594h.031l-.031.594v1.781h.688V7.687h-.688l-1.156 1.875h-.031l-1.126-1.874zm1.406 8.687c.156.031.313.063.469.063s.313-.032.469-.063c.156-.062.281-.125.406-.219.125-.093.219-.187.313-.312.062-.156.124-.313.124-.5a.9.9 0 0 0-.093-.406.8.8 0 0 0-.188-.313c-.094-.094-.219-.156-.344-.219-.124-.062-.25-.125-.406-.187l-.219-.063c-.218-.062-.374-.156-.5-.219-.093-.062-.124-.156-.124-.28 0-.095.03-.188.156-.25.094-.095.219-.126.375-.126s.281.063.375.125a.74.74 0 0 1 .187.281l.656-.25c-.03-.093-.093-.156-.156-.25a.56.56 0 0 0-.219-.25.7.7 0 0 0-.374-.187c-.126-.062-.282-.062-.47-.062-.187 0-.374 0-.5.062a1.7 1.7 0 0 0-.405.219c-.094.094-.188.187-.25.312a.87.87 0 0 0 0 .781c.062.094.124.188.218.282.063.062.156.156.281.187a1 1 0 0 0 .313.156l.219.063c.156.063.25.094.344.156.093.031.187.063.25.125a.7.7 0 0 1 .124.156c0 .032.032.094.032.157 0 .094-.031.156-.063.187a.6.6 0 0 1-.125.156c-.062.032-.094.063-.187.063-.063.031-.125.031-.219.031a.64.64 0 0 1-.469-.187.68.68 0 0 1-.25-.438l-.687.25c.062.156.125.313.219.438.093.125.187.219.312.312.125.094.281.157.406.219m-4.781.063c.25 0 .5-.063.719-.157.219-.093.406-.218.594-.406.156-.156.28-.375.374-.594s.126-.469.126-.719c0-.28-.032-.53-.126-.75a1.9 1.9 0 0 0-.374-.593c-.188-.156-.376-.313-.594-.406a1.8 1.8 0 0 0-.719-.126c-.25 0-.5.032-.719.126-.25.093-.437.25-.593.406a1.9 1.9 0 0 0-.375.594 1.9 1.9 0 0 0-.157.75c0 .25.063.5.157.718.093.219.218.438.375.594.156.188.343.313.593.406.219.094.469.157.719.157m0-.657q-.234 0-.469-.094c-.125-.062-.25-.124-.375-.25a1.1 1.1 0 0 1-.25-.374 1.46 1.46 0 0 1 0-1.031c.063-.126.157-.282.25-.376.125-.094.25-.187.375-.25q.235-.094.469-.094a1 1 0 0 1 .438.094c.156.063.28.156.375.25.124.094.187.25.25.375a1.46 1.46 0 0 1 0 1.031c-.063.157-.126.282-.25.376-.094.124-.22.187-.376.25a1 1 0 0 1-.437.093m-1.344.969v.625h2.625v-.625z' />
    </g>
    <defs>
      <clipPath id='eca309556c79be0f6f9baff5fd103fb5__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHarmonyOsMdIcon);
export default ForwardRef;
