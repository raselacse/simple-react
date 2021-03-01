import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, born, birthPlace, role, gender, salary, img} = props.user;
    return (
        <>
            <div className="player">
                <div className="text-center"> 
                    <img src={props.user.img} alt={img}/>
                </div>
                <div className="px-4 py-2">
                    <h5 className="m-0">{name}</h5>
                    <h6>Bangladesh</h6>
                    <p>{born}</p>
                    <p>{birthPlace}</p>
                    <p>{role}</p>
                    <p>{gender}</p>
                    <p className="salary">Salary: ${salary}</p>
                    <button onClick={()=> props.handleTeam(props.user)} className="btn btn-success"><FontAwesomeIcon icon={faUser}/> Add to team</button>
                </div>
            </div>
        </>
    );
};

export default Player;