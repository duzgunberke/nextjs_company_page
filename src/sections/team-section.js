/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import Member7 from 'assets/team/member-7.png';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Berke Düzgün',
    title: 'Berke Düzgün',
    designation: 'Founder & Tech Lead',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/berkeduzgun/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Enes Sait Besler',
    title: 'Enes Sait Besler',
    designation: 'Software Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/enessaitbesler/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Sinan Kerim Canan',
    title: 'Sinan Kerim Canan',
    designation: 'IOS Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/sinankerimcanan/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Fatma Sultan Teke',
    title: 'Fatma Sultan Teke',
    designation: 'Business Manager',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/fatma-sultan-teke-3470911b4/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Okan Özdemir',
    title: 'Okan Özdemir',
    designation: 'IOS Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/okan-r/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Adem Sonkaya',
    title: 'Adem Sonkaya',
    designation: 'Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/adem-sonkaya-53a20a223/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 7,
    imgSrc: Member7,
    altText: 'Ravza Doğan',
    title: 'Ravza Doğan',
    designation: 'Frontend Developer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/%C5%9F-ravza-do%C4%9Fan-84b324176/',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader 
        slogan="Ekibimiz" 
        title="Nitelikli ve yetenekli bireylerden oluşan ekibimizle sizlere en iyi hizmeti sunmaya çalışıyoruz."
        />
        <Grid sx={styles.grid}> 
          {data.map((item)=>(
            <TeamCard 
             key={item.id}
             src={item.imgSrc}
             altText={item.altText}
             title={item.title}
             designation={item.designation}
             social={item.socialProfile}
             />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
