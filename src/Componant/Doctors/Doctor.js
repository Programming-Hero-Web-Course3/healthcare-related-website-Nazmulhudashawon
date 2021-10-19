import React, { useEffect, useState } from 'react';
import DoctorData from './DoctorData';

const Doctor = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json').then(res => res.json()).then(data => setdoctors(data))

    }, [])
    return (
        <div className="mt-4 ">
            <h2>Ours Special Doctors</h2>
            <div class="row">
                {
                    doctors.map(doctor => <DoctorData doctor={doctor} key={doctor.key}></DoctorData>)
                }
            </div>

        </div>
    );
};

export default Doctor;