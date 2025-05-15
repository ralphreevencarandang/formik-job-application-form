import * as yup from 'yup';

    const phoneNumberRule = /^(\+\d{1,2}\s)?\(?\d{4}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

export const JobApplicationSchema = yup.object().shape({
    fullname: yup.string().min(5, 'Fullname should be at least 5 characters long').required('required'),
    email: yup.string().email('please enter a valid email').required('required'),
    portfolioUrl: yup.string().url('please enter a valid url'),
    position: yup.string().oneOf(['Frontend Developer','Backend Developer','Full Stack Developer'], 'Invalid Position').required('required'),
    coverLetter: yup.string().min(100,'cover letter should be at least 100 characters long').required('required'),
    acceptedBg: yup.boolean().oneOf([true], 'please check to submit').required('required'),
    phoneNumber: yup.string().matches(phoneNumberRule,{message: 'Please enter a valid number'}).required('required')

});