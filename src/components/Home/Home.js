import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] =  useState([]);

    useEffect(()=>{

        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

        fetch(url)
        .then(result => result.json())
        .then(data => setTeams(data.teams)) 

    }, [])
    
    return (
        <div className="bg-info">
            <div className="top-image">
                <img src="../../images/ground.jpg" alt="" />
            </div>

            <div className="container">
                <div className="row mt-3">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Home;