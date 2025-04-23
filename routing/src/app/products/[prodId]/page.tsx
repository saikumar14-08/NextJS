import React from 'react'

const Products = async ({params}: {params: Promise<{prodId: string}>}) => {
  const proId = (await params).prodId;
  return (
    <div>Product {proId} details</div>
  )
}

export default Products