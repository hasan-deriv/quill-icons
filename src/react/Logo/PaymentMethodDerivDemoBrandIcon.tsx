import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodDerivDemoBrandIcon = (
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
    <path
      fill='#FF444F'
      d='m16.205 30.347-1.043 5.914h-3.62c-3.378 0-6.598 2.737-7.194 6.115l-.253 1.437c-.594 3.378 1.66 6.114 5.037 6.114h3.02c2.461 0 4.807-1.992 5.24-4.454l2.78-15.764zm-2.57 14.568c-.133.76-.817 1.38-1.578 1.38h-1.834c-1.518 0-2.534-1.233-2.268-2.754l.159-.896c.269-1.518 1.718-2.753 3.236-2.753h3.171zm30.451 5.012 2.376-13.477h3.758l-2.376 13.477h-3.76zm.407-13.322-.566 3.207c-1.78-.553-3.617-.377-4.182-.264l-1.83 10.382h-3.76l2.255-12.784c1.223-.506 4.227-1.534 8.083-.54m-15.236-.346H26.33c-2.85 0-5.567 2.31-6.07 5.16l-.59 3.35c-.503 2.85 1.399 5.159 4.249 5.159h6.222l.638-3.622h-5.847c-.95 0-1.585-.769-1.416-1.72l.02-.115h9.428l.538-3.052c.502-2.85-1.399-5.16-4.25-5.16zm.474 4.87-.022.195h-5.606l.03-.172c.17-.95 1.036-1.784 1.988-1.784h2.19c.94 0 1.576.821 1.42 1.762m35.15-4.68c-1.28 3.407-4.216 9.2-7.06 13.478h-3.76c-1.306-4.072-2.149-9.744-2.31-13.477h3.761c.068 1.218.613 5.734 1.235 8.89 1.706-3.07 3.587-7.098 4.371-8.89z'
    />
    <path
      fill='#414652'
      d='M75.407 47.257q.037.597.178 1.205t.443 1.309l-2.106.311a5.6 5.6 0 0 1-.525-1.374q-.538.52-1.465 1.037-.927.519-2.327.519-1.14 0-1.991-.35a3.9 3.9 0 0 1-1.435-.998 4.5 4.5 0 0 1-.898-1.542 7.2 7.2 0 0 1-.38-1.957 9.9 9.9 0 0 1 .374-3.395 8.1 8.1 0 0 1 1.555-2.955q1.073-1.296 2.761-2.087 1.689-.79 3.995-.79.284 0 .572.026.287.026.6.077l1.079-6.064 2.489-.415-2.722 15.162q-.094.597-.163 1.14a6 6 0 0 0-.034 1.14m-5.435.96q1.088 0 1.825-.455.736-.453 1.27-1.05 0-.414.036-.894.034-.478.13-1.05l1.156-6.479a3 3 0 0 0-.522-.065 12 12 0 0 0-.546-.012q-1.477 0-2.634.57t-1.94 1.529a6.3 6.3 0 0 0-1.16 2.216 7.5 7.5 0 0 0-.292 2.63q.037.597.2 1.14.163.546.475.973.31.427.806.687t1.196.26M83.808 50.264q-1.322 0-2.304-.376a4.9 4.9 0 0 1-1.67-1.037 4.5 4.5 0 0 1-1.054-1.542 5.8 5.8 0 0 1-.426-1.867 11 11 0 0 1 .329-3.498q.44-1.685 1.372-2.981a6.9 6.9 0 0 1 2.335-2.06q1.404-.765 3.245-.765 1.062 0 1.844.272.78.272 1.29.739.508.466.778 1.075.27.61.31 1.258.076 1.218-.313 2.06a3.96 3.96 0 0 1-1.08 1.413q-.69.57-1.643.88-.953.312-1.991.493-1.038.182-2.11.246-1.072.066-2.028.117-.013.207-.005.337l.013.207q.036.597.212 1.128.175.531.588.933.414.402 1.115.635t1.816.233q.492 0 1.018-.09.525-.09.996-.234.47-.142.838-.285.367-.142.515-.272l.333 2.047q-.501.285-1.634.61-1.134.324-2.689.324M80.89 42.85q1.5-.052 2.736-.194 1.235-.143 2.12-.493t1.355-.946.41-1.555q-.015-.234-.121-.492a1.4 1.4 0 0 0-.341-.48 1.8 1.8 0 0 0-.631-.363 2.9 2.9 0 0 0-.968-.143q-.907 0-1.674.39-.766.389-1.35 1.023a5.7 5.7 0 0 0-.971 1.477 7.6 7.6 0 0 0-.565 1.776M105.412 36.164q1.14 0 1.952.35a3.6 3.6 0 0 1 1.328.946q.516.597.773 1.386.255.792.31 1.672.035.57-.015 1.231t-.168 1.283l-1.234 6.895h-2.411l1.137-6.376q.093-.597.216-1.335.123-.739.079-1.465a4 4 0 0 0-.176-.959 2.2 2.2 0 0 0-.438-.803 2.1 2.1 0 0 0-.798-.544q-.506-.208-1.231-.208-.83 0-1.587.324a7.6 7.6 0 0 0-1.255.661q.074.363.134.713t.081.687q.037.597-.016 1.205a19 19 0 0 1-.146 1.205l-1.235 6.895h-2.41l1.136-6.376q.093-.597.203-1.348.108-.751.063-1.504a4.4 4.4 0 0 0-.162-.945 2.3 2.3 0 0 0-.399-.791 1.85 1.85 0 0 0-.693-.531q-.427-.195-1.075-.195-.649 0-1.252.078-.604.078-1.011.207l-2.046 11.405h-2.41l2.313-12.96a17.5 17.5 0 0 1 2.517-.583q1.373-.22 2.461-.22 1.089 0 1.864.376.774.375 1.253.997.248-.18.687-.414t1.01-.44q.57-.208 1.248-.364a6.2 6.2 0 0 1 1.403-.155M116.517 50.264q-2.126 0-3.408-1.258-1.283-1.256-1.418-3.46a12.4 12.4 0 0 1 .233-3.162 9.3 9.3 0 0 1 1.172-3.058 7 7 0 0 1 2.269-2.307q1.421-.906 3.521-.907 2.125 0 3.408 1.257 1.283 1.258 1.418 3.46a12.5 12.5 0 0 1-.233 3.162 9.3 9.3 0 0 1-1.173 3.059 7 7 0 0 1-2.268 2.306q-1.422.907-3.521.907m.288-2.048q1.166 0 2.045-.674a5.36 5.36 0 0 0 1.449-1.724q.571-1.049.83-2.32a9.4 9.4 0 0 0 .185-2.462q-.081-1.32-.699-2.099-.619-.777-2.018-.778-1.166 0-2.045.675a5.4 5.4 0 0 0-1.449 1.723 8.3 8.3 0 0 0-.829 2.32 9.4 9.4 0 0 0-.186 2.462q.082 1.32.7 2.1.618.777 2.017.777'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodDerivDemoBrandIcon);
export default ForwardRef;
