import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.36 11.766h-.094q-.048 0-.094-.047 0-.047.047-.047a.234.234 0 0 1 .281 0q.095.047.14.14-.046.048-.14.047-.046 0-.094-.046-.047 0-.047-.047m-1.032.093q-.094 0-.14-.046 0-.095.14-.141a.234.234 0 0 1 .281 0q.048 0 0 .047 0 .047-.093.047h-.047l-.047.046q-.047.048-.094.047m10.36 13.079q.75.843.703 1.359-.048.563-.61.89-.327.188-.703.375a4.45 4.45 0 0 0-1.687 1.125Q16.31 29.907 15.094 30q-1.22.094-1.875-1.078a.58.58 0 0 1-.094-.328q-.843 0-1.5-.094a7.4 7.4 0 0 0-1.125-.094 7.5 7.5 0 0 0-1.36.188q-.468.094-.89.14-.375.75-1.219.938-1.171.234-2.625-.516a6.4 6.4 0 0 0-1.922-.468 35 35 0 0 1-.843-.094Q.984 28.5.703 28.03q-.28-.514.094-1.5.093-.375 0-.89 0-.048-.047-.094a3.4 3.4 0 0 1-.047-.563q0-.281.14-.562.376-.563.891-.703.048 0 .094-.047.422-.094.703-.328a2 2 0 0 0 .281-.375q.235-.329.47-.563-.141-1.218.28-2.484a11.6 11.6 0 0 1 1.266-2.578 27 27 0 0 1 1.453-1.969q1.032-1.5 1.078-3.047 0-.328-.046-.89a14 14 0 0 1 0-2.297q.093-1.22.89-2.157T11.016 6q1.78.047 2.53 1.031.75.985.938 2.344.14 1.36.094 2.531v.235q0 1.031.422 1.828.47.797 1.078 1.5l.047.047q.563.656 1.172 1.547a8.3 8.3 0 0 1 .984 1.968q.75 1.735.188 3.703l.187.094a.7.7 0 0 1 .188.14q.422.423.515 1.032v.047q.094.563.328.89M10.5 10.078a1.7 1.7 0 0 0-.14 1.031q.28.048.609.235-.094-.469.094-.797.186-.329.468-.281.281 0 .422.422.141.374 0 .843a.3.3 0 0 1-.14.14l-.047.048q.469.187.562.234.61-.75.235-1.875-.423-.75-1.032-.75-.656 0-1.031.75m-1.922-.515q-.656.093-.797.937-.14.891.422 1.5.375-.281.281-.234v-.047q-.28-.282-.28-.75.046-.469.327-.563.234 0 .375.328.14.282.094.61.235-.14.469-.235.047-.655-.235-1.125-.28-.42-.656-.421m-.656 2.859v-.047q-.281.235-.188.61t.704.703q.234.14.421.328.236.233.516.375.187.093.469.093.797 0 1.265-.421.236-.189.516-.282.844-.281 1.031-.844.188-.609-.469-.843a3 3 0 0 0-.562-.188 2.6 2.6 0 0 1-.516-.234q-.703-.469-1.218-.422-.89.14-1.22.61-.046 0-.046.046a5 5 0 0 0-.422.281 2 2 0 0 0-.281.235m.187 15.656q0-.468-.328-1.031a11 11 0 0 0-.797-1.078 7 7 0 0 1-.796-1.125l-.938-1.688q-.468-.656-1.031-.75-.516-.093-.797.328a3.5 3.5 0 0 0-.328.375l-.375.47a1.7 1.7 0 0 1-.703.374l-.188.094a1 1 0 0 0-.703.515q-.187.375-.047.938v.14q.141.516 0 .985-.281.938-.094 1.266.33.468 1.5.515 1.031 0 2.063.516 1.172.562 2.297.469 1.077-.141 1.265-1.313m-.093-1.219q1.359.844 2.812.657a5.6 5.6 0 0 0 2.578-1.032v-.047q.234-.75.281-1.312.048-1.078.235-1.828.188-.938.984-1.313.094-.702.61-.797.468-.093 1.218.235 1.266.562 1.032 1.219H18q.141-.61-.375-.985A3.4 3.4 0 0 0 16.547 21a3.43 3.43 0 0 0-.047-1.687 5.3 5.3 0 0 0-.703-1.594q-.469-.75-.938-1.172-.187 0 .141.328.469.422.984 1.547.516 1.125.094 2.437a1.6 1.6 0 0 0-.515-.093 9 9 0 0 0-.516-1.828q-.328-.798-.563-1.172-.469-.798-.937-2.11a25 25 0 0 1-.844-2.39q-.328.468-1.031.703l-.469.234-.281.188Q9.89 15 8.953 14.344a1.5 1.5 0 0 1-.234-.188 1.5 1.5 0 0 0-.375-.281 2 2 0 0 0-.281-.234 8.5 8.5 0 0 1-.563 2.343 31 31 0 0 1-.937 2.204 63 63 0 0 0-.329.75 7.9 7.9 0 0 0-.656 2.906q-.703-1.078-.469-2.157.235-1.125.61-1.734.609-1.172.375-.984a14 14 0 0 0-.703 1.265q-.375.704-.563 1.547a3.6 3.6 0 0 0 0 1.64q.234.797 1.172 1.407.047 0 .656.422.61.421 1.125 1.078.516.704.375 1.172-.234.469-.797.422.376.422.657.937m12.093-.562q.048-.329-.656-1.125a2.07 2.07 0 0 1-.375-1.031q-.093-.61-.422-.938a1.21 1.21 0 0 0-.984-.234h-.094q-.28.328-.797.562-.515.281-.984.188-.845-.328-.89-1.36h-.048q-.467.282-.656.985-.14.75-.187 1.828a5.5 5.5 0 0 1-.282 1.312q-.094.282-.187.61-.282.89-.047 1.687.562.985 1.594.89 1.031-.093 2.062-1.171.844-.891 1.828-1.266t1.125-.937m-12-13.313q-.187-.28-.046-.328.093.047.14.14 0 .047.047.095.141.14.375.328.422.421 1.172.469.796-.095 1.36-.47.233-.14.515-.374a.6.6 0 0 0 .14-.094l.141-.14q.047-.094.14-.094.189.046-.14.28-.281.282-.703.517a2.96 2.96 0 0 1-1.453.468q-.844-.046-1.313-.469l-.328-.328z' />
    </g>
    <defs>
      <clipPath id='681ff170d48d69c4__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxXlIcon);
export default ForwardRef;
