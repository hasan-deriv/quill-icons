import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodDragonpayBlackIcon = (
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
    <g fill='#000' opacity={0.997}>
      <path d='M17.863 52.557v2.276a.71.71 0 0 1-.4.727c-.5.35-1.049.623-1.63.81a2.05 2.05 0 0 1-2.51-1.537 6.2 6.2 0 0 1 0-3.813 2.55 2.55 0 0 1 3.074-1.783q.624.15 1.21.41c.163.082.245.154.245.318-.06.59-.037 1.181-.013 1.748.012.289.024.571.024.844' />
      <path
        fillRule='evenodd'
        d='M27.178 49.472a23.4 23.4 0 0 0-1.025-4.099 19.2 19.2 0 0 1-1.25-4.642c-.08-.68-.08-1.37 0-2.05.071-.89.212-1.735.356-2.594v-.002l.064-.386q.105-.634.328-1.24c0-.027.009-.055.018-.082.018-.055.037-.11-.018-.164s-.11-.036-.164-.018c-.027.009-.055.018-.082.018a3.07 3.07 0 0 0-1.578 1.486q-.483.839-.83 1.742a4.44 4.44 0 0 1-1.158 1.906.94.94 0 0 1-.912.164.79.79 0 0 1-.492-.738 2.3 2.3 0 0 1 .328-1.496q.41-.775.912-1.496a10.6 10.6 0 0 0 1.66-4.386 6.06 6.06 0 0 0-1.168-4.642 5 5 0 0 0-1.404-1.25c-.048.095-.012.167.026.242.027.054.056.11.056.178-.049.193-.012.357.027.53.027.12.055.243.055.382 0 .149.032.366.067.608.045.308.097.656.097.96.061.812.044 1.629-.052 2.439a3.07 3.07 0 0 1-1.024 1.988 1.49 1.49 0 0 1-1.66.164 1.38 1.38 0 0 1-.656-1.404c.12-.703.37-1.377.737-1.988.427-.82.654-1.73.666-2.655a16 16 0 0 0-.163-1.988 6.48 6.48 0 0 0-1.415-3.402 11.4 11.4 0 0 1-1.158-1.578 10.3 10.3 0 0 1-.748-3.556A22 22 0 0 1 15.813 13a.33.33 0 0 1-.256.082 5.7 5.7 0 0 0-2.152 1.824 11.1 11.1 0 0 0-1.988 3.146 9.8 9.8 0 0 0-.912 4.315q-.02.46.081.912.188.967.492 1.906.315.81.503 1.66c.043.215.063.433.085.662.02.208.04.426.079.66a3.25 3.25 0 0 1-.246 1.742.85.85 0 0 1-1.077.42 1.52 1.52 0 0 1-.912-1.086 10.73 10.73 0 0 1-.338-5.124q.15-.501.175-1.025a1.9 1.9 0 0 0-.749.656 6.6 6.6 0 0 0-1.332 1.998 6.8 6.8 0 0 0-.574 2.48q-.02 1.207.082 2.409c.173 1.06.48 2.092.912 3.074q.502 1.117 1.158 2.152c0 .092.082.174.164.256a6.9 6.9 0 0 1 1.333 2.398 1.23 1.23 0 0 1-.503 1.168.93.93 0 0 1-1.024-.338 5.2 5.2 0 0 1-.912-1.824 2.5 2.5 0 0 0-.503-1.076 4.7 4.7 0 0 0-.655-1.025 2.14 2.14 0 0 0-2.573-.83l-.049.024c-.129.06-.18.085-.033.304q.465.807.83 1.66c.085.127.142.27.164.42.142.425.283.826.427 1.232.106.3.213.603.321.92q.278.897.41 1.825a6.3 6.3 0 0 1-.082 1.742 24 24 0 0 1-.707 2.47 28 28 0 0 0-1.024 3.74 13.7 13.7 0 0 0-.328 3.146c-.03.888.025 1.777.164 2.654.178 1.058.484 2.091.912 3.075.302.76.69 1.482 1.158 2.152.42.584.83 1.086 1.25 1.578.343.387.732.73 1.158 1.025.168.115.327.23.487.344.31.221.62.444.999.68a.5.5 0 0 1-.093-.015c-.08-.019-.178-.041-.235.016-.256.151-.482.35-.666.584-.236.287-.3.678-.164 1.025.215.361.533.65.912.83a9.75 9.75 0 0 0 4.1 1.024c.911.082 1.823.082 2.735.082a11 11 0 0 0 1.65-.163q1.26-.227 2.49-.585a3.9 3.9 0 0 0 1.579-1.025.85.85 0 0 0 .163-.748 1.67 1.67 0 0 0-.748-.912c-.082 0-.163 0-.163-.082 0-.05.03-.07.074-.096a.5.5 0 0 0 .09-.068c.915-.405 1.735-.999 2.408-1.742.163-.196.341-.38.517-.563.265-.275.526-.545.723-.84.41-.667.748-1.333 1.076-1.989.63-1.554.94-3.22.912-4.898-.053-.526-.098-1.005-.14-1.451a53 53 0 0 0-.27-2.495m-4.192-2.182a7.3 7.3 0 0 0-2.838-2.757 8.9 8.9 0 0 0-5.196-.891 8 8 0 0 0-3.566 1.301 9.07 9.07 0 0 0-4.1 6.64 11.3 11.3 0 0 0 .083 3.331c.067.615.23 1.218.481 1.784.267.758.651 1.471 1.138 2.11a8.34 8.34 0 0 0 7.174 3.321c1.024-.082 2.049-.164 3.002-.328.236-.082.318-.164.318-.4v-1.024c0-.164 0-.246-.236-.164-1.34.335-2.72.472-4.1.41a6.43 6.43 0 0 1-3.402-1.22 6.65 6.65 0 0 1-2.356-2.839 9.7 9.7 0 0 1-.646-5.021 7.34 7.34 0 0 1 6.569-6.569 7.18 7.18 0 0 1 4.294.892 6.4 6.4 0 0 1 2.756 3.894c.368 1.484.451 3.024.246 4.54a11.5 11.5 0 0 1-.574 2.264.36.36 0 0 1-.4.246H19.79c-.164 0-.246 0-.246-.246v-8.382c0-.164 0-.246-.235-.246h-.974c-.492 0-.492 0-.492.41a.08.08 0 0 1-.082.082c-.123 0-.2-.047-.296-.105q-.047-.03-.104-.06a4.005 4.005 0 0 0-5.595 1.866 7.33 7.33 0 0 0-.082 5.841 3.34 3.34 0 0 0 2.429 2.05 3.8 3.8 0 0 0 3.33-.892q.215-.2.482-.318.143.434.164.892c0 .236.164.236.318.236h3.812a.72.72 0 0 0 .656-.4 11.4 11.4 0 0 0 1.373-5.35 9.64 9.64 0 0 0-1.26-4.898M64.224 47.32a6.9 6.9 0 0 1 1.824.574c.164.092.246.092.246-.164a.215.215 0 0 1 .246-.246h1.414c.14 0 .161.06.164.18v10.18a6.4 6.4 0 0 1-.656 2.716 4 4 0 0 1-2.736 2.152 7.5 7.5 0 0 1-2.736.174c-.377 0-.757-.084-1.15-.172-.292-.064-.59-.13-.9-.166-.164 0-.164-.164-.164-.328v-1.475c0-.246.082-.328.328-.246.849.346 1.742.57 2.654.666A4.5 4.5 0 0 0 64.584 61a2.05 2.05 0 0 0 1.445-1.66q.124-.99.112-1.989c-.118.077-.217.153-.306.22-.102.079-.19.146-.278.19a4.42 4.42 0 0 1-4.099.585 4.1 4.1 0 0 1-2.05-1.825 5.6 5.6 0 0 1-.573-1.988 9 9 0 0 1 0-2.572A5.2 5.2 0 0 1 60.4 48.56a4.37 4.37 0 0 1 3.823-1.24m-3.32 3.484a6.15 6.15 0 0 0 0 4.55 1.97 1.97 0 0 0 2.05 1.414 5.2 5.2 0 0 0 2.9-.912c.174-.082.174-.246.174-.41.094-.691.11-1.44.112-2.246v-3.308a.45.45 0 0 0-.256-.42 7.2 7.2 0 0 0-1.906-.492 2.746 2.746 0 0 0-3.074 1.824M53.208 47.402a5.04 5.04 0 0 1 2.48.748 3.07 3.07 0 0 1 1.116 1.906q.105.868.082 1.742v6.712c0 .247 0 .329-.256.247h-1.434a.214.214 0 0 1-.246-.246 2.3 2.3 0 0 1-.082-.83c-.157.05-.28.162-.407.278-.081.074-.164.15-.26.213a4.84 4.84 0 0 1-2.818 1.025 3.07 3.07 0 0 1-2.05-.584 3.37 3.37 0 0 1-1.331-1.906 3.92 3.92 0 0 1 .481-3.32 3.6 3.6 0 0 1 1.742-1.158c.884-.282 1.8-.447 2.726-.492.308-.049.616-.072.922-.095.275-.02.55-.04.82-.08.082 0 .175 0 .175-.081a2.19 2.19 0 0 0-.503-1.743 1.86 1.86 0 0 0-1.024-.492 5.6 5.6 0 0 0-1.158-.082 8.8 8.8 0 0 0-2.91.574c-.198.084-.3.128-.354.094-.057-.036-.057-.162-.057-.422v-1.342c0-.174.082-.256.246-.256a13.5 13.5 0 0 1 4.1-.41m1.403 5.636q-1 .063-1.988.246a5 5 0 0 0-1.906.584 1.886 1.886 0 0 0-.83 2.316 1.85 1.85 0 0 0 1.794 1.302 4.26 4.26 0 0 0 3.074-1.25c.092-.082.092-.164.092-.328l.02-1.374v-1.25c0-.246 0-.328-.256-.246M77.075 47.73a4.7 4.7 0 0 1 2.05 1.906 7.44 7.44 0 0 1 .83 4.099 6.9 6.9 0 0 1-.605 2.787 4.51 4.51 0 0 1-3.402 2.562 4.95 4.95 0 0 1-3.895-.82 4.9 4.9 0 0 1-1.578-2.049 5.7 5.7 0 0 1-.522-2.593 8.6 8.6 0 0 1 .245-2.49 5.65 5.65 0 0 1 1.24-2.408 4.56 4.56 0 0 1 2.655-1.322 5.37 5.37 0 0 1 2.982.328m-4.724 2.9a6.97 6.97 0 0 0 0 5.124 2.61 2.61 0 0 0 2.818 1.732 2.75 2.75 0 0 0 2.49-1.824c.24-.797.323-1.632.246-2.46a8.7 8.7 0 0 0-.328-2.49 2.75 2.75 0 0 0-2.408-1.814 2.61 2.61 0 0 0-2.818 1.732M38.696 43.17c.246 0 .339.081.246.256v15.003c0 .245-.082.328-.328.328h-1.28c-.257 0-.257-.082-.257-.246v-.83a9 9 0 0 0-.412.334c-.146.124-.28.238-.418.332a4.47 4.47 0 0 1-2.9.737 3.9 3.9 0 0 1-2.234-1.024 4.9 4.9 0 0 1-1.322-2.818 14.5 14.5 0 0 1-.174-2.737 5.72 5.72 0 0 1 1.25-3.474 4.26 4.26 0 0 1 4.1-1.66c.727.1 1.429.336 2.07.697v-4.56c0-.257.081-.339.337-.339zm-6.712 7.542a7.1 7.1 0 0 0-.082 5.226 2.05 2.05 0 0 0 1.906 1.414 4.1 4.1 0 0 0 3.075-1.168c.082-.082.082-.164.082-.328.071-.994.071-1.988.071-2.982v-2.982c0-.174-.082-.256-.246-.338a5.5 5.5 0 0 0-2.234-.492 2.61 2.61 0 0 0-2.572 1.65'
        clipRule='evenodd'
      />
      <path d='M88.522 47.566a3.17 3.17 0 0 1 1.906 2.408 5.1 5.1 0 0 1 .195 1.568v6.887c0 .245-.082.328-.328.328h-1.333c-.246 0-.246-.082-.246-.246v-5.8a10.6 10.6 0 0 0-.245-2.327 1.81 1.81 0 0 0-1.333-1.24 3.98 3.98 0 0 0-3.228 1.025c-.246.164-.246.328-.246.584v7.758c0 .245-.092.328-.338.328h-1.27c-.247 0-.339-.082-.339-.328V47.894c0-.246.092-.328.338-.328h1.24c.246 0 .338.082.338.328q.097.45.083.912a5.9 5.9 0 0 1 2.643-1.404 3.85 3.85 0 0 1 2.163.164M43.257 47.566c.164 0 .246.082.164.164q.09.746.061 1.496a6.8 6.8 0 0 1 2.327-1.414 3.4 3.4 0 0 1 1.578-.082c.14 0 .16.06.164.129v1.613c0 .246-.164.246-.257.246a4.22 4.22 0 0 0-3.638 1.086c-.174.082-.174.246-.174.41v7.297c0 .245-.082.328-.328.328h-1.301c-.174 0-.256-.082-.256-.246V47.812c0-.164 0-.246.164-.246z' />
      <path
        fillRule='evenodd'
        d='M100.625 47.955a4.1 4.1 0 0 1 1.66 2.644 9 9 0 0 1 .246 3.32 6.6 6.6 0 0 1-1.076 3.229 4.5 4.5 0 0 1-2.993 1.906 5.86 5.86 0 0 1-3.31-.707v4.386c0 .174-.082.256-.246.256h-1.332c-.246 0-.328-.082-.328-.338V47.986c0-.256.082-.338.328-.338h1.332c.164 0 .246.082.164.164v.912a6.5 6.5 0 0 1 1.578-1.025 3.83 3.83 0 0 1 3.977.256m-2.409 1.107a4.35 4.35 0 0 0-2.9 1.025.45.45 0 0 0-.246.41c.082 1.127.082 2.131.082 3.033v2.931c0 .164.082.246.246.328a7 7 0 0 0 1.824.502 2.758 2.758 0 0 0 3.239-2.265 7.4 7.4 0 0 0 .164-2.982 6.4 6.4 0 0 0-.421-1.742 2.05 2.05 0 0 0-1.988-1.24'
        clipRule='evenodd'
      />
      <path d='M122.535 47.545q.727.108 1.465.103c-.164.374-.31.748-.456 1.122s-.292.748-.456 1.122a191 191 0 0 0-1.477 3.783 174 174 0 0 1-1.669 4.251c-.343.812-.663 1.645-.984 2.476a89 89 0 0 1-.922 2.33q-.04.038-.065.074c-.042.056-.077.1-.191.1h-1.661c-.246 0-.246-.091-.164-.255.211-.456.418-.933.626-1.41.207-.476.415-.953.625-1.408.082-.246.184-.474.287-.702s.205-.456.287-.702a.7.7 0 0 0-.082-.585c-.205-.512-.392-1.024-.579-1.537s-.374-1.025-.579-1.537c-.399-.92-.74-1.899-1.069-2.843q-.127-.367-.253-.723c-.421-1.025-.831-2.05-1.169-3.075-.041-.082-.061-.166-.082-.25a1 1 0 0 0-.082-.252h1.824c.134 0 .159.055.208.164l.038.082c.228.59.429 1.142.632 1.702.171.471.345.948.537 1.455.241.625.461 1.252.681 1.88.303.865.607 1.731.969 2.598 0 .053.035.107.085.184q.04.06.089.144l.492-1.496c.258-.63.512-1.33.765-2.026.159-.435.317-.87.475-1.284l1.024-2.737c0-.04.024-.082.047-.123s.046-.082.046-.123c0-.081.082-.42.164-.502.056-.056.227-.035.382-.017.071.01.14.017.192.017' />
      <path
        fillRule='evenodd'
        d='M109.048 47.402c.882.03 1.738.289 2.491.748a3.07 3.07 0 0 1 1.158 1.988q.163 1.739.082 3.484v4.889c0 .245-.082.328-.328.328h-1.333c-.164 0-.246-.082-.164-.164a2.1 2.1 0 0 1-.133-.994 9 9 0 0 1-1.578 1.024 4.5 4.5 0 0 1-3.31.246 2.77 2.77 0 0 1-1.578-1.322 3.7 3.7 0 0 1-.584-2.49 3.27 3.27 0 0 1 2.49-2.982 10 10 0 0 1 2.654-.492c.305-.05.613-.072.922-.095.273-.02.547-.04.82-.08.082 0 .164 0 .164-.081a2.42 2.42 0 0 0-.584-1.824 2.15 2.15 0 0 0-1.025-.41 10 10 0 0 0-1.578-.082 7.9 7.9 0 0 0-2.398.574.08.08 0 0 0-.082.082c-.338.174-.338.174-.338-.246V48.15c0-.164.082-.256.256-.338a13.1 13.1 0 0 1 3.976-.41m1.527 5.554q-1.032.06-2.049.246a5 5 0 0 0-1.906.584 1.96 1.96 0 0 0-.831 2.316 1.63 1.63 0 0 0 1.825 1.25 4.26 4.26 0 0 0 3.074-1.25c.082-.082.082-.164.082-.328l.051-1.24v-1.332c0-.246-.082-.246-.246-.246'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodDragonpayBlackIcon);
export default ForwardRef;
