import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMexicoIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#4CAF50' d='M2 0h6v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2' />
    <path fill='#fff' d='M16 0H8v16h8z' />
    <path fill='#F44336' d='M16 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6z' />
    <path fill='#FFCA28' d='M12.714 8.376 12 8.738v.363h.357z' />
    <path fill='#732D37' d='m11.718 7.56-.395.62-.066.203 1.026-.241z' />
    <path
      fill='#874150'
      d='M12.357 6.563s.357-.725-.357-1.087c0 0 2.498-.363 2.141 2.9-.234-.19-.582-.538-.706-.816l-1.078-.634z'
    />
    <path fill='#732D37' d='m12 7.288 1.784 1.088-.714.362L12 7.651z' />
    <path
      fill='#783C46'
      d='M11.286 6.2a.36.36 0 0 1 .357.363.72.72 0 0 0-.131.82l.08.165q.051.102.131.184l.99 1.007v-.501c0-.625-.142-1.24-.417-1.798a1.07 1.07 0 0 0-.958-.602h-.052z'
    />
    <path
      fill='#9B4B5A'
      d='M13.435 7.56c.119.355.372.68.706.816.357-3.263-2.141-2.9-2.141-2.9 1.784 0 1.435 2.084 1.435 2.084'
    />
    <path
      fill='#00C3A0'
      d='M11.822 9.826c0 .1.08.181.178.181a.18.18 0 0 0 .178-.181v-.55a2.8 2.8 0 0 0 1.728-.767.183.183 0 0 0 .009-.256.177.177 0 0 0-.252-.01A2.42 2.42 0 0 1 12 8.92c-.61 0-1.2-.24-1.663-.677a.177.177 0 0 0-.252.01.183.183 0 0 0 .01.256c.482.456 1.09.725 1.727.767z'
    />
    <path
      fill='#42A5F5'
      d='M12 10.007c-.457 0-.9-.136-1.281-.393l.197-.302a1.96 1.96 0 0 0 2.168 0l.197.302c-.38.257-.824.393-1.281.393'
    />
    <path
      fill='#66BB6A'
      d='M9.324 7.65c0 1.5 1.2 2.72 2.676 2.72s2.676-1.22 2.676-2.72h.357c0 1.7-1.36 3.082-3.033 3.082S8.967 9.35 8.967 7.651zm1.3-1.848.165.322c-.044.023-.062.089-.05.135.004.02.014.063.101.063.219 0 .427.13.494.311.03.077.073.276-.144.473-.235.213-.375.373-.297.463a.5.5 0 0 0 .143.064c.16.055.46.157.417.537-.027.239-.237.405-.522.412h-.023c-.472 0-1.038-.403-1.188-1.301l.352-.06c.125.747.577 1 .849.999.083-.002.17-.032.177-.091.008-.072.01-.089-.177-.153-.101-.035-.216-.074-.297-.168-.326-.379.116-.78.328-.972.037-.034.053-.063.049-.074-.012-.03-.082-.078-.16-.078-.227 0-.4-.13-.45-.339a.49.49 0 0 1 .234-.543'
    />
    <path
      fill='#FFA726'
      d='M12.178 10.188h-.357a.36.36 0 0 1-.356-.362c0-.2.16-.363.357-.363h.356a.36.36 0 0 1 .357.363c0 .2-.16.362-.357.362'
    />
    <path
      fill='#FFCA28'
      d='M10.748 10.006c.134 0 .242.11.242.246a.244.244 0 0 1-.242.246.244.244 0 0 1-.242-.246c0-.136.108-.246.242-.246m2.53 0c.133 0 .242.11.242.246a.244.244 0 0 1-.243.246.244.244 0 0 1-.242-.246c0-.136.109-.246.242-.246m-3.4-.657c.134 0 .243.11.243.246a.244.244 0 0 1-.243.246.244.244 0 0 1-.242-.246c0-.136.109-.246.242-.246m4.269 0c.134 0 .242.11.242.246a.244.244 0 0 1-.242.246.244.244 0 0 1-.242-.246c0-.136.108-.246.242-.246m-4.804-.868c.134 0 .242.11.242.246a.244.244 0 0 1-.242.246.244.244 0 0 1-.242-.246c0-.136.108-.246.242-.246m5.34 0c.133 0 .242.11.242.246a.244.244 0 0 1-.242.246.244.244 0 0 1-.242-.246c0-.136.108-.246.242-.246m-3.397-2.643.236.218c.057.055.075.17-.025.22-.127.061-.477.24-.553.28l-.014.007v-.362z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMexicoIcon);
export default ForwardRef;
