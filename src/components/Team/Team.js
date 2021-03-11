import React from 'react';
import { useHistory } from 'react-router';
import "./Team.css";

const Team = (props) => {
    const {strTeam, strSport,strTeamBadge,idTeam} = props.team;

    const history = useHistory();
    const showTeamDetails = id => {
        const url = `team/${idTeam}`;
        history.push(url);
    }


    return (

        <div className="col-md-4 col-sm-12 border shadow bg-danger">
            <img className="img-fluid" src={strTeamBadge} alt="none" />
            <h2 className="card-title">{strTeam}</h2>
            <h4 className="text-muted"> Sports type: Football</h4>
            <button className="btn btn-success" onClick={() => showTeamDetails(idTeam)}>Explore</button>
        </div>

        
    );
};

export default Team;