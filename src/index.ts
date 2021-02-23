import * as yup from 'yup'
import { genderOrientation, minGalleryLength, minSignupAge } from './business-logic';
import errorMessages from './error-messages';

export const string = yup.string();
export const number = yup.number();
export const website = yup.string().url();
export const date = yup.date();
export const pushNotificationToken = yup.string();
export const city = yup.string();
export const lon = yup.number();
export const lat = yup.number();
export const gender = yup.string().oneOf(genderOrientation, errorMessages.gender);
export const orientation = yup.string().oneOf(genderOrientation, errorMessages.orientation);
export const sports = yup.array().min(1, errorMessages.pickAtleastOne);
export const image = yup.string();
export const gallery = yup.array(image).min(minGalleryLength, errorMessages.imagesMin);
export const minAge = (age: number = minSignupAge): yup.DateSchema => {
    const now = Date.now();
    const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * age));
    return yup.date().max(cutoffDate, errorMessages.minAge(age));
}
export const required = (schema: yup.AnySchema): yup.AnySchema => {
    return schema.required(errorMessages.required)
}

export default yup;
