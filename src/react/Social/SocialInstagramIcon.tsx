import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialInstagramIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='url(#a)' d='M26.462 7.46a1.922 1.922 0 1 0-3.844 0 1.922 1.922 0 0 0 3.844 0Z' />
    <path
      fill='url(#b)'
      d='M29.022 22.465c-.071 1.56-.332 2.407-.549 2.97a4.943 4.943 0 0 1-1.2 1.84c-.558.56-1.091.907-1.838 1.194-.563.22-1.413.482-2.974.556-1.686.075-2.186.09-6.463.09-4.273 0-4.777-.015-6.463-.09-1.56-.074-2.407-.336-2.97-.556a4.894 4.894 0 0 1-1.84-1.194 4.877 4.877 0 0 1-1.198-1.84c-.217-.563-.482-1.41-.55-2.97-.081-1.687-.096-2.195-.096-6.463 0-4.277.015-4.78.097-6.467.067-1.56.332-2.407.549-2.975a4.869 4.869 0 0 1 1.198-1.836 4.95 4.95 0 0 1 1.84-1.197c.563-.22 1.41-.479 2.97-.553 1.686-.074 2.19-.093 6.463-.093 4.277 0 4.777.019 6.463.093 1.56.074 2.411.332 2.974.553.747.29 1.28.638 1.837 1.197.563.56.91 1.09 1.201 1.836.217.568.478 1.415.55 2.975.077 1.686.096 2.19.096 6.467 0 4.268-.019 4.776-.097 6.463Zm2.88-13.062c-.078-1.704-.346-2.87-.746-3.884a7.8 7.8 0 0 0-1.843-2.836A7.867 7.867 0 0 0 26.481.839C25.462.444 24.3.172 22.596.097 20.89.015 20.346 0 15.998 0 11.655 0 11.106.015 9.4.097 7.7.172 6.54.444 5.515.84a7.887 7.887 0 0 0-2.828 1.844A7.862 7.862 0 0 0 .84 5.519C.444 6.534.176 7.7.093 9.403.02 11.11 0 11.655 0 16.002c0 4.344.019 4.888.093 6.594.083 1.701.351 2.865.747 3.885a7.848 7.848 0 0 0 1.847 2.832 7.884 7.884 0 0 0 2.828 1.847c1.024.396 2.184.665 3.885.743 1.706.078 2.255.097 6.598.097 4.347 0 4.892-.019 6.598-.097 1.705-.078 2.866-.347 3.885-.743a7.865 7.865 0 0 0 2.832-1.847 7.786 7.786 0 0 0 1.843-2.832c.4-1.02.668-2.184.747-3.885.078-1.706.097-2.25.097-6.594 0-4.347-.019-4.893-.097-6.599Z'
    />
    <path
      fill='url(#c)'
      d='M15.998 21.33a5.33 5.33 0 0 1-5.332-5.328 5.334 5.334 0 1 1 10.67 0 5.334 5.334 0 0 1-5.338 5.329Zm0-13.55c-4.538 0-8.213 3.684-8.213 8.222a8.213 8.213 0 0 0 8.213 8.213c4.538 0 8.218-3.679 8.218-8.213 0-4.538-3.68-8.221-8.218-8.221Z'
    />
    <defs>
      <linearGradient
        id='a'
        x1={-185.895}
        x2={56.12}
        y1={-185.731}
        y2={56.081}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFD521' />
        <stop offset={0.05} stopColor='#FFD521' />
        <stop offset={0.501} stopColor='#F50000' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={1} stopColor='#B900B4' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={0.289}
        x2={29.359}
        y1={0.291}
        y2={29.361}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFD521' />
        <stop offset={0.05} stopColor='#FFD521' />
        <stop offset={0.501} stopColor='#F50000' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={1} stopColor='#B900B4' />
      </linearGradient>
      <linearGradient
        id='c'
        x1={0.297}
        x2={29.36}
        y1={31.71}
        y2={2.647}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFD521' />
        <stop offset={0.05} stopColor='#FFD521' />
        <stop offset={0.501} stopColor='#F50000' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={0.95} stopColor='#B900B4' />
        <stop offset={1} stopColor='#B900B4' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialInstagramIcon);
export default ForwardRef;
