import Image from 'next/image';
import { Layout } from '@components/global/Layout';
import { SponsorList } from '../components/sponsors/SponsorList';
import { Grid } from '@blocks/Grid';

export default function Home() {
  return (
    <div>
      <Layout title="Front page">
        <div>
          <Grid columns="1fr 1fr" gap="xl">
            <article>
              <h1>Find studypartners around the globe</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi a, quibusdam earum,
              rem quis, corporis quas exercitationem eaque culpa perferendis saepe rerum numquam non
              harum voluptas soluta nesciunt ad hic.
            </article>
            <article style={{ textAlign: 'right' }}>
              <Image src="/images/study-together-figures.png" height={400} width={400} />
            </article>
          </Grid>
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: '100px',
            padding: '30px',
          }}
        >
          <h2>Sponsors that make this possible</h2>
          <SponsorList
            sponsors={[
              {
                sponsorName: 'Aeroro',
                sponsorText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                            voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                            isteitationem architecto incidunt odit quaerat?`,
              },
              {
                sponsorName: 'Avianic',
                sponsorText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                            voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                            isteitationem architecto incidunt odit quaerat?`,
              },
              {
                sponsorName: 'Cizlo',
                sponsorText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                            voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                            isteitationem architecto incidunt odit quaerat?`,
              },
              {
                sponsorName: 'Zeura Jewellery',
                sponsorText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                            voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                            isteitationem architecto incidunt odit quaerat?`,
              },
              {
                sponsorName: 'Orion Cars',
                sponsorText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                            voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                            isteitationem architecto incidunt odit quaerat?`,
              },
            ]}
          />
        </div>
      </Layout>
    </div>
  );
}
