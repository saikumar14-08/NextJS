import React from "react";
import { notFound } from "next/navigation";
const Reviews = async ({
  params,
}: {
  params: Promise<{ reviewId: string; prodId: string }>;
}) => {
  const { reviewId, prodId } = await params;
  if (parseInt(reviewId) > 1000) notFound();

  return (
    <div>
      Review {reviewId} for product {prodId}
    </div>
  );
};

export default Reviews;
