import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import { DefaultSeo } from 'next-seo';

export default function CustomApp({ Component, pageProps }) {
  return (
  <>
    <DefaultSeo
      title="Viveven"
      description="Viveven Landing Page"
      canonical="https://viveven.com"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.viveven.com/',
        siteName: 'Viveven',
    }}
    twitter={{
      handle: '@handle',
      site: 'www.viveven.com',
      cardType: 'summary_large_image',
    }}
    />
    <Component {...pageProps} />
  </>
  );
}
