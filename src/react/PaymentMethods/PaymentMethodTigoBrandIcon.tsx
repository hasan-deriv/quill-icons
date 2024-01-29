import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodTigoBrandIcon = (
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
    <g fill='#396BB4'>
      <path d='M86.708 12.58c3.344-1.657 7.36-1.714 10.82-.373 1.996.794 3.899 2.024 5.137 3.812 1.016 1.54.814 3.45.784 5.2-1.036-1.102-2.072-2.23-3.352-3.06-2.542-1.755-5.74-2.423-8.79-2.076-3.726.278-7.371 2.08-9.606 5.114.032-1.486-.244-3.062.393-4.463.848-1.977 2.753-3.237 4.614-4.154M44.96 15.569c1.776-.445 3.773.687 4.241 2.47.683 2.12-1.123 4.531-3.34 4.507-1.925.116-3.627-1.643-3.598-3.544-.03-1.593 1.153-3.072 2.697-3.433M27.475 19.06c.786-.405 1.697-.286 2.548-.296a508 508 0 0 0 0 5.507c2.8-.008 5.598-.004 8.398-.002-.043 1.016.074 2.042-.081 3.05-.33 1.429-1.824 2.276-3.217 2.298-1.7.024-3.401.016-5.102.002-.01 3.276-.002 6.553-.002 9.83-.002 1.277.34 2.714 1.46 3.47 1.134.754 2.568.623 3.86.542 1.076-.063 2.108-.395 3.076-.853-.075 1.435.272 3.006-.538 4.298-.775 1.272-2.32 1.77-3.726 1.917-1.935.155-3.944-.044-5.732-.835-1.744-.746-3.113-2.275-3.75-4.053-.528-1.433-.689-2.973-.667-4.49q.001-7.148 0-14.295c.02-1.212.157-2.494.86-3.524.686-1.013 1.504-2 2.613-2.566M91.725 23.755c2.48-.149 5.04.409 7.12 1.8 2.906 1.93 4.666 5.273 5.057 8.696.317 3.126-.109 6.404-1.653 9.176-1.384 2.537-3.797 4.505-6.603 5.237-3.411.913-7.315.592-10.242-1.508-2.726-1.891-4.344-5.074-4.778-8.315-.368-3.11.065-6.37 1.528-9.162.986-1.893 2.51-3.523 4.403-4.527 1.58-.867 3.378-1.288 5.168-1.397m-1.115 5.54c-1.209.296-2.229 1.16-2.828 2.235-.965 1.67-1.082 3.656-.99 5.537.089 1.776.48 3.65 1.66 5.039 1.279 1.482 3.432 1.873 5.283 1.52 1.445-.294 2.63-1.383 3.23-2.703.79-1.693.87-3.62.733-5.454-.16-1.797-.62-3.722-1.982-5.004-1.328-1.29-3.358-1.54-5.106-1.17M64.486 24.755c2.524-.793 5.25-1.107 7.866-.627 1.842.36 3.737 1.328 4.592 3.08.667 1.245.4 2.697.449 4.047l-.738.006c-2.046-1.52-4.666-2.033-7.168-2.06-2.356-.042-4.8.893-6.285 2.768-1.183 1.397-1.657 3.286-1.56 5.09.061 2 .57 4.148 2.056 5.587 1.59 1.623 4.005 2.062 6.19 1.968.825-.051 1.97-.278 2.083-1.274.105-2.183.074-4.394-.425-6.533 1.163.032 2.328-.035 3.49.038 1.488.14 2.91 1.419 2.81 2.99-.098 2.174.329 4.487-.614 6.532-.845 1.845-2.824 2.825-4.725 3.208-3.651.709-7.615.381-10.887-1.482-2.796-1.528-4.955-4.195-5.751-7.291-.891-3.43-.516-7.247 1.296-10.321 1.587-2.757 4.312-4.763 7.32-5.726M42.803 24.803c1.409.05 2.94-.169 4.205.595 1.24.69 1.806 2.161 1.808 3.525.022 3.24.002 6.481.012 9.724.012 1.052-.07 2.115.117 3.157.107.655.466 1.312 1.084 1.612 1.113.59 2.42.452 3.637.462-.016 1.268.135 2.66-.577 3.78-.566.881-1.685 1.132-2.663 1.17-1.99.073-4.15-.364-5.615-1.809-1.534-1.488-2.012-3.72-2.008-5.788q-.005-8.215 0-16.428M61.906 53.346c1.798 2.292 3.824 4.463 6.324 5.997 3.017 1.909 6.625 2.808 10.183 2.681 4.707-.068 9.43-1.73 12.97-4.872 1.306-1.064 2.29-2.439 3.309-3.764.024 1.944.218 3.959-.473 5.822-.845 2.752-3.074 4.787-5.41 6.327-3.232 2.119-7.102 3.351-10.983 3.185-4.995-.183-9.973-2.302-13.352-6.02-.949-1.031-1.759-2.218-2.144-3.58-.652-1.853-.484-3.85-.424-5.776' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodTigoBrandIcon);
export default ForwardRef;
