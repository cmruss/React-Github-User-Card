import React from 'react';

const containerStyle = {
    width: '90%',
    backgroundColor: 'whitesmoke',
    margin: '2% auto',
    borderRadius: '5px',
    padding: '3%',
    boxShadow: '5px 10px 15px'
}

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
};

const cardStyle = {
    width: '200px',
    padding: '3%'
}

const imgStyle = {
    borderRadius: '100%',
    maxWidth: '100%'
}

const aStyle = {
    textDecoration: 'none',
    color: 'royalblue'
}

const FollowerCards = (props) => {
    console.log('rendering users...')
    return (
        <div className='follower-container' style={containerStyle}>
            <h2>followers</h2>
            <div className='follower-list' style={listStyle}>
                {props.followers.map(follower =>(
                    <div className='follower-card' style={cardStyle} key={follower.id}>
                        <img src={follower.avatar_url} alt={follower.login} style={imgStyle}/>
                        <a href={`${follower.html_url}`} style={aStyle}><h2>{follower.login}</h2></a>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default FollowerCards;