import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivCareersBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 393 59'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483zM174.59 44.135q-.312-5.05.922-9.729 1.237-4.68 3.988-8.247c1.834-2.376 4.145-4.274 6.933-5.683q4.18-2.122 9.749-2.122 2.452.001 4.704.338c1.498.224 2.936.653 4.312 1.3l-2.244 5.792c-.819-.441-1.769-.792-2.848-1.04q-1.621-.37-4.146-.369-3.642 0-6.441 1.597a14.55 14.55 0 0 0-4.679 4.232q-1.884 2.64-2.745 6.095-.867 3.453-.638 7.17a16 16 0 0 0 .632 3.64 8.2 8.2 0 0 0 1.636 3.011q1.117 1.299 2.91 2.044c1.194.496 2.684.737 4.465.737q1.337.002 2.808-.26a23.2 23.2 0 0 0 4.928-1.408q.978-.408 1.4-.78l.957 5.87q-1.357.89-4.276 1.742-2.92.86-6.707.858c-2.379 0-4.506-.362-6.382-1.076q-2.818-1.08-4.794-3.047-1.98-1.968-3.112-4.68t-1.332-5.985m56.152 14.269a30 30 0 0 1-.856-1.82 15 15 0 0 1-.726-2.123q-1.542 1.487-4.2 2.975-2.656 1.487-6.669 1.487c-2.179 0-4.069-.35-5.671-1.04q-2.409-1.042-4.006-2.902-1.602-1.851-2.462-4.383-.863-2.521-1.05-5.569a28.5 28.5 0 0 1 1.073-9.734q1.381-4.753 4.495-8.47 3.117-3.712 8.025-6.017 4.91-2.303 11.672-2.303 2.005 0 4.708.447 2.702.444 4.698 1.487l-4.285 23.327a63 63 0 0 0-.43 3.27 19.4 19.4 0 0 0-.059 3.266c.07 1.142.237 2.291.509 3.458.268 1.16.692 2.413 1.27 3.749zm-11.4-5.351q3.12-.002 5.266-1.337 2.148-1.341 3.671-3.12-.002-1.262.098-2.642c.068-.913.174-1.844.312-2.78l3.326-18.43q-.383-.143-1.241-.223a18 18 0 0 0-1.528-.073q-4.232 0-7.551 1.633c-2.213 1.094-4.068 2.539-5.565 4.347-1.5 1.808-2.606 3.918-3.326 6.318s-.998 4.916-.837 7.54a17.8 17.8 0 0 0 .491 3.156c.265 1.07.683 2.007 1.253 2.823a6.8 6.8 0 0 0 2.203 2.008q1.346.78 3.428.78m42.822-34.548q.893 0 2.012.072 1.119.081 2.208.26c.724.127 1.391.248 1.991.375.603.121 1.056.26 1.364.405l-1.637 6.022q-1.525-.597-3.471-.895a25.5 25.5 0 0 0-3.734-.296c-1.04 0-2.066.073-3.069.224-1.007.15-1.875.344-2.603.592l-5.864 32.692h-6.908l6.63-37.148q2.907-1.043 6.285-1.668a36.8 36.8 0 0 1 6.796-.635m21.952 40.418c-2.524 0-4.729-.362-6.602-1.076q-2.819-1.079-4.79-2.974a12.85 12.85 0 0 1-3.02-4.42 16.5 16.5 0 0 1-1.221-5.351q-.32-5.197.943-10.03 1.262-4.825 3.931-8.544a19.84 19.84 0 0 1 6.695-5.907q4.026-2.187 9.301-2.189 3.045 0 5.287.78 2.238.781 3.694 2.116a9.25 9.25 0 0 1 2.233 3.084c.519 1.167.814 2.364.89 3.603.143 2.328-.156 4.3-.897 5.907a11.4 11.4 0 0 1-3.095 4.051q-1.981 1.634-4.712 2.522a40 40 0 0 1-5.708 1.415 56 56 0 0 1-6.048.707c-2.048.12-3.985.236-5.811.332-.027.393-.031.72-.016.968l.036.592c.07 1.137.273 2.22.607 3.229a6.56 6.56 0 0 0 1.688 2.678q1.186 1.15 3.196 1.82c1.339.448 3.073.666 5.204.666q1.412.001 2.92-.26a23 23 0 0 0 2.855-.666 34 34 0 0 0 2.402-.816c.699-.272 1.194-.532 1.475-.78l.956 5.865q-1.437.823-4.687 1.747c-2.166.617-4.734.931-7.706.931m-8.363-21.252q4.298-.147 7.841-.556 3.54-.41 6.077-1.409c1.694-.671 2.987-1.572 3.884-2.715.895-1.136 1.287-2.624 1.174-4.456a4.5 4.5 0 0 0-.347-1.415q-.307-.736-.976-1.372c-.446-.417-1.051-.768-1.808-1.04q-1.143-.407-2.776-.405-2.599-.001-4.799 1.112a13.6 13.6 0 0 0-3.867 2.933q-1.67 1.824-2.787 4.238a21.7 21.7 0 0 0-1.616 5.085m44.619 21.252c-2.524 0-4.729-.362-6.602-1.076q-2.819-1.079-4.79-2.974a12.85 12.85 0 0 1-3.02-4.42 16.5 16.5 0 0 1-1.221-5.351q-.32-5.197.943-10.03 1.262-4.825 3.931-8.544a19.84 19.84 0 0 1 6.695-5.907q4.026-2.187 9.301-2.189 3.045 0 5.287.78 2.238.781 3.694 2.116a9.2 9.2 0 0 1 2.233 3.084c.52 1.167.814 2.364.89 3.603.143 2.328-.156 4.3-.897 5.907a11.4 11.4 0 0 1-3.095 4.051q-1.981 1.634-4.712 2.522a40 40 0 0 1-5.708 1.415 56 56 0 0 1-6.048.707c-2.048.12-3.985.236-5.811.332-.027.393-.031.72-.016.968l.036.592c.07 1.137.273 2.22.607 3.229a6.55 6.55 0 0 0 1.689 2.678q1.185 1.15 3.195 1.82c1.34.448 3.073.666 5.204.666q1.412.001 2.92-.26a23 23 0 0 0 2.855-.666 34 34 0 0 0 2.402-.816c.699-.272 1.194-.532 1.475-.78l.957 5.865q-1.438.823-4.688 1.747c-2.166.617-4.734.931-7.706.931m-8.363-21.252q4.298-.147 7.841-.556 3.54-.41 6.078-1.409c1.693-.671 2.986-1.572 3.883-2.715.895-1.136 1.287-2.624 1.174-4.456a4.5 4.5 0 0 0-.347-1.415q-.307-.736-.976-1.372c-.446-.417-1.051-.768-1.808-1.04q-1.143-.407-2.776-.405-2.599-.001-4.799 1.112a13.6 13.6 0 0 0-3.867 2.933q-1.67 1.824-2.787 4.238a21.7 21.7 0 0 0-1.616 5.085m47.705-19.166q.892 0 2.011.072 1.119.081 2.208.26c.724.127 1.391.248 1.991.375.603.121 1.056.26 1.364.405l-1.636 6.022q-1.526-.597-3.472-.895a25.4 25.4 0 0 0-3.733-.296c-1.04 0-2.067.073-3.07.224-1.006.15-1.874.344-2.603.592l-5.864 32.692h-6.908l6.63-37.148q2.909-1.043 6.285-1.668a36.8 36.8 0 0 1 6.797-.635m15.059 34.62q1.56.001 3.138-.296 1.58-.298 2.764-.968a5.14 5.14 0 0 0 1.895-1.82c.473-.767.675-1.716.604-2.86q-.067-1.113-.492-1.964c-.283-.569-.712-1.107-1.287-1.602q-.865-.736-2.132-1.446a86 86 0 0 0-3.034-1.596 46 46 0 0 1-3.221-1.638 12.3 12.3 0 0 1-2.609-1.929 8.6 8.6 0 0 1-1.834-2.636q-.688-1.524-.819-3.682c-.229-3.713.924-6.7 3.461-8.949q3.805-3.384 11.455-3.386 3.568 0 6.322.708 2.756.709 3.832 1.3l-2.253 5.647q-1.077-.59-3.421-1.264-2.344-.663-5.168-.665-1.41-.001-2.805.296-1.393.299-2.499 1.004a5.06 5.06 0 0 0-1.745 1.856q-.636 1.154-.533 2.788.123 2.002 1.763 3.307c1.093.864 2.709 1.772 4.847 2.709a37 37 0 0 1 3.567 1.82c1.054.622 1.961 1.311 2.728 2.08a8.45 8.45 0 0 1 1.802 2.714q.654 1.562.785 3.712.192 3.12-.85 5.496a9.9 9.9 0 0 1-3.065 3.943q-2.022 1.56-4.871 2.34t-6.268.78q-2.526-.001-4.588-.34-2.065-.325-3.616-.78-1.55-.443-2.581-.924-1.034-.48-1.571-.78l2.328-5.647q.536.3 1.494.743.954.445 2.282.89 1.329.444 2.906.743c1.052.2 2.149.296 3.289.296' />
    </g>
    <defs>
      <clipPath id='8324172054ee4bf529356726c93eccc6__a'>
        <path fill='#fff' d='M0 0h393v59H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivCareersBlackIcon);
export default ForwardRef;
