// components/Head.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// 使用静态数据，模拟从 `getStaticProps` 或 `getServerSideProps` 中传递过来的数据
const siteMetadata = {
  defaultTitle: 'Default Site Title',
  defaultDescription: 'This is the default description of the site.',
  siteUrl: 'https://www.example.com',
  defaultImage: '/default-image.png',
  twitterUsername: '@twitterUsername',
};

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const CustomHead: React.FC<HeadProps> = ({ title, description, image }) => {
  const { asPath } = useRouter();

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } = siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${asPath}`,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
};
