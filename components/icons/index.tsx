import * as React from 'react'

export const CameraIcon = ({
  height = '24px',
  width = '24px',
  color = 'black',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 24 24'
    {...props}
  >
    <circle cx='12' cy='12' r='3.2' fill={color} />
    <path
      d='M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'
      fill={color}
    />
    <path d='M0 0h24v24H0z' fill='none' />
  </svg>
)

export const Arrow = () => (
  <svg
    width='33'
    height='23'
    viewBox='0 0 33 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.9611 12.9912C32.5469 12.4054 32.5469 11.4557 31.9611 10.8699L22.4152 1.32394C21.8294 0.738155 20.8796 0.738155 20.2939 1.32394C19.7081 1.90973 19.7081 2.85948 20.2939 3.44526L28.7791 11.9305L20.2939 20.4158C19.7081 21.0016 19.7081 21.9514 20.2939 22.5371C20.8796 23.1229 21.8294 23.1229 22.4152 22.5371L31.9611 12.9912ZM0.705566 13.4305L30.9005 13.4305L30.9005 10.4305L0.705567 10.4305L0.705566 13.4305Z'
      fill='#121619'
    />
  </svg>
)
