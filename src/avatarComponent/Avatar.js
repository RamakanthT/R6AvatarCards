import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
//importing tachyons which is similar to bootstrap
//for that need to install in npm
//npm install tachyons
import AvatarList from './AvatarList';

//functional Component
const Avatar = (props) => {

    /* return (
    <div>
        <h1> Welcome to Avatar world </h1>
        <AvatarList id="1" name="Rk1" work="Java" />
        <AvatarList id="2" name="Rk2" work="Spring" />
        <AvatarList id="3" name="Rk3" work="Bootstrap" />
        <AvatarList id="4" name="Rk4" work="React" />
        <button>Subscribe</button>
    </div>
    ) */

    const avatarArray = [
        { id: 1, name: "Rk1", work: "Java" },
        { id: 2, name: "Rk2", work: "Spring" },
        { id: 3, name: "Rk3", work: "Bootstrap" },
        { id: 4, name: "Rk4", work: "React" }
    ];

    const avatarArrayCard = avatarArray.map((avatarObj, i) => {
        return <AvatarList id={avatarArray[i].id} name={avatarArray[i].name} work={avatarArray[i].work} />;
    });

    return (
        <div className="mainpage tc">
            <h1> Welcome to Avatar world </h1>
            {/* <AvatarList id={avatarArray[0].id} name={avatarArray[0].name} work={avatarArray[0].work} />
            <AvatarList id={avatarArray[1].id} name={avatarArray[1].name} work={avatarArray[1].work} />
            <AvatarList id={avatarArray[2].id} name={avatarArray[2].name} work={avatarArray[2].work} />
            <AvatarList id={avatarArray[3].id} name={avatarArray[3].name} work={avatarArray[3].work} /> */}

            {avatarArrayCard}
            <button>Subscribe</button>
        </div>
    )
}

export default Avatar;
/* state is managed within the Component
state can be changed
usestate hook - functional component
this.state - class components */

