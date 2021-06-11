import styled from 'styled-components';
import { shadow, rounded, colors, spacing } from '@variables';

export interface iSponsor {
  sponsorName: string;
  sponsorText: string;
}

interface Props {
  sponsor: iSponsor;
}

export const Sponsor: React.FC<Props> = ({ sponsor: { sponsorName, sponsorText } }) => {
  return (
    <SponsorBox>
      <h3>{sponsorName}</h3>
      <p>{sponsorText}</p>
    </SponsorBox>
  );
};

const SponsorBox = styled.article`
  background-color: ${colors.lightGray};
  border-radius: ${rounded.sm};
  box-shadow: ${shadow.md};
  padding: ${spacing.md};

  h3 {
    display: inline-block;
    border-bottom: 1px solid;
    padding: 0px 10px;
    margin-bottom: 0px;
  }
`;
