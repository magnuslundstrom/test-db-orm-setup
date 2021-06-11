import styled from 'styled-components';
import { Sponsor, iSponsor } from './Sponsor';
import { useSlider } from '@utils/hooks/useSlider';

type iSponsors = iSponsor[];

interface Props {
  sponsors: iSponsors;
}

/** limit of sponsors pr slide */
const limit = 3;

export const SponsorList: React.FC<Props> = ({ sponsors }) => {
  const { start, changeDirection } = useSlider(3, sponsors.length);

  const renderSponsors = (sponsors: iSponsors) =>
    sponsors.map((sponsor) => <Sponsor sponsor={sponsor} />);

  return (
    <>
      <Grid>
        <button onClick={() => changeDirection(-1)}>
          <i className="fas fa-arrow-left"></i>
        </button>
        {renderSponsors(sponsors.slice(start, limit + start))}
        <button onClick={() => changeDirection(1)}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(${limit}, 12fr) 1fr;
  grid-gap: 30px;
  margin: 30px 0px;
`;
