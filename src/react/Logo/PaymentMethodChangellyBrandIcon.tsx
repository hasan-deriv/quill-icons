import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodChangellyBrandIcon = (
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
    <g fill='#000'>
      <path d='M46.966 43.357c-.922.99-1.867 1.475-2.904 1.475-1.983 0-3.527-1.637-3.527-3.734 0-2.121 1.498-3.758 3.434-3.758 1.43 0 2.352.761 2.974 1.43l.115.138 1.199-1.268-.116-.115c-.806-.853-2.005-1.844-4.149-1.844-2.95 0-5.347 2.443-5.347 5.44 0 3.042 2.35 5.44 5.347 5.44 2.167 0 3.412-1.084 4.242-2.006l.115-.138-1.245-1.153zM54.71 35.658c-1.36 0-2.466.53-3.273 1.59v-5.646l-1.844.898v13.761h1.844v-5.924c0-1.751 1.176-2.973 2.858-2.973 1.637 0 2.605 1.083 2.605 2.858v6.062h1.844v-6.43c0-2.56-1.567-4.196-4.034-4.196M64.898 35.705c-1.59 0-2.743.415-3.734.876l-.138.07.576 1.544.162-.07c1.083-.484 1.982-.714 2.996-.714 1.844 0 2.812.876 2.812 2.558v.093c-.76-.208-1.636-.37-2.904-.37-2.812 0-4.472 1.292-4.472 3.458 0 2.19 1.982 3.343 3.942 3.343 1.682 0 2.766-.715 3.457-1.43v1.2h1.821v-6.317c0-1.337-.369-2.35-1.106-3.088-.784-.738-1.96-1.153-3.412-1.153m2.674 5.901v.807c0 1.452-1.36 2.535-3.18 2.535-1.13 0-2.352-.576-2.352-1.844 0-1.175 1.037-1.89 2.766-1.89 1.199 0 2.144.208 2.766.392M76.7 35.657c-1.36 0-2.466.53-3.273 1.591v-1.36h-1.844v10.418h1.844v-5.97c0-1.751 1.175-2.973 2.858-2.973 1.637 0 2.605 1.083 2.605 2.858v6.062h1.844v-6.43c0-2.56-1.59-4.196-4.034-4.196M90.925 37.364c-.991-1.13-2.259-1.706-3.757-1.706a5.07 5.07 0 0 0-3.389 1.314c-.99.922-1.52 2.19-1.52 3.619 0 1.406.53 2.697 1.52 3.618.9.83 2.144 1.314 3.389 1.314 1.498 0 2.743-.599 3.78-1.798v.692c0 2.167-1.268 3.411-3.48 3.411-1.36 0-2.628-.415-3.781-1.244l-.161-.116-.853 1.476.138.092c1.36.945 2.95 1.429 4.68 1.429 1.682 0 3.042-.484 3.964-1.406.876-.9 1.337-2.12 1.337-3.688v-8.505h-1.844v1.498zm.07 3.204c0 2.051-1.798 3.273-3.527 3.273-1.868 0-3.32-1.43-3.32-3.25 0-1.89 1.383-3.25 3.32-3.25 1.729-.023 3.526 1.198 3.526 3.227M99.495 35.657c-2.859 0-5.002 2.329-5.002 5.44s2.236 5.44 5.21 5.44c1.751 0 3.065-.6 4.286-1.96l.115-.137-1.198-1.06-.115.114c-.899.946-1.867 1.36-3.043 1.36-1.774 0-3.088-1.198-3.342-2.996h7.952l.024-.161c.022-.23.022-.392.022-.53-.022-3.297-1.982-5.51-4.909-5.51m2.996 4.657h-6.108c.277-1.798 1.522-3.043 3.089-3.043 1.912 0 2.812 1.521 3.019 3.043M106.115 46.285h1.844V32.247l-1.844.922zM110.376 46.284h1.844V31.601l-1.844.922zM122.041 35.866l-3.135 8.113-3.55-8.113h-2.028l4.656 10.211c-.622 1.43-1.153 1.706-1.867 1.706-.599 0-1.014-.092-1.498-.346l-.161-.092-.646 1.521.138.07c.761.368 1.406.53 2.213.53 1.637 0 2.651-.853 3.503-2.95L124 35.865z' />
    </g>
    <g fill='#10D078'>
      <path d='M33.538 26.046c-.115 0-2.674.115-5.855.876-4.31 1.014-7.537 2.697-9.52 4.979a52 52 0 0 0-1.221 1.452c-.784.207-2.95.807-3.942.991a2.25 2.25 0 0 0-1.406.922c-.714 1.037-1.96 3.158-2.005 3.25l-1.43 2.444 2.605-1.13c1.13-.507 2.72-.853 3.181-.576.023.023.046.023.07.161 0 .738.184 1.452.53 2.167a2.77 2.77 0 0 0-1.06 2.328v3.18h3.18c.9.047 1.752-.368 2.328-1.06a5.3 5.3 0 0 0 2.167.53c.115.024.138.047.138.07.277.46-.069 2.051-.576 3.18l-1.13 2.582 2.444-1.429c.092-.046 2.213-1.29 3.25-2.005a2.2 2.2 0 0 0 .922-1.406c.207-.991.784-3.158.991-3.942a52 52 0 0 0 1.452-1.221c5.348-4.726 5.832-14.96 5.855-15.398l.046-.991zm-19.155 11.41c-.6-.184-1.29-.161-1.96-.046.255-.415.508-.807.715-1.106.047-.093.139-.139.254-.162.461-.092 1.176-.276 1.89-.438a8.4 8.4 0 0 0-.899 1.752m3.135 7.4a.93.93 0 0 1-.807.368h-.3l1.914-2.996-2.997 1.936v-.323a.91.91 0 0 1 .37-.807l3.664-2.904c.184-.161.438-.277.668-.323l.968-.23-.23.968c-.07.253-.161.484-.323.668zm6.869 2.327a.44.44 0 0 1-.162.254c-.3.207-.691.46-1.106.714.115-.668.138-1.36-.046-1.959a9.5 9.5 0 0 0 1.752-.876c-.162.692-.346 1.383-.438 1.867m3.042-6.177c-3.18 2.812-4.932 3.642-6.2 3.688h-.046c-.392 0-.715-.07-1.037-.185l1.705-2.166q.485-.623.692-1.383l.922-3.873-3.873.922a3.4 3.4 0 0 0-1.383.669l-2.166 1.706a3 3 0 0 1-.185-1.038V39.3c.023-1.245.876-3.02 3.688-6.2 3.389-3.85 10.396-4.887 13.023-5.14-.253 2.65-1.29 9.657-5.14 13.046' />
      <path d='M13.105 51.645c-1.176.23-2.374.3-3.573.323a22 22 0 0 1-2.098-.093c.277-.46.53-.922.761-1.406a18.4 18.4 0 0 0 1.014-2.996c.23-.968.507-1.913.853-2.858q.485-1.417 1.107-2.836c-.37.37-.692.761-.992 1.176s-.599.853-.876 1.29c-.53.877-.99 1.845-1.383 2.79-.368.922-.76 1.844-1.221 2.674s-.991 1.59-1.637 2.328L4 53.28l1.637.231c1.29.184 2.604.277 3.918.23.668-.023 1.314-.069 1.982-.184a14 14 0 0 0 1.937-.438 12.2 12.2 0 0 0 3.572-1.729c.53-.392 1.038-.83 1.452-1.337.415-.507.807-1.037 1.06-1.636-.875.922-1.936 1.59-3.019 2.12-1.106.53-2.259.876-3.434 1.107M26.761 37.018c.83 0 1.66-.322 2.306-.945a3.24 3.24 0 0 0 0-4.587 3.2 3.2 0 0 0-2.306-.945c-.875 0-1.682.346-2.305.945a3.24 3.24 0 0 0 0 4.587 3.24 3.24 0 0 0 2.305.945m-1.014-4.24c.277-.277.623-.416.991-.416.37 0 .738.139.992.415a1.39 1.39 0 0 1 0 1.983 1.39 1.39 0 0 1-1.983 0c-.53-.53-.53-1.43 0-1.983' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodChangellyBrandIcon);
export default ForwardRef;
