import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinXlBoldIcon = (
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
      <path d='M12 8.25q-2.672 0-4.875 1.313-2.203 1.264-3.562 3.562Q2.25 15.422 2.25 18q0 2.579 1.313 4.875 1.359 2.297 3.562 3.563Q9.328 27.75 12 27.75t4.875-1.312q2.203-1.266 3.563-3.563Q21.75 20.579 21.75 18q0-2.578-1.312-4.875-1.36-2.297-3.563-3.562Q14.672 8.25 12 8.25M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m1.5-18.75q0 .657-.422 1.078-.421.422-1.078.422-.656 0-1.078-.422-.422-.421-.422-1.078 0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078M12 25.125q-1.125-.046-1.875-.75-.703-.75-.75-1.875 0-.188.047-.422l-5.156-3.515q-.844-.657-.328-1.547.656-.844 1.593-.328l5.157 3.562q.562-.375 1.312-.375 1.125.046 1.875.75.703.75.75 1.875-.047 1.125-.75 1.875-.75.704-1.875.75M9 13.5q0 .657-.422 1.078Q8.157 15 7.5 15q-.656 0-1.078-.422Q6 14.157 6 13.5q0-.656.422-1.078Q6.843 12 7.5 12t1.078.422T9 13.5m9.75 6q-.656 0-1.078-.422-.422-.421-.422-1.078 0-.656.422-1.078.421-.422 1.078-.422t1.078.422q.422.421.422 1.078t-.422 1.078q-.421.422-1.078.422m-.75-6q0 .657-.422 1.078Q17.157 15 16.5 15q-.656 0-1.078-.422Q15 14.157 15 13.5q0-.656.422-1.078Q15.843 12 16.5 12t1.078.422Q18 12.843 18 13.5' />
    </g>
    <defs>
      <clipPath id='52c082364acb9bbb126555f55ac343a3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinXlBoldIcon);
export default ForwardRef;
