import React from 'react'

const Reviews = async ({params}: {params: Promise<{reviewId: string, prodId: string}>}) => {
  const {reviewId, prodId} = (await params);
  return (
    <div>Review {reviewId} for {prodId}</div>
  )
}

export default Reviews