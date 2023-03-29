import React, { memo } from 'react'

const ChildMemo = () => {
    console.log("child component render");
  return (
    <div>
      Child memo
    </div>
  )
}

export default memo(ChildMemo)
