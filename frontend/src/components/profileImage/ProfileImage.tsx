import styled from 'styled-components';
import { profileImageRootUrl } from '@constants';

interface Props {
  imageSrc: string;
}
export const ProfileImage: React.FC<Props> = ({ imageSrc }) => {
  return <Image src={profileImageRootUrl + imageSrc} />;
};

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  object-fit: cover;
`;
