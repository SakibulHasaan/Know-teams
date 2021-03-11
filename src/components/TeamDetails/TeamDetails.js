import React, { useState, useEffect } from 'react';
import { useParams,  } from 'react-router';
import './TeamDetails.css'
import facebook from '../../images/Facebook.png'
import youtube from '../../images/YouTube.png'
import twitter from '../../images/Twitter.png'
import female from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars, faFutbol, faFlag, faGlobe} from '@fortawesome/free-solid-svg-icons'


const TeamDetails = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([])

    
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=> setTeam(data.teams[0]))
    },[teamId]) 

    const {strTeam,strDescriptionEN,strTeamBadge,strGender,strCountry,intFormedYear,strTeamFanart3} = team;

    let teamImage = "";
    if(strGender === 'male'){
       teamImage = <img src={strTeamFanart3} alt="" className="img-fluid" />;
    }
    
    
    else if(strGender === 'female'){
       teamImage = <img src={female} alt="" className="img-fluid" />;
    }

    

    return (
        <>
            <div className="top-image">
                <img className="logo" src={strTeamBadge} alt="as" />
            </div>

            <div className="container">
                <div className="card mt-3 ">
                    <div className="row team-card">
                        <div className="col-md-8 col-sm-10">
                            <h3>{strTeam}</h3>
                            <p><FontAwesomeIcon icon={faGlobe} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                            <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</p>
                        </div>

                        <div className="col-md-4 col-sm-12">
                                {
                                    strGender === 'Male' ? <img src={strTeamFanart3} alt="" className="img-fluid" /> : <img src={female} alt="" className="img-fluid" />
                                }
                        </div>
                    </div>
                </div>

                <p className="text-left card-text">
                    {strDescriptionEN}
                </p>


                <div className="links">
                    <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt=""/></a>
                    <a href="https://www.youtube.com" target="_blank"><img src={youtube} alt=""/></a>
                    <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt=""/></a>
                </div>

            </div>

        </>
    );
};

export default TeamDetails;