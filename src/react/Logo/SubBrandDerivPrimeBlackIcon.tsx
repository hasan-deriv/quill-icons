import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivPrimeBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 347 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='m35.019 1.829-2.99 16.955H21.65c-9.682 0-18.91 7.845-20.621 17.527l-.724 4.12c-1.703 9.683 4.757 17.528 14.44 17.528H23.4c7.057 0 13.78-5.713 15.02-12.77L46.394 0zM27.655 43.59c-.382 2.18-2.345 3.954-4.525 3.954h-5.259c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.276-7.892h9.093zm87.291 14.367 6.81-38.634h10.773l-6.811 38.634h-10.78zm1.165-38.188-1.622 9.193c-5.103-1.586-10.369-1.081-11.986-.759q-2.621 14.881-5.246 29.764h-10.78l6.465-36.648c3.506-1.452 12.116-4.399 23.169-1.55m-43.676-.993h-8.386c-8.17 0-15.959 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.039c-2.72 0-4.542-2.204-4.057-4.933l.056-.326h27.026l1.544-8.752c1.44-8.17-4.01-14.79-12.181-14.79zm1.36 13.963-.063.557H57.66l.087-.493c.486-2.721 2.968-5.116 5.697-5.116h6.277c2.697 0 4.52 2.355 4.073 5.052M174.56 19.324c-3.672 9.763-12.087 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.195 3.49 1.758 16.438 3.541 25.483 4.891-8.8 10.283-20.345 12.53-25.483zM193.001 18.373q3.64 0 6.342 1.04 2.7 1.04 4.522 2.86 1.821 1.821 2.829 4.31 1.007 2.49 1.19 5.46.315 5.127-.95 9.919-1.266 4.791-4.269 8.507t-7.807 5.944-11.565 2.228q-.818 0-1.787-.074a15 15 0 0 1-1.723-.223l-2.372 13.374h-6.909l9.063-50.745q3.043-1.263 6.679-1.931t6.757-.669m-12.162 34.176q.75.15 1.608.186.856.037 1.674.037 4.236 0 7.478-1.634 3.243-1.635 5.412-4.421 2.168-2.785 3.21-6.39 1.042-3.602.799-7.54a14.2 14.2 0 0 0-.568-3.195 7.1 7.1 0 0 0-1.543-2.75q-1.077-1.187-2.829-1.894t-4.427-.706q-1.857 0-3.397.334a40 40 0 0 0-2.561.632zm50.136-34.027q.891 0 2.01.074 1.119.075 2.208.26 1.088.187 1.992.371.902.187 1.362.409l-1.636 6.018q-1.523-.594-3.472-.891a25 25 0 0 0-3.733-.298q-1.56 0-3.07.223t-2.601.595l-5.864 32.69h-6.91l6.631-37.148q2.906-1.04 6.286-1.672a37 37 0 0 1 6.797-.631m12.604 39.45h-6.909l6.911-38.633h6.909zm5.218-45.617q-1.709 0-2.924-1.04-1.216-1.04-1.33-2.898-.147-2.376 1.255-3.752 1.4-1.374 3.259-1.374 1.709 0 2.964 1.077 1.254 1.078 1.374 3.009.137 2.23-1.339 3.603-1.476 1.376-3.259 1.375m46.443 6.167q3.268 0 5.596 1.003t3.808 2.711q1.479 1.71 2.213 3.975.734 2.268.889 4.792.1 1.635-.043 3.53a34 34 0 0 1-.479 3.677l-3.54 19.763h-6.909l3.259-18.277q.265-1.708.619-3.827.353-2.117.225-4.197a11.6 11.6 0 0 0-.504-2.75q-.416-1.336-1.256-2.302-.84-.965-2.287-1.56-1.45-.594-3.529-.595-2.377 0-4.549.929-2.173.93-3.598 1.894.212 1.04.385 2.044.174 1.003.233 1.968.105 1.71-.047 3.455a52 52 0 0 1-.42 3.455l-3.539 19.763h-6.909l3.259-18.277q.266-1.708.579-3.863.314-2.154.181-4.31a12.5 12.5 0 0 0-.464-2.711q-.377-1.3-1.142-2.267-.767-.965-1.989-1.522-1.223-.558-3.08-.558-1.859 0-3.589.223-1.734.223-2.899.595l-5.864 32.69h-6.91l6.631-37.148q3.279-1.04 7.215-1.672 3.935-.63 7.057-.631 3.12 0 5.341 1.077t3.593 2.86q.711-.519 1.97-1.189a23 23 0 0 1 2.895-1.262 31 31 0 0 1 3.576-1.04 18 18 0 0 1 4.022-.446m33.615 40.417q-3.79 0-6.604-1.078-2.816-1.076-4.789-2.971a12.9 12.9 0 0 1-3.021-4.421 16.5 16.5 0 0 1-1.221-5.35q-.32-5.2.943-10.03 1.264-4.827 3.933-8.544a19.8 19.8 0 0 1 6.694-5.906q4.026-2.191 9.301-2.192 3.046 0 5.286.78t3.696 2.118a9.3 9.3 0 0 1 2.233 3.083q.776 1.747.891 3.603.214 3.494-.9 5.907-1.116 2.415-3.094 4.049-1.98 1.635-4.711 2.526a41 41 0 0 1-5.709 1.412 54 54 0 0 1-6.049.706q-3.072.186-5.811.334-.037.595-.015.965l.037.595q.105 1.71.607 3.232a6.5 6.5 0 0 0 1.688 2.674q1.184 1.154 3.195 1.82 2.01.67 5.205.67 1.41 0 2.918-.26a24 24 0 0 0 2.857-.67 33 33 0 0 0 2.401-.817q1.052-.405 1.475-.78l.956 5.87q-1.437.818-4.685 1.746-3.249.929-7.707.929M320.49 37.69q4.3-.148 7.841-.557 3.541-.408 6.08-1.412 2.538-1.002 3.882-2.712 1.343-1.707 1.175-4.457a4.5 4.5 0 0 0-.347-1.412q-.307-.742-.976-1.374-.671-.632-1.81-1.04t-2.774-.41q-2.602 0-4.798 1.115a13.5 13.5 0 0 0-3.869 2.935q-1.671 1.821-2.785 4.235a21.6 21.6 0 0 0-1.619 5.09' />
    </g>
    <defs>
      <clipPath id='7ae6d6304c77e396f20c340c92337b18__a'>
        <path fill='#fff' d='M0 0h347v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivPrimeBlackIcon);
export default ForwardRef;
