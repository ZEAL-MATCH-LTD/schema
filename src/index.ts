import * as yup from 'yup';
import { genderOrientation, minGalleryLength, minSignupAge } from './business-logic';
import errorMessages from './error-messages';

export const string: yup.StringSchema = yup.string();
export const number: yup.NumberSchema = yup.number();
export const website: yup.StringSchema = yup.string().url();
export const date: yup.DateSchema = yup.date();
export const pushNotificationToken = yup.string();
export const city = yup.string();
export const lon: yup.NumberSchema = yup.number();
export const lat: yup.NumberSchema = yup.number();
export const gender: yup.StringSchema = yup.string().oneOf(genderOrientation, errorMessages.gender);
export const orientation: yup.StringSchema = yup.string().oneOf(genderOrientation, errorMessages.orientation);
export const sports: yup.ArraySchema<any> = yup.array().min(1, errorMessages.pickAtleastOne);
export const image: yup.StringSchema = yup.string().url();
export const gallery: yup.ArraySchema<any> = yup.array(image).min(minGalleryLength, errorMessages.imagesMin);
export const minAge = (age: number = minSignupAge): yup.DateSchema => {
  const now = Date.now();
  const cutoffDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * age);
  return yup.date().max(cutoffDate, errorMessages.minAge(age));
};
export const required = (schema: yup.AnySchema): yup.AnySchema => {
  return schema.required(errorMessages.required);
};

export default yup;
