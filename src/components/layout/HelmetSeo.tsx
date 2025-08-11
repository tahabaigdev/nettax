import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetSeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const HelmetSeo: React.FC<HelmetSeoProps> = ({
  title,
  description,
  image,
  url,
}: HelmetSeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default HelmetSeo;
