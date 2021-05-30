import React from 'react';
import p1 from '../../src/New folder/images/car-repair.png';
import p2 from '../../src/New folder/images/car-wash.png';
import p3 from '../../src/New folder/images/air-conditioning.png';
const Service = () => {
    return (
        <div className="row" style={{margin:"5% 20%"}}>
            <p style={{fontSize:"30px",fontFamily:"fantasy",textAlign:"center"}}>Our Services</p>
            
        <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top"  style={{ width: '12em', height:'200px' }} src={p1} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>Car Repair</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        </div>
        </div>
        </div> 
        <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top" style={{ width: '12em', height:'200px' }} src={p2} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>Car Wash</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        </div>
        </div>
        </div> 
        <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top" style={{ width: '12em', height:'200px' }} src={p3} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>Air Conditioning</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        </div>
        </div>
        </div> 
        
        </div>
       
    );
};

export default Service;