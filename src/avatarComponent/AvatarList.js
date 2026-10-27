import React from 'react';

const AvatarList =(props) =>{
    return(
        <div className="avatarCard ma4 bg-light-purple dib pa4 grow shadow-4 tc">
            <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(props.name)}`} alt="Avatar"></img>
            <h1> {props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default AvatarList;
