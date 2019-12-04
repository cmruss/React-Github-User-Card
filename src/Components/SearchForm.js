import React from 'react';

const formStyle = {
    margin: '2% auto'
}

const inputStyle = {
    width: '20rem',
    height: '2rem',
    borderRadius: '5px',
    fontSize: '1.6rem',
}

const buttonStyle ={
    fontSize: '1.2rem',
    fontWeight: '600',
    height: '2.8rem',
    borderRadius: '5px',
    color: '#24292e',
    backgroundColor: '#eff3f6',
    backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
    border: '1px solid rgba(27,31,35,.2)',
    margin: '0 2%',
    padding: '3px 10px',
    boxShadow: '1px 1px 5px lightgrey',
    cursor: 'pointer'
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
                <button style={buttonStyle} onClick={props.fetchUser}>git user</button>
            </form>
        </div>
    )
}

export default SearchForm;