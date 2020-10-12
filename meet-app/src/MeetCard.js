import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './MeetCard.css';

function MeetCard() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://i2.wp.com/dl.img-news.com/dl/img/s3/dl/2020/06/elon-musk-030620-17.jpg?w=696&ssl=1',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://ca-times.brightspotcdn.com/dims4/default/8ede5c5/2147483647/strip/true/crop/1269x666+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F5a%2F275bee44d096f0edfdb013ee7f9c%2Fla-1562350143-wjwleu3xvd-snap-image',
        }
    ]);

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
                        <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default MeetCard
