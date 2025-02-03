// 기본적인 레이아웃 전체 구조를 잡아주는 컴포넌트

import React from 'react'

const DefaultLayout = ({ children }) => {
  return (
    <div className='w-full h-full overflow-y-scroll bg-slate-400'>
      <div className='max-w-xl mx-auto min-w-[20rem]'>
        { children }
      </div>
    </div>
  )
}

export default DefaultLayout