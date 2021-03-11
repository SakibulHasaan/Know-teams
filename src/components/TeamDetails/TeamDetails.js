import React, { useState, useEffect } from 'react';
import { useParams,  } from 'react-router';
import './TeamDetails.css'

const TeamDetails = () => {

    const {teamId} = useParams();
    const [team, setTeam] = useState([])
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;

    useEffect(() =>{
        fetch(url)
        .then(response=>response.json())
        .then(data=> setTeam(data.teams[0]))
    },[url]) 

    const {strTeam,strDescriptionEN,strTeamBadge,strGender,strCountry,intFormedYear,strTeamFanart3} = team;

    return (
        <>
            <div className="top-image">
                <img className="logo" src={strTeamBadge} alt="as"/>
            </div>

            <div className="container">
                <div className="card mt-3 team-card">
                    <div className="row bg-success">
                    <div className="col-md-8 col-sm-12">
                        <h3>{strTeam}</h3>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: Football</p>
                        <p>Gender: {strGender}</p>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <img src={strTeamFanart3} alt="" className="img-fluid"/>
                    </div>
                    </div>
                </div>

                <p className="text-left card-text">
                    {strDescriptionEN}
                </p>

            </div>

        </>
    );
};

export default TeamDetails;