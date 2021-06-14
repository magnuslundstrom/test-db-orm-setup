import { fontSizes, spacing } from '@variables';
import styled from 'styled-components';

/*
Considerations:
-> Should the headers have a default marginTop and marginBottom rather than we have to pass it in everytime.
-> Should we just be able to pass a certain boolean to remove marginTop or marginBottom instead
*/

type AvailableHeaders = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type FontSize = keyof typeof fontSizes;

interface Props {
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
}

const headerFactory = (type: AvailableHeaders, fontSize: FontSize) => {
  return styled[type]<Props>`
    font-size: ${fontSize};
    margin-top: ${({ marginTop }) => (marginTop ? spacing[marginTop] : '0px')};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? spacing[marginBottom] : '0px')};
  `;
};

// Need some more fontSizes;
export const H1 = headerFactory('h1', 'xl');
export const H2 = headerFactory('h2', 'lg');
export const H3 = headerFactory('h3', 'md');
export const H4 = headerFactory('h4', 'sm');
