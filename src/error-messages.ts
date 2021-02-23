import { genderOrientation, minGalleryLength, minSignupAge } from './business-logic';

export default {
  required: 'This field is required',
  email: 'Must be a valid email',
  passwordMin: `Your password must be 6 characters minimum`,
  passwordMatch: 'Passwords must match',
  termsAndConditions: 'You must accept our terms and conditions.',
  pickOne: 'Please pick one',
  pickAtleastOne: 'Please pick atleast one',
  imageRequired: 'This image is required.',
  imagesMin: `Sorry, you need atleast ${minGalleryLength} images to proceed.`,
  string: 'Value must be a string',
  date: 'Must be a valid date',
  minAge: `You must be ${minSignupAge} years old to register with Zeal`,
  gender: `Gender must be one of ${genderOrientation.join(', ')}`,
  orientation: `Sexual preference must be one of ${genderOrientation.join(', ')}`,
};
