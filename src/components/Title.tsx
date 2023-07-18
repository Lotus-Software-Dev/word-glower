import React from 'react'

type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <div className="text-5xl font-sans text-[#6527BE]">{children}</div>
}
