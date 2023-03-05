/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Hızlı Performans',
    title: 'Hızlı Performans',
    text:
      'Ürünlerimiz en optimize düzeyde çalışacak hızlı ve performanslı şekilde profesyonelce tasarlanmaktadır',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Profesyonel Abonelik',
    title: 'Profesyonel Abonelik',
    text:
      'Herkesin yazılıma erişiminin önemli olduğuna inanıyoruz. Özellikle dijital dünyanın günümüzde bu kadar hayatımızın parçası olduğu zamanda.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Ortaklık Anlaşması',
    title: 'Ortaklık Anlaşması',
    text:
      'Çeşitli noktalarda ortaklık yaptığımız öncü firmalar ve sponsorlarımız ile sizlere hizmet veriyoruz',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Müşteri Desteği',
    title: 'Müşteri Desteği',
    text:
      'Müşterilerimiz ve iş ortaklarımız bizim için son derece önemlilerdir. Onlara her zaman destek ve yardımda bulunuyoruz.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}}>
      <Container>
        <SectionHeader 
        slogan="Kalite Özelliklerimiz"
        title="Şaşırtıcı Faydalı Özellikler"
        />

        <Grid sx={styles.grid}>
          {data.map((item)=>(
              <FeatureCard 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              />
          ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
