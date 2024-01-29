import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPixBrandIcon = (
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
      fill='#939598'
      fillRule='evenodd'
      d='M81.538 28.552a2.3 2.3 0 0 0-.903-.183H77.82a.681.681 0 0 1 0-1.362h2.816a3.677 3.677 0 0 1 3.678 3.779v16.338a.681.681 0 0 1-1.362 0V30.756a2.32 2.32 0 0 0-1.413-2.204m-19.294-.137a6.596 6.596 0 0 0-6.63 6.63v21.933a.681.681 0 1 1-1.363 0V35.044a7.96 7.96 0 0 1 7.993-7.992h6.493A7.947 7.947 0 0 1 76.684 35v4.677c0 4.464-3.574 7.993-7.947 7.993h-9.173a.681.681 0 1 1 0-1.363h9.173c3.62 0 6.585-2.919 6.585-6.63V35a6.585 6.585 0 0 0-6.585-6.585z'
      clipRule='evenodd'
    />
    <path
      fill='#32BCAD'
      d='m82.534 24.827-1.271-1.272a.82.82 0 0 1 0-1.18l1.271-1.272a.817.817 0 0 1 1.136 0l1.271 1.272a.817.817 0 0 1 0 1.135l-1.271 1.317a.82.82 0 0 1-1.136 0M37.805 50.757c-1.363 0-2.725-.545-3.679-1.544L28.768 43.9c-.363-.41-1.044-.41-1.362 0l-5.45 5.358a5.22 5.22 0 0 1-3.633 1.544h-1.09l6.812 6.766a5.45 5.45 0 0 0 7.63 0l6.81-6.811zM18.278 31.866c1.408 0 2.725.544 3.724 1.498l5.358 5.404a1 1 0 0 0 1.408 0l5.358-5.358a5.22 5.22 0 0 1 3.679-1.544h.68l-6.81-6.812a5.45 5.45 0 0 0-7.675 0l-6.721 6.812z'
    />
    <path
      fill='#32BCAD'
      d='m44.071 37.497-4.087-4.087H37.85a3.68 3.68 0 0 0-2.634 1.09l-5.313 5.358a2.55 2.55 0 0 1-1.816.772 2.54 2.54 0 0 1-1.817-.772l-5.404-5.359a3.68 3.68 0 0 0-2.588-1.09h-2.27l-.273-.045-4.132 4.087a5.45 5.45 0 0 0 0 7.72l4.087 4.087.318-.046h2.27a3.68 3.68 0 0 0 2.634-1.09l5.404-5.358a2.634 2.634 0 0 1 3.633 0l5.267 5.359a3.68 3.68 0 0 0 2.589 1.044h1.862l.317.091 4.087-4.087a5.45 5.45 0 0 0 0-7.72'
    />
    <path
      fill='#939598'
      d='m60.01 54.753-.999.136v1.362l.772.091c.682 0 1-.227 1-.817 0-.545-.273-.772-.773-.772m-1.226 2.452V54.57h.182v.136c.318-.09.772-.181 1.044-.181.273 0 .5 0 .682.181.272.227.318.5.318.818 0 .363-.091.68-.455.908-.181.09-.454.136-.726.136l-.818-.136v.772zm3.906-2.452c-.681 0-.954.181-.954.772 0 .59.273.817.954.817s.999-.182.999-.772-.318-.817-1-.817m.908 1.59c-.273.18-.545.226-.908.226-.318 0-.636-.045-.863-.227-.227-.136-.318-.454-.318-.772 0-.363.09-.681.318-.817.227-.182.545-.227.908-.227.318 0 .59.045.818.227.272.136.363.454.363.772 0 .363-.091.68-.363.817m3.178.182-.726-1.635-.772 1.635h-.182l-.817-1.953h.272l.636 1.635.726-1.635h.228l.726 1.635.681-1.635h.227l-.772 1.953zm2.452-1.817c-.635 0-.817.318-.908.681h1.817c-.046-.454-.273-.68-.909-.68m0 1.862c-.363 0-.635-.045-.817-.227-.227-.182-.318-.454-.318-.772s.136-.681.363-.863c.227-.136.454-.181.772-.181.27-.018.539.045.772.181.273.182.318.545.318.908h-1.952c0 .41.136.727.908.727.318 0 .636 0 .954-.09v.18c-.318.092-.682.137-1 .137m1.771-.045V54.57h.182v.136c.454-.136.59-.181.954-.181v.227c-.318 0-.5 0-.909.136v1.635zm2.498-1.817c-.636 0-.817.318-.908.681h1.77c0-.454-.226-.68-.907-.68m0 1.861c-.364 0-.59-.045-.772-.227-.227-.182-.318-.454-.318-.772s.136-.681.363-.863c.227-.136.454-.181.772-.181.27-.018.538.045.772.181.272.182.318.545.318.908h-1.953c0 .41.136.727.908.727.318 0 .636 0 .954-.09v.18c-.318.092-.681.137-.999.137m3.588-1.726a2.3 2.3 0 0 0-.773-.09c-.68 0-.999.227-.999.817 0 .545.273.772.772.772l1-.136zm0 1.68v-.136c-.318.091-.727.182-1.045.182-.227 0-.454 0-.681-.181-.227-.228-.318-.5-.318-.818 0-.363.136-.681.454-.908.227-.091.5-.136.772-.136l.818.136v-.908h.226v2.724zm3.541-1.816c-.317 0-.68.091-.999.182v1.362c.25.075.512.105.772.091.682 0 1-.227 1-.817 0-.545-.273-.772-.772-.772m.59 1.635c-.227.136-.545.181-.818.181a2.7 2.7 0 0 1-.862-.136v.09h-.137V53.8h.227v.908q.492-.137 1-.181c.272 0 .454 0 .68.181.228.227.319.5.319.818 0 .363-.137.68-.455.908m.772.817v-.181h.273c.272 0 .454-.091.59-.41l.091-.135-.999-1.953h.227l.908 1.68.818-1.68h.272l-1.09 2.18c-.227.409-.454.545-.817.545h-.273m5.268-1.908h-.727v.682h.727c.545 0 .727 0 .727-.318s-.273-.364-.727-.364m-.136-1.09h-.59v.682h.59c.5 0 .726 0 .726-.318s-.272-.363-.726-.363m1.18 2.044c-.272.182-.635.182-1.226.182H85.85V53.89h1.09c.545 0 .863 0 1.135.181.182.091.273.273.273.5 0 .273-.136.454-.454.59.363.091.59.273.59.636q0 .409-.273.545m2.544-.636a8 8 0 0 0-.682 0c-.408 0-.545.046-.545.227 0 .182.137.273.454.273l.773-.136zm.136.818v-.136c-.364.09-.727.181-1.09.181-.182 0-.409 0-.545-.136-.182-.09-.227-.273-.227-.454 0-.227.09-.454.318-.545.233-.08.48-.11.726-.091h.681c0-.318-.181-.454-.726-.454l-.727.045v-.363l.863-.045c.318 0 .681 0 .908.181.182.136.227.364.227.681v1.136zm2.951 0v-1.136c0-.363-.181-.454-.5-.454q-.39.004-.771.091v1.453h-.545v-1.952h.454v.136c.318-.091.727-.182 1.044-.182.228 0 .455 0 .636.182.182.136.227.363.227.636v1.18zm2.044.045c-.227 0-.5 0-.681-.181-.273-.228-.318-.5-.318-.863 0-.273.09-.636.363-.818.273-.136.545-.181.908-.181h.636v.454h-.59c-.545 0-.772.136-.772.59 0 .409.181.59.59.59l.817-.136v.454l-.908.091m2.498-1.635c-.5 0-.727.137-.727.59 0 .455.227.636.727.636.545 0 .727-.136.727-.59s-.182-.636-.727-.636m.908 1.454c-.181.136-.5.181-.908.181-.363 0-.681-.045-.908-.181-.273-.182-.364-.455-.364-.818s.091-.681.364-.863c.227-.136.545-.181.908-.181.409 0 .727.045.908.181.318.182.409.454.409.818s-.091.68-.364.863m3.452.181c-.318 0-.681-.045-.908-.272-.318-.273-.455-.681-.455-1.09s.137-.863.545-1.136c.318-.181.727-.227 1.136-.227h.908v.5a12 12 0 0 0-.908 0c-.727 0-1.045.272-1.045.863 0 .59.273.908.818.908.363 0 .772-.09 1.18-.182v.455c-.408.09-.817.181-1.271.181m2.861-1.68c-.454 0-.591.136-.636.454h1.271c0-.318-.181-.454-.635-.454m-.091 1.68c-.318 0-.591 0-.818-.227-.227-.182-.272-.454-.272-.817 0-.273.091-.59.363-.818.227-.136.5-.181.818-.181.272 0 .59 0 .862.181.318.227.318.59.318.954h-1.816c0 .318.136.5.681.5l1.044-.091v.363c-.363.09-.772.136-1.18.136m3.678-.045v-1.136c0-.363-.182-.454-.454-.454q-.414 0-.817.091v1.453h-.545v-1.952h.454v.136c.318-.091.726-.182 1.044-.182.227 0 .454 0 .636.182.182.136.227.363.227.636v1.18zm2.089.045c-.273 0-.5-.09-.636-.272-.091-.137-.136-.318-.136-.59v-.727h-.409v-.409h.409l.045-.59h.454v.59h.772v.409h-.726v.999c.091.136.227.181.409.181l.363-.045v.363zm1.044-.045V54.57h.454v.136c.364-.09.636-.181.954-.181h.091v.454h-.182c-.272 0-.454 0-.772.09v1.454zm3.452-.818a8 8 0 0 0-.682 0c-.408 0-.544.046-.544.227 0 .182.136.273.454.273l.772-.136zm.136.818v-.136c-.363.09-.727.181-1.09.181-.182 0-.454 0-.59-.136-.137-.09-.182-.273-.182-.454 0-.227.091-.454.318-.545.233-.08.481-.11.726-.091h.682c0-.318-.182-.454-.727-.454l-.727.045v-.363l.818-.045c.363 0 .681 0 .908.181.227.136.273.364.273.681v1.136zm1.09-2.725h.545v2.725h-.545z'
    />
    <path
      fill='#939598'
      fillRule='evenodd'
      d='M87.092 27.688c0-.376.304-.681.68-.681h2.346a5.5 5.5 0 0 1 3.897 1.614l7.361 7.361a1.25 1.25 0 0 0 1.769 0l6.879-6.878a5.5 5.5 0 0 1 3.896-1.614h2.829a.681.681 0 0 1 0 1.362h-2.829c-1.1 0-2.155.437-2.933 1.215l-6.879 6.878a2.613 2.613 0 0 1-3.695 0l-7.361-7.361a4.15 4.15 0 0 0-2.934-1.215h-2.346a.68.68 0 0 1-.68-.681M118 47.642c0 .34-.311.614-.694.614h-2.39c-1.489 0-2.917-.523-3.97-1.456l-7.499-6.643a1.39 1.39 0 0 0-1.802 0l-7.008 6.207c-1.053.933-2.48 1.457-3.97 1.457h-2.882c-.383 0-.694-.276-.694-.615 0-.34.311-.614.694-.614h2.882c1.121 0 2.196-.395 2.989-1.097l7.008-6.207c1.039-.92 2.724-.92 3.764 0l7.5 6.643c.792.702 1.867 1.097 2.988 1.097h2.39c.383 0 .694.275.694.614'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPixBrandIcon);
export default ForwardRef;
