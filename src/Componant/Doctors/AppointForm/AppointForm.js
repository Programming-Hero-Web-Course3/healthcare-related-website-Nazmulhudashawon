import React from 'react';
import { useForm } from "react-hook-form";
import './AppintForm.css'

const AppointForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit} className="Form">
            <h2>Please Fill This Form</h2>

            <input  {...register("patient Name")} placeholder="patient Name" />
            <br />
            <input  {...register("Disease")} placeholder="Disease" />
            <br />
            <input  {...register("Address")} placeholder="Address" />
            <br />


            <input  {...register("exampleRequired", { required: true })} placeholder="Phone" />
            <br />

            {errors.exampleRequired && <span>This field is required</span>}

            <button className="btn px-4 btn-warning">Confirm Appoint</button>
        </form>
    );
};

export default AppointForm;