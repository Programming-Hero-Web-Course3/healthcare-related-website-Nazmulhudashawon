import Button from '@restart/ui/esm/Button';
import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './DoctorData.css';

const DoctorData = (props) => {
    const history = useHistory()
    const { DoctorName, img, Designation, Specialty, VisitingHours } = props.doctor;
    const handlebtn = () => {
        history.push("./AppointForm");


    }

    return (

        <div className="col-md-4 col-sm-6 col-12">
            <div className="doctorscard">
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{DoctorName}</h5>
                    <p className="card-title">{Designation}</p>
                    <p className="card-title">{Specialty}</p>
                    <p className="card-title">VisitingHours :{VisitingHours}</p>
                    <button onClick={handlebtn} className="btn btn-primary">Appoint Now</button>


                </div>
            </div>
        </div>

    );
};
export default DoctorData;

