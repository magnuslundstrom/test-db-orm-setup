import { colors, fontSizes, spacing, widths } from '@variables';
import styled from 'styled-components';

export const Footer: React.FC<{}> = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <div>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy & Cookies</li>
          </ul>
        </div>
      </StyledFooter>
      <CopyRightBar>
        <p>Copyright @studypartnr - {new Date().getFullYear()}</p>
      </CopyRightBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.lightGray};
  padding: ${spacing.lg} 0px;
`;

const StyledFooter = styled.footer`
  max-width: ${widths.lg};
  margin: 0 auto;
`;

const CopyRightBar = styled.div`
  max-width: ${widths.lg};
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid ${colors.midGray};
  padding-top: ${spacing.lg};
  p {
    font-size: ${fontSizes.md};
    font-style: italic;
    margin: 0px;
  }
`;
