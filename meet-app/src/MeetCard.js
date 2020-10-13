import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './MeetCard.css';
import axios from './axios';

function MeetCard() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
       async function fetchData() {
           const req = await axios.get('/meet/cards');
           setPeople(req.data);
       }
       fetchData();
    }, [])

    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="meetCard">
            <div className="meetCard__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default MeetCard
