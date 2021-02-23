export const minGalleryLength = 2;
export const minSignupAge = 18;
export const minPasswordLength = 6;
export const maxBioLength = 350;

const male = 'male';
const female = 'female';
const noGender = 'all';
export const genderOrientation = [male, female, noGender];
export const genderLabel = {
  [male]: 'Male',
  [female]: 'Female',
  [noGender]: 'Non binary',
};
export const orientationLabel = {
  [male]: 'Men',
  [female]: 'Women',
  [noGender]: 'Anyone',
};
