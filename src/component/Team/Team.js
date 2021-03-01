import React from 'react';
import './Team.css'

const Team = (props) => {
    const team = props.team

    let total = 0;
    team.forEach(team => {
        total = total + team.salary;
    });
    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h3>Team members: {props.team.length}</h3>
                    <h5 className="text-center">Total Budget: ${total}</h5>
                    <h6>Players: </h6>
                    <ul>
                        {
                            team.map(user => <li>{user.name} : ${user.salary}</li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Team;