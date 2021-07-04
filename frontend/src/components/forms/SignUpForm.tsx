import { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Form, Input, Label, FormErrorMessage } from '@elements';
import { emailValidationRegex } from '@utils/validations/emailValidation';
import { tryCatch } from '@utils/helperFunctions/tryCatch';
import { numberValidationRegex } from '@utils/validations/numberValidation';
import { defaultImageString } from '@constants';
import { generateFormData } from '@utils/helperFunctions/generateFormData';

// Still needs to implement error check and error message after submit.
// Also make use of label rather than the file input button

interface FormState {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
  profileImage: FileList;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const [profileImage, setProfileImage] = useState(defaultImageString);
  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const image = e.target.files[0];
      if (image) {
        const imageString = URL.createObjectURL(image);
        setProfileImage(imageString);
        return;
      }
    }
  };

  const onSubmit = async (data: FormState) => {
    let profileImage = data.profileImage[0];
    const { email, firstName, lastName, password, age } = data;
    const send = { profileImage, email, firstName, lastName, password, age };
    const [res, error] = await tryCatch(
      axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/sign-up`, generateFormData(send))
    );
    // Implement error check and error message later
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit((data) => onSubmit(data))();
      }}
      width="sm"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProfileImage src={profileImage} />
        <input
          {...register('profileImage', {
            required: 'Please select a profile image',
          })}
          type="file"
          onChange={onImageChange}
          id="profileImage"
          style={{ marginBottom: '10px' }}
        />
      </div>
      <FormErrorMessage>{errors.profileImage && errors.profileImage.message}</FormErrorMessage>

      <Label htmlFor="firstName">First Name</Label>
      <Input
        {...register('firstName', {
          required: 'First name is required',
          minLength: { value: 4, message: 'First name must be atleast 4 characters' },
        })}
        id="firstName"
      />
      <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>

      <Label htmlFor="lastName">Last Name</Label>
      <Input
        {...register('lastName', {
          required: 'Last name is required',
          minLength: { value: 4, message: 'Last name must be atleast 4 characters' },
        })}
      />
      <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>

      <Label htmlFor="age">Age</Label>
      <Input
        {...register('age', {
          required: 'Age is required',
          pattern: {
            value: numberValidationRegex,
            message: 'Must be a number',
          },
        })}
        id="age"
      />
      <FormErrorMessage>{errors.age && errors.age.message}</FormErrorMessage>

      <Label htmlFor="email">Email</Label>
      <Input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: emailValidationRegex,
            message: 'Enter a valid email',
          },
        })}
        id="email"
      />
      <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>

      <Label htmlFor="password">Password</Label>
      <Input
        {...register('password', {
          required: 'Password is required',
        })}
        id="password"
        type="password"
      />
      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      <Button backgroundColor="midGreen">Sign up</Button>
    </Form>
  );
};

const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 100%;
`;
