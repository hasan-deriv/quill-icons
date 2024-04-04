import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightProvenTrackRecordIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M26.139 65.053c0 3.25.528 6.377 1.507 9.3-2.358-.861-5.252-2.084-8.615-3.806C9.167 65.5 6.97 56.663 6.97 56.663s-2.806-10.706 4.113-17.39c6.918-6.684 16.644-4.207 16.644-4.207-1.034.981-1.59 2.027-1.59 3.111v9.797c-1.411-.338-2.843-.481-4.201-.257-3.023.577-3.349 4.119-2.172 6.477.81 1.765 2.42 3.246 3.897 4.249.806.576 1.622.967 2.475 1.277v5.333z'
    />
    <path
      fill='#000'
      d='M27.646 74.639a.3.3 0 0 1-.099-.017c-2.75-1.006-5.658-2.29-8.646-3.82-5.152-2.638-8.195-6.316-9.841-8.938-1.786-2.845-2.344-5.04-2.367-5.131-.029-.107-.71-2.756-.546-6.27.152-3.256 1.097-7.876 4.739-11.394 3.635-3.513 8.041-4.49 11.097-4.69 3.303-.218 5.715.385 5.817.411a.284.284 0 0 1 .126.483c-.996.946-1.502 1.923-1.502 2.904v9.797c0 .088-.04.17-.108.225a.28.28 0 0 1-.243.053c-1.543-.37-2.88-.453-4.087-.253-.996.19-1.725.731-2.158 1.607-.605 1.223-.527 3.015.195 4.461.907 1.973 2.771 3.44 3.803 4.14.721.516 1.487.91 2.411 1.245a.29.29 0 0 1 .189.268v5.333c0 3.151.503 6.25 1.493 9.209a.287.287 0 0 1-.272.377zm-4.25-39.736q-.666-.001-1.396.046c-2.954.195-7.211 1.141-10.719 4.53-3.501 3.384-4.414 7.845-4.562 10.993-.163 3.43.521 6.092.528 6.12.023.09 2.289 8.775 11.914 13.7 2.767 1.418 5.466 2.622 8.03 3.588a29.5 29.5 0 0 1-1.34-8.827v-5.134a10.2 10.2 0 0 1-2.355-1.243c-1.075-.729-3.032-2.272-3.992-4.362-.806-1.614-.883-3.565-.191-4.961.51-1.03 1.398-1.692 2.57-1.916 1.197-.198 2.496-.138 3.968.18V38.18c0-1.009.439-1.996 1.306-2.94a21 21 0 0 0-3.763-.335z'
    />
    <path
      fill='#fff'
      d='M88.869 49.214c-.025 4.489 1.635 6.24 1.635 6.24a15 15 0 0 1 3.273.097v9.392q0 1.31-.114 2.587c-1.149.19-2.239.33-3.066.477 0 0-4.92 2.98-4.954 13.464 0 0 1.237-.027 3.16-.196C84.156 88.18 76.646 93 67.97 94.027a29 29 0 0 1-3.484.206h-9.111q-1.77 0-3.486-.206C40.506 92.678 31.124 84.8 27.593 74.243a29.2 29.2 0 0 1-1.507-9.3V26.454c0 1.677 1.331 3.26 3.691 4.657 5.602 3.316 17.002 5.587 30.154 5.587 18.692 0 33.846-4.587 33.846-10.244v16a36 36 0 0 0-1.637-.064s-3.249 2.337-3.271 6.824'
    />
    <path
      fill='#000'
      d='M64.487 94.52h-9.111c-1.183 0-2.367-.07-3.52-.209-11.292-1.338-20.922-9.18-24.535-19.977a29.5 29.5 0 0 1-1.522-9.39v-38.49c0-.157.128-.285.285-.285s.286.128.286.285c0 1.51 1.229 3.036 3.551 4.412 5.78 3.421 17.279 5.547 30.009 5.547 9.013 0 17.483-1.062 23.85-2.989 6.171-1.868 9.71-4.408 9.71-6.97a.286.286 0 0 1 .571 0v16a.285.285 0 0 1-.303.286c-.478-.03-.977-.05-1.524-.061-.468.374-3.061 2.624-3.081 6.538-.019 3.264.908 5.249 1.471 5.943a15.4 15.4 0 0 1 3.192.11c.141.02.245.14.245.283v9.391c0 .872-.038 1.75-.114 2.613a.29.29 0 0 1-.237.257c-.556.093-1.087.172-1.601.247-.509.076-.992.147-1.405.219-.46.316-4.657 3.459-4.774 12.897a62 62 0 0 0 2.847-.184.286.286 0 0 1 .263.444c-4.826 7.172-12.493 11.864-21.034 12.876a30 30 0 0 1-3.517.208zM26.37 28.427v36.517c0 3.152.503 6.25 1.493 9.209C31.406 84.74 40.85 92.43 51.923 93.744c1.131.136 2.293.204 3.451.204h9.112c1.16 0 2.321-.068 3.45-.204 8.18-.968 15.54-5.38 20.288-12.133-1.567.123-2.565.146-2.575.147a.285.285 0 0 1-.293-.286c.034-10.524 4.885-13.58 5.093-13.706a.3.3 0 0 1 .098-.038c.433-.077.94-.151 1.477-.231.443-.066.9-.133 1.372-.21.063-.774.094-1.561.094-2.341v-9.142c-.97-.12-1.99-.141-2.964-.063a.28.28 0 0 1-.23-.088c-.072-.075-1.739-1.887-1.713-6.439.023-4.581 3.253-6.956 3.39-7.056a.3.3 0 0 1 .173-.054c.478.009.921.025 1.345.047V28.414c-1.252 2.114-4.534 4.04-9.545 5.557-6.419 1.943-14.947 3.013-24.016 3.013-12.827 0-24.437-2.156-30.3-5.627-1.563-.927-2.653-1.907-3.26-2.931z'
    />
    <path
      fill='#EBECEE'
      d='M81.529 126.276c0 2.631-5.14 4.9-12.55 5.937-2.752.384-5.818.6-9.047.6s-6.298-.216-9.05-.6c-7.41-1.037-12.55-3.306-12.55-5.937s5.612-5.105 13.558-6.069v6.159c0 1.342 3.602 2.432 8.041 2.432 4.44 0 8.04-1.09 8.04-2.432v-6.159c7.946.964 13.558 3.317 13.558 6.069'
    />
    <path
      fill='#000'
      d='M59.931 133.1c-3.17 0-6.227-.203-9.088-.603-7.893-1.104-12.796-3.488-12.796-6.22 0-1.453 1.373-2.824 3.97-3.966 2.453-1.077 5.856-1.902 9.839-2.385a.283.283 0 0 1 .32.284v6.159c0 .877 2.761 2.147 7.755 2.147 4.995 0 7.755-1.27 7.755-2.147v-6.159a.283.283 0 0 1 .32-.284c3.984.483 7.385 1.308 9.838 2.385 2.597 1.142 3.97 2.512 3.97 3.966 0 2.733-4.903 5.116-12.795 6.22-2.862.4-5.919.603-9.088.603m-8.328-12.569c-7.782.989-12.986 3.285-12.986 5.745s4.944 4.624 12.304 5.654c2.836.396 5.868.597 9.01.597 3.143 0 6.173-.201 9.009-.597 7.359-1.03 12.304-3.301 12.304-5.654s-5.204-4.756-12.985-5.745v5.836c0 1.766-4.29 2.719-8.326 2.719s-8.327-.953-8.327-2.719v-5.836z'
    />
    <path
      fill='#fff'
      d='M67.971 94.029v32.338c0 1.343-3.6 2.433-8.04 2.433s-8.041-1.09-8.041-2.433V94.029q1.715.205 3.486.205h9.111q1.771 0 3.484-.205'
    />
    <path
      fill='#000'
      d='M59.931 129.086c-4.037 0-8.327-.953-8.327-2.719V94.029a.286.286 0 0 1 .32-.285c1.13.136 2.292.205 3.452.205h9.111c1.16 0 2.322-.069 3.45-.205a.286.286 0 0 1 .32.285v32.338c0 1.766-4.29 2.719-8.326 2.719m-7.757-34.737v32.018c0 1.016 3.186 2.147 7.756 2.147s7.754-1.131 7.754-2.147V94.349c-1.05.114-2.124.171-3.198.171h-9.112c-1.073 0-2.148-.057-3.2-.171'
    />
    <path
      fill='#EBECEE'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={0.571}
      d='M59.931 16.936c-15.108 0-27.904 2.996-32.255 7.133-1.035.981-1.59 2.027-1.59 3.111 0 1.677 1.331 3.26 3.691 4.657 5.602 3.316 17.002 5.587 30.154 5.587 18.692 0 33.846-4.587 33.846-10.244S78.623 16.936 59.931 16.936m0 13.583c-9.058 0-16.401-1.496-16.401-3.34 0-1.845 7.343-3.34 16.401-3.34s16.402 1.495 16.402 3.34-7.343 3.34-16.402 3.34'
    />
    <path
      fill='#CED0D6'
      d='M59.932 31.577c11.927 0 21.597-1.969 21.597-4.397s-9.67-4.397-21.597-4.397-21.598 1.968-21.598 4.397c0 2.428 9.67 4.397 21.597 4.397'
    />
    <path
      fill='#000'
      d='M59.931 31.863c-5.787 0-11.231-.46-15.328-1.294-5.417-1.103-6.554-2.452-6.554-3.39 0-.936 1.137-2.285 6.554-3.39 4.097-.833 9.541-1.293 15.328-1.293 5.788 0 11.232.46 15.329 1.294 5.417 1.103 6.554 2.451 6.554 3.39s-1.137 2.286-6.554 3.389c-4.097.834-9.541 1.294-15.329 1.294m0-8.794c-5.75 0-11.154.455-15.214 1.282-3.817.777-6.097 1.836-6.097 2.83 0 .995 2.28 2.052 6.097 2.83 4.062.828 9.464 1.283 15.214 1.283s11.155-.456 15.215-1.283c3.817-.777 6.097-1.835 6.097-2.83 0-.994-2.279-2.051-6.097-2.83-4.062-.827-9.465-1.282-15.215-1.282'
    />
    <path
      fill='#fff'
      d='M81.529 126.276v11.872c0 3.612-9.67 6.539-21.597 6.539s-21.6-2.927-21.6-6.539v-11.872c0 2.631 5.14 4.9 12.55 5.937 2.752.384 5.818.6 9.05.6 3.23 0 6.295-.216 9.047-.6 7.41-1.037 12.55-3.306 12.55-5.937'
    />
    <path
      fill='#000'
      d='M59.931 144.974c-12.271 0-21.884-2.997-21.884-6.824v-11.873c0-.157.129-.286.286-.286s.285.129.285.286c0 2.353 4.945 4.624 12.305 5.654 2.835.396 5.867.598 9.01.598s6.173-.202 9.008-.598c7.359-1.03 12.305-3.301 12.305-5.654 0-.157.128-.286.285-.286s.286.129.286.286v11.873c0 3.827-9.613 6.824-21.883 6.824zm-21.314-17.11v10.286c0 3.39 9.76 6.253 21.313 6.253s21.311-2.863 21.311-6.253v-10.286c-1.505 2.046-5.908 3.749-12.224 4.633-2.861.4-5.918.603-9.087.603s-6.227-.203-9.089-.603c-6.317-.884-10.718-2.587-12.224-4.633'
    />
    <path
      fill='#fff'
      d='M113.56 62.848c-.136 2.058-.377 3.995-.967 5.776-1.324 3.632-4.866 7.434-8.853 9.26-4.893 2.203-11.268 3.056-15.024 3.382-1.923.167-3.16.195-3.16.195.034-10.484 4.954-13.464 4.954-13.464.827-.146 1.917-.286 3.066-.477 2.144-.357 4.496-.89 5.748-1.976 2.342-1.998 1.87-5.937-.433-7.853-1.405-1.217-3.297-1.883-5.2-2.151a15 15 0 0 0-3.274-.097s-1.66-1.752-1.636-6.24c.023-4.489 3.272-6.825 3.272-6.825.554.012 1.097.032 1.637.065 2.54.155 4.969.598 7.69 1.775 1.866.808 3.683 1.842 5.254 3.119 4.566 3.796 7.286 9.586 6.926 15.513z'
    />
    <path
      fill='#000'
      d='M85.556 81.747a.283.283 0 0 1-.286-.286c.034-10.524 4.886-13.581 5.093-13.707a.3.3 0 0 1 .098-.037c.433-.077.94-.151 1.478-.231a92 92 0 0 0 1.591-.246c1.961-.327 4.371-.839 5.609-1.909.94-.801 1.451-1.991 1.442-3.348-.01-1.557-.727-3.116-1.871-4.067-1.569-1.357-3.617-1.885-5.06-2.089a15 15 0 0 0-3.21-.096.28.28 0 0 1-.23-.088c-.071-.075-1.739-1.887-1.713-6.439.024-4.581 3.253-6.956 3.39-7.056a.3.3 0 0 1 .173-.054c.594.012 1.133.033 1.649.066 2.921.179 5.322.733 7.784 1.799 2.034.88 3.824 1.942 5.321 3.158 4.763 3.96 7.39 9.849 7.032 15.752v.001c-.11 1.677-.322 3.857-.982 5.847-1.39 3.813-5.008 7.6-9.004 9.43-5.021 2.26-11.629 3.104-15.12 3.406-1.91.167-3.166.196-3.177.196h-.006zm5.063-13.478c-.46.315-4.658 3.458-4.775 12.897a62 62 0 0 0 2.847-.185c3.456-.298 9.99-1.131 14.933-3.357 3.805-1.743 7.383-5.484 8.702-9.097.635-1.918.843-4.053.951-5.696.347-5.723-2.203-11.433-6.824-15.275-1.453-1.18-3.199-2.216-5.186-3.076-2.398-1.037-4.74-1.577-7.593-1.751a36 36 0 0 0-1.524-.062c-.469.374-3.061 2.624-3.081 6.539-.013 2.248.412 3.772.771 4.655.281.693.567 1.11.704 1.288a15.4 15.4 0 0 1 3.187.11c1.519.214 3.68.774 5.349 2.218 1.286 1.069 2.061 2.752 2.073 4.5.01 1.53-.573 2.874-1.642 3.786-1.342 1.163-3.851 1.701-5.887 2.04a83 83 0 0 1-1.601.247c-.509.076-.992.147-1.404.219'
    />
    <path fill='#FF7E88' d='m49.249 53.976-2.155 4.175-5.39.312-8.483.49 4.868-4.332z' />
    <path
      fill='#000'
      d='M33.221 59.239a.286.286 0 0 1-.19-.5l4.868-4.33a.28.28 0 0 1 .172-.072l11.16-.646a.286.286 0 0 1 .27.417l-2.152 4.176a.28.28 0 0 1-.238.154l-13.872.802zm4.983-4.338-4.18 3.719 12.892-.744 1.848-3.586z'
    />
    <path
      fill='#FF7E88'
      d='m78.243 58.134-4.877 4.33-13.863-3.227-4.945-10.451-1.261-2.663 4.87-4.333 6.203 13.114z'
    />
    <path
      fill='#000'
      d='M73.366 62.75a.3.3 0 0 1-.065-.007l-13.863-3.227a.29.29 0 0 1-.192-.156L53.04 46.246a.285.285 0 0 1 .069-.336l4.868-4.333a.29.29 0 0 1 .248-.067.29.29 0 0 1 .201.157l6.144 12.99 13.739 3.199a.288.288 0 0 1 .124.493l-4.878 4.328a.28.28 0 0 1-.19.072zM59.7 58.99l13.585 3.161 4.354-3.864-13.336-3.104a.29.29 0 0 1-.193-.156l-6.04-12.77-4.424 3.937z'
    />
    <path fill='#FF444F' d='m70.574 81.066-4.867 4.332-1.378-8.162-.992-5.863 4.869-4.32z' />
    <path
      fill='#000'
      d='M65.707 85.684a.285.285 0 0 1-.281-.237l-2.37-14.024a.29.29 0 0 1 .091-.262l4.869-4.32a.287.287 0 0 1 .471.166l2.369 14.013a.29.29 0 0 1-.092.261l-4.867 4.333a.3.3 0 0 1-.19.073zm-2.061-14.203 2.258 13.36 4.363-3.884-2.257-13.348-4.366 3.872z'
    />
    <path
      fill='#FF444F'
      d='m68.206 67.053-4.869 4.32.992 5.863 1.378 8.162-12.41-7.61-12.407 5.44 2.37-13.61L33.22 58.952l8.483-.49 5.39-.312 2.154-4.175 4.049-7.853 1.262 2.663 4.944 10.451 13.863 3.227-5.162 4.579z'
    />
    <path
      fill='#000'
      d='M65.707 85.684a.3.3 0 0 1-.15-.043L53.274 78.11l-12.271 5.379a.287.287 0 0 1-.397-.312L42.95 69.71 33.01 59.147a.286.286 0 0 1 .191-.481l13.712-.792L53.04 45.99a.287.287 0 0 1 .512.009l6.146 12.99 13.728 3.195a.287.287 0 0 1 .126.493l-5.114 4.537a.3.3 0 0 1-.045.053l-4.75 4.214L65.99 85.35a.286.286 0 0 1-.282.333zm-12.41-8.181q.08 0 .15.041l11.874 7.282-2.265-13.406a.29.29 0 0 1 .091-.261l4.819-4.276a.3.3 0 0 1 .048-.056l4.747-4.213-13.324-3.101a.29.29 0 0 1-.193-.156l-5.957-12.591L47.35 58.28a.28.28 0 0 1-.238.154L33.85 59.2l9.62 10.22a.28.28 0 0 1 .072.244l-2.28 13.085 11.92-5.225a.3.3 0 0 1 .115-.024z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightProvenTrackRecordIcon);
export default ForwardRef;
