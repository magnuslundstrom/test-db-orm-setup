import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { colors, fontSizes, transitions } from '@variables';

/*
--- DEPRECATED ---
Not used anymore as it was easier to just implement with the react-form-hook some custom code. 
See how the sign up form is implemented and extract to this component if needed in the future.
*/

interface Props {
  imageString: string;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImageReset: () => void;
}

export const ProfileImageWithChange: React.FC<Props> = ({
  imageString,
  onImageChange,
  onImageReset,
}) => {
  const [displayCross, setDisplayCross] = useState(false);

  const extendedOnImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    onImageChange(e);
    setDisplayCross(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Wrapper>
        <ImageLabel htmlFor="imageInput">
          <Camera className="fas fa-camera" />
          <ProfileImage src={imageString} />
        </ImageLabel>
        {displayCross && (
          <CrossWrapper>
            <Cross onClick={onImageReset}>
              <i className="fas fa-times"></i>
            </Cross>
          </CrossWrapper>
        )}
        <ImageInput
          id="imageInput"
          type="file"
          onChange={extendedOnImageChange}
          accept=".jpg, .jpeg, .png"
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const CrossWrapper = styled.div`
  position: absolute;
  right: 0px;
  height: 27px;
  width: 27px;
  display: grid;
  place-items: center;
  background-color: ${colors.darkBlue};
  border-radius: 100%;
`;

const Cross = styled.span`
  color: ${colors.white};
`;

const ImageLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover i {
    opacity: 1;
  }
  cursor: pointer;
  border-radius: 100%;
`;

const ImageInput = styled.input`
  display: none;
`;

const Camera = styled.i`
  position: absolute;
  font-size: ${fontSizes.xl};
  color: ${colors.darkBlue};
  opacity: 0;
  transition: opacity ${transitions.fast};
`;

const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 100%;
`;
