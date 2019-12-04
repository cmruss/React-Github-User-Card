import React from 'react';

const cardStyle = {
    width: '65%',
    backgroundColor: 'linen',
    margin: '0 auto',
    padding: '2%',
    paddingTop: '5%',
    borderTopRightRadius: '5px', 
    borderTopLeftRadius: '5px', 
}

const imgStyle = {
    borderRadius: '100%',
    maxWidth: '100%'
}

const aStyle = {
    textDecoration: 'none',
    color: 'royalblue'
}

const UserCard = (props) => {
    console.log('rendering user...')
    return (
        <div>
                <div className='user-card' key={props.user.id} style={cardStyle}>
                    <img src={props.user.avatar_url} alt={props.user.name} style={imgStyle}/>
                    <div className='user-info'>
                        <h2>{props.user.name}</h2>
                        <a href={`${props.user.html_url}`} target='_blank' style={aStyle}><h2>{props.user.login}</h2></a>
                        <h3>{props.user.location}</h3>
                    </div>
                    
                </div>
        </div>
    )

}

export default UserCard;