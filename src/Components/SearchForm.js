import React from 'react';

const formStyle = {
    margin: '2% auto'
}

const inputStyle = {
    width: '30rem',
    height: '2rem',
    borderRadius: '5px',
    fontSize: '1.6rem'
}

const buttonStyle ={
    height: '2rem',
    fontSize: '1.4rem',
    borderRadius: '5px',
    backgroundColor: 'azure',
    color: 'royalblue',
    margin: '0 2%',
    border: 'none',
    boxShadow: '1px 1px 2px'
}

const SearchForm = (props) => {

    return (
        <div className='FormContainer'>
            <form style={formStyle}>
                <input
                    style={inputStyle}
                    type='text'
                    placeholder='findagit...'
                    value={props.userInput}
                    onChange={props.handleChange}
                />
                <button style={buttonStyle} onClick={props.fetchUser}>get user</button>
            </form>
        </div>
    )
}

export default SearchForm;