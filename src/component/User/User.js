import React from 'react';
import fakeData from '../../fakeData/MOCK_DATA.json'
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './User.css'

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        setUser(fakeData)
    }, [])

    const [team, setTeam] = useState([])
    const handleTeam = (users) =>{
        const newTeam = [...team, users]
        setTeam(newTeam)   
    }
    
    return (
        <>
            <div className="container-fluid d-flex">
                <div className="w-75 user">
                    {
                        fakeData.map(user => <Player user={user} handleTeam={handleTeam}></Player>)
                    }
                </div>
                <div className="w-25">
                    <Team team={team}></Team>
                </div>
            </div>
        </>
    );
};

export default User;