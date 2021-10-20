import React from 'react';
import "./Card.css";
import { useHistory } from "react-router-dom";

const Card = () => {
    const history = useHistory();
    const handleambulancebtn = () => {
        history.push("/ambulance");

    }
    const handlecovidbtn = () => {
        history.push("/covid");

    }
    const handlecheckupbtn = () => {
        history.push("/healthcheckup");

    }
    const handledoctorbtn = () => {
        history.push("/doctor");

    }
    const handletipsbtn = () => {
        history.push("/tips");

    }
    const handleemargencybtn = () => {
        history.push("/emargency");

    }
    return (

        <div className="mt-4">
            <h2>Our services</h2>
            <div className="card-group">
                <div className="card">
                    <img src="https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button className="btn fw-bold" onClick={handledoctorbtn}>Appoint a Doctor</button>

                    </div>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzTykR58_ErR9OMdfRDG8VD-GKkiHYe2A3Q&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button className="btn fw-bold" onClick={handleambulancebtn}> Ambulance service</button>

                    </div>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroSRAH1mt5TBB4Xjpny66TtoPd0xmyqlDwA&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button className="btn fw-bold" onClick={handlecheckupbtn}>Health checkup</button>

                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6McOwklV0mt9G1u0oeCp4vG84drZl6Yxscg&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button onClick={handleemargencybtn} className="btn fw-bold"> Emergency Service</button>

                    </div>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7xCdVykPWiLQjb0hz8LFkLcuHPhwa031zw&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button onClick={handlecovidbtn} className="btn fw-bold">Covid 19 vaccine info</button>

                    </div>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY6ibtLXQqebvVfrFnnF8KlSrE5Q3Vt85xg&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <button onClick={handletipsbtn} className="btn fw-bold"> Health Tips</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;