import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightEmailVerificationIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 102 103'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#0f0168dea993d53848ca91c141671bcc__a)'>
      <path
        fill='#85ACB0'
        d='M25.545 37.576v23.152L42.81 48.975zM74.927 35.031h-47.81l24.28 16.048zM59.145 49.398 76.454 60.82V37.623z'
      />
      <path
        fill='#85ACB0'
        d='m51.42 54.665-5.91-3.917L25.545 64.36v3.608h50.909v-3.564L56.489 51.213z'
      />
      <path
        fill='#85ACB0'
        d='M51 15.687c19.744 0 35.814 16.07 35.814 35.814S70.744 87.314 51 87.314c-19.743 0-35.813-16.07-35.813-35.813S31.257 15.687 51 15.687m0-4.87c-22.466 0-40.683 18.218-40.683 40.684S28.534 92.184 51 92.184 91.683 73.967 91.683 51.5 73.467 10.818 51 10.818'
      />
      <path
        fill='#85ACB0'
        d='M49.473 99.996c-.045-1.328 1.04-2.434 2.39-2.434a2.42 2.42 0 0 1 2.457 2.368c.022 1.35-1.062 2.435-2.39 2.479h-.045c-1.306 0-2.39-1.085-2.412-2.413m-10.67.93a2.4 2.4 0 0 1-1.77-2.922 2.39 2.39 0 0 1 2.922-1.77c1.306.31 2.08 1.615 1.77 2.921-.265 1.085-1.261 1.837-2.368 1.837-.177 0-.376-.022-.553-.066m23.242-2.147a2.404 2.404 0 0 1 1.66-2.988c1.284-.376 2.612.376 2.988 1.66a2.43 2.43 0 0 1-1.66 2.988 2.5 2.5 0 0 1-.686.089 2.385 2.385 0 0 1-2.302-1.749m-35.614-2.678c-1.151-.642-1.572-2.103-.93-3.298.642-1.174 2.103-1.594 3.298-.952a2.445 2.445 0 0 1 .952 3.298 2.44 2.44 0 0 1-2.125 1.24 2.17 2.17 0 0 1-1.195-.288m47.412-1.771c-.687-1.129-.31-2.634.84-3.32 1.13-.686 2.635-.31 3.32.84.687 1.13.333 2.635-.818 3.299a2.3 2.3 0 0 1-1.24.354c-.819.022-1.638-.42-2.102-1.173m-58.037-6.065c-.974-.93-1.018-2.457-.088-3.409a2.419 2.419 0 1 1 3.497 3.343 2.37 2.37 0 0 1-1.749.73c-.597 0-1.217-.221-1.66-.664m68.307-1.261a2.4 2.4 0 0 1-.044-3.431 2.39 2.39 0 0 1 3.408-.067c.974.952.996 2.48.067 3.431a2.45 2.45 0 0 1-1.749.73 2.5 2.5 0 0 1-1.682-.663M7.483 77.95c-.685-1.151-.331-2.634.82-3.32a2.39 2.39 0 0 1 3.32.796c.686 1.129.31 2.634-.82 3.32a2.3 2.3 0 0 1-1.26.355c-.798.022-1.594-.399-2.06-1.151m84.665-.709c-1.151-.642-1.572-2.125-.93-3.298a2.47 2.47 0 0 1 3.32-.93 2.45 2.45 0 0 1 .93 3.299 2.4 2.4 0 0 1-2.103 1.24c-.42 0-.841-.112-1.217-.31M2.128 65.843c-.355-1.284.353-2.634 1.637-3.01 1.284-.354 2.634.354 3.01 1.638a2.424 2.424 0 0 1-1.638 3.01 2.5 2.5 0 0 1-.664.11c-1.062 0-2.014-.708-2.346-1.748m95.288-.066a2.41 2.41 0 0 1-1.749-2.944 2.4 2.4 0 0 1 2.922-1.749 2.44 2.44 0 0 1 1.771 2.944 2.46 2.46 0 0 1-2.944 1.749M.113 52.762v-.023c0-.199.022-.42.066-.62a1.9 1.9 0 0 1-.088-.62 2.404 2.404 0 0 1 2.412-2.412 2.423 2.423 0 0 1 2.369 2.988c.044.177.088.377.088.576a2.45 2.45 0 0 1-2.368 2.479h-.066a2.424 2.424 0 0 1-2.413-2.368m96.949-1.838c-.023-1.35 1.062-2.434 2.412-2.456 1.328 0 2.435 1.062 2.435 2.412a2.395 2.395 0 0 1-2.413 2.435h-.022a2.414 2.414 0 0 1-2.412-2.39M3.522 41.34c-1.306-.332-2.059-1.682-1.727-2.966s1.682-2.058 2.966-1.704a2.39 2.39 0 0 1 1.705 2.944c-.266 1.084-1.262 1.815-2.347 1.815-.177 0-.376-.022-.597-.089m91.857-2.28a2.38 2.38 0 0 1 1.66-2.966 2.395 2.395 0 0 1 2.989 1.66c.354 1.284-.377 2.634-1.683 2.989-.199.066-.42.088-.641.088-1.063 0-2.037-.686-2.325-1.77M7.75 29.432c-1.15-.664-1.55-2.147-.885-3.32.642-1.151 2.147-1.55 3.298-.886a2.447 2.447 0 0 1 .885 3.32 2.42 2.42 0 0 1-2.102 1.218 2.4 2.4 0 0 1-1.196-.332m82.894-1.372c-.687-1.151-.288-2.634.863-3.32 1.129-.665 2.634-.288 3.298.863.686 1.128.288 2.634-.841 3.32-.376.243-.82.332-1.24.332a2.55 2.55 0 0 1-2.08-1.195m-75.744-9.031c-.93-.952-.952-2.48 0-3.409a2.4 2.4 0 0 1 3.43-.022c.952.952.952 2.479 0 3.409a2.38 2.38 0 0 1-1.704.73c-.62 0-1.261-.243-1.726-.708m68.373-.399a2.42 2.42 0 0 1-.044-3.43 2.44 2.44 0 0 1 3.43-.045v.022c.952.93.974 2.457.022 3.41a2.4 2.4 0 0 1-1.726.73 2.29 2.29 0 0 1-1.682-.687m-58.79-7.791c-.663-1.173-.265-2.656.886-3.32a2.445 2.445 0 0 1 3.32.863 2.42 2.42 0 0 1-.863 3.32c-.376.2-.797.31-1.217.31-.863 0-1.66-.42-2.125-1.173m49.228.575a2.42 2.42 0 0 1-.908-3.297c.664-1.174 2.125-1.572 3.32-.93 1.151.642 1.55 2.147.908 3.298a2.42 2.42 0 0 1-2.103 1.217 2.1 2.1 0 0 1-1.217-.287M35.86 5.35c-.354-1.284.42-2.612 1.704-2.966a2.407 2.407 0 0 1 2.966 1.704 2.41 2.41 0 0 1-2.324 3.055A2.41 2.41 0 0 1 35.86 5.35M62.598 6.92h.023c-1.306-.354-2.103-1.682-1.75-2.966a2.42 2.42 0 0 1 2.945-1.748 2.42 2.42 0 0 1 1.748 2.944 2.44 2.44 0 0 1-2.368 1.815c-.177.022-.398 0-.598-.045m-14.32-3.895C48.254 1.676 49.361.59 50.69.59a2.437 2.437 0 0 1 2.435 2.412 2.423 2.423 0 0 1-2.413 2.435h-.022c-1.306 0-2.413-1.084-2.413-2.412'
        opacity={0.6}
      />
      <path
        fill='#FF444F'
        d='m81.988.59-19.92 8.722v16.335c0 8.787 5.068 16.866 13.236 21.094l6.684 3.453 6.685-3.475c8.168-4.228 13.236-12.307 13.236-21.094V9.312z'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='M79.132 18.985a2.86 2.86 0 0 1 2.856-2.855 2.86 2.86 0 0 1 2.855 2.855v1.328h3.43v-1.328c0-3.475-2.832-6.308-6.307-6.308s-6.309 2.833-6.309 6.308v1.328h3.431v-1.328zM90.067 22.017H73.931a2.02 2.02 0 0 0-2.014 2.014v12.064c0 1.106.907 2.014 2.014 2.014h16.136a2.02 2.02 0 0 0 2.014-2.014V24.03a2.007 2.007 0 0 0-2.014-2.014'
      />
    </g>
    <defs>
      <clipPath id='0f0168dea993d53848ca91c141671bcc__a'>
        <path fill='#fff' d='M0 0h102v103H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightEmailVerificationIcon);
export default ForwardRef;
