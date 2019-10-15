import React from 'react'

const FriendsList = props => {

    return (
        <form className='friends-form'>
            <label className='friend-name'>
                Name:
                <input type='text' name='name' placeholder="Friend's Name"/>
            </label>
            <label className='friend-age'>
                Age:
                <input type='text' name='age' placeholder="Friend's Age"/>
            </label>
            <label className='friend-name'>
                Email:
                <input type='email' name='email' placeholder="Friend's Email"/>
            </label>
            <button className='friend-button'>Add Friend</button>
        </form>
    )
}

export default FriendsList