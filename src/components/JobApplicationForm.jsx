import { Form, Formik } from "formik";
import CustomInput from "./FormComponents/CustomInput";
import CustomSelect from "./FormComponents/CustomSelect";
import CustomCheckbox from "./FormComponents/CustomCheckbox";
import CustomTextarea from "./FormComponents/CustomTextarea";
import Button from "./Button";
import { JobApplicationSchema } from "../schema";
const JobApplicationForm = ()=>{
    return(
        <section className="lg:w-[50%] w-full bg-white px-4 py-2 rounded shadow" >
           <Formik 
           initialValues={{fullname:'', email:'', phoneNumber:'', portfolioUrl:'', position:'', coverLetter:'', acceptedBg:false}}
           validationSchema={JobApplicationSchema}
           onSubmit={async (value, action)=>{
                await new Promise((resolve) => setTimeout(resolve, 1000));

                console.log(value);
                console.log(action);
                action.resetForm();
                
                
           }}
           >
               {({isSubmitting})=>(
                <Form>
                    <div className="grid grid-cols-1 gap-x-6  md:grid-cols-2">
                        <CustomInput label='Fullname' type='text' placeholder='Enter your fullname' name='fullname'/>
                        <CustomInput label='Email' type='text' placeholder='Enter your email' name='email'/>
                        <CustomInput label='Phone Number' type='text' placeholder='0912-345-6789' name='phoneNumber'/>
                        <CustomInput label='Portfolio URL' type='text' placeholder='https://www.facebook.com/' name='portfolioUrl'/>
                        <CustomSelect label='Position' name='position'>
                            <option value="">--Select Position--</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                        </CustomSelect>
                     
                    </div>
                       <CustomTextarea label='Cover Letter' name='coverLetter' placeholder='Highlight yout skills and experience (minimum 100 characters).' />
                        <CustomCheckbox type='checkbox' name="acceptedBg"/>

                  
                    <Button type='submit' label='Submit' disabled={isSubmitting}/>
                </Form>
                )}
           </Formik>
        </section>
    );
}

export default JobApplicationForm