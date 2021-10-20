import React from 'react';
import { useForm } from "react-hook-form";

const AskDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit} className="Form">
            <h2 className="m-4 ">Tell us your symptom or health problem</h2>

            <input  {...register("patient Name")} placeholder="patient Name" />
            <br />
            <input  {...register("Disease")} placeholder="Patient problem" />
            <br />

            <input  {...register("exampleRequired", { required: true })} placeholder="Email" />
            <br />

            <button className="btn px-4 btn-warning">Submit</button>
        </form>
    );
};

export default AskDoctor;