import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpXlRegularIcon = (
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
      <path d='m13.547 9.844-.235.75q-.796 2.906-3.374 4.594l-.141.093a2.8 2.8 0 0 0-.938.89q-.469.517-1.03.188-.563-.421-.188-1.03A4.2 4.2 0 0 1 9 14.015l.14-.094q2.063-1.359 2.72-3.703l.234-.797q.328-1.078 1.219-1.594.936-.516 2.015-.234a2.84 2.84 0 0 1 1.594 1.218q.516.938.234 2.016l-.187.75a11 11 0 0 1-.75 1.922H21q1.266.047 2.11.89.843.844.89 2.11-.047 1.266-.89 2.11.14.421.14.89-.047 1.359-.984 2.203.234.563.234 1.172-.093 1.734-1.5 2.578v.047q-.047 1.266-.89 2.11-.844.843-2.11.89h-4.219q-1.547 0-2.906-.89l-1.781-1.172a5.7 5.7 0 0 1-1.5-1.5q-.282-.61.234-1.032.61-.328 1.031.188.422.656 1.079 1.078l1.78 1.219q.939.609 2.11.609H18q.657 0 1.078-.422.422-.421.422-1.078 0-.187-.047-.328-.047-.61.516-.844.984-.375 1.031-1.453 0-.516-.328-.89a.94.94 0 0 1-.14-.657.7.7 0 0 1 .421-.469q.75-.42.797-1.359 0-.421-.187-.75-.282-.562.234-.984.656-.422.703-1.266 0-.656-.422-1.078Q21.657 15 21 15h-6.047q-.422 0-.656-.375-.188-.375.047-.75.75-1.265 1.172-2.672l.187-.797q.188-.984-.797-1.36-.984-.186-1.36.798M1.5 16.5V27h3V16.5zm-1.5 0q0-.656.422-1.078Q.843 15 1.5 15h3q.657 0 1.078.422Q6 15.843 6 16.5V27q0 .657-.422 1.078-.421.422-1.078.422h-3q-.656 0-1.078-.422Q0 27.657 0 27z' />
    </g>
    <defs>
      <clipPath id='2d352c6e128ce892d23890f46f5b1bd0__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpXlRegularIcon);
export default ForwardRef;
