import { Form, Formik } from "formik";
import CustomInput from "./FormComponents/CustomInput";

const JobApplicationForm = ()=>{


    return(
        <>
           <Formik 
           initialValues={{fullname:'', email:'', phoneNumbe:'', portfolioUrl:'', coverLetter:'', acceptedBg:false}}>
               {(props)=>(
                <Form>
                    <CustomInput label='Fullname' type='text'/>

             
                
                </Form>
                )}
           </Formik>
        </>
    );
}

export default JobApplicationForm