import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slugs = (await params).slug;
  console.log(slugs);
  if (slugs.length == 2) {
    return (
      <h1>
        Viewing docs for feature {slugs[0]} and concept {slugs[1]}
      </h1>
    );
  } else if (slugs?.length === 1) {
    return <h1>Viewing docs for feature {slugs[0]}</h1>;
  }
  return <h1> Docs home page</h1>;
};

export default Docs;
