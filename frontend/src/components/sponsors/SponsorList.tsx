import { Sponsor, iSponsor } from './Sponsor';
import { useSlider } from '@hooks/useSlider/useSlider';
import { Grid } from '@blocks';

type iSponsors = iSponsor[];

interface Props {
  sponsors: iSponsors;
}

/** limit of sponsors pr slide */
const limit = 3;

export const SponsorList: React.FC<Props> = ({ sponsors }) => {
  const { start, changeDirection } = useSlider(3, sponsors.length);

  const renderSponsors = (sponsors: iSponsors) =>
    sponsors.map((sponsor, idx) => <Sponsor sponsor={sponsor} key={idx} />);

  return (
    <>
      <Grid columns="1fr 6fr 6fr 6fr 1fr" gap="md">
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
