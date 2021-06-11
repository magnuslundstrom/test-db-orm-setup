import styled from 'styled-components';
import Image from 'next/image';
import { Layout } from '@components/global/layout/Layout';

export default function Home() {
  return (
    <div>
      <Layout title="Front page">
        <div>
          <GridComponent columns={2}>
            <article>
              <h1>Find studypartners around the globe</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi a, quibusdam earum,
              rem quis, corporis quas exercitationem eaque culpa perferendis saepe rerum numquam non
              harum voluptas soluta nesciunt ad hic.
            </article>
            <article style={{ textAlign: 'right' }}>
              <Image src="/images/study-together-figures.png" height={400} width={400} />
            </article>
          </GridComponent>
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: '100px',
            background: '#f3f3f3',
            padding: '30px',
          }}
        >
          <h2>These sponsors make it possible</h2>
          <GridComponent columns={3}>
            <article>
              <h3>Aeroro</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor molestias,
                voluptates soluta magnam sunt vitae mollitia facere non neque nobis doloribus? Ut
                isteitationem architecto incidunt odit quaerat?
              </p>
            </article>
            <article>
              <h3>Avianic</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam pariatur quasi
                consequuntur illum consequatur modi tenetur obcaecati laborum. Aut cupiditate minima
                doloribus deserunt voluptatem ipsa veniam quo explicabo assumenda!
              </p>
            </article>
            <article>
              <h3>Cizlo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur omnis
                quos hic eaque numquam! Hic, voluptas! Praesentium ab magnam quidem aspernatur sit
                ut, ad facere mollitia illum, minus excepturi.
              </p>
            </article>
          </GridComponent>
        </div>
      </Layout>
    </div>
  );
}

const GridComponent = styled.article<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: 30px;
`;
