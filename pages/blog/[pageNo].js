import { useRouter } from 'next/router'
import React from 'react'

const pageNo = () => {
    const router=useRouter();               //dynamic routing
    const pageNoRoute=router.query.pageNo   //you can remove blog1 to any name and blog400
  return (
    <div>This is {pageNoRoute} page</div>
  )
}

export default pageNo