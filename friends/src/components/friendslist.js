import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import FriendCard from './friendcard'

const FriendsList = props => {
    const [form, setForm] = useState([{name:'', age: '', email: ''}])
    const [friends, setFriends] = useState([])

useEffect(()=> {
    axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', form)
        .then(res => {
            console.log(res)
            setFriends(res.data);
            props.history.push('/friends')
            })
        .catch(err => console.log(err));
    }


    return (
        <div className='friends-container'>
        <form className='friends-form' onSubmit={handleSubmit}>
            <label className='friend-name form'>
                Name:
                <input type='text' name='name' placeholder="Friend's Name" onChange={handleChange}/>
            </label>
            <label className='friend-age form'>
                Age:
                <input type='text' name='age' placeholder="Friend's Age" onChange={handleChange}/>
            </label>
            <label className='friend-name form'>
                Email:
                <input type='email' name='email' placeholder="Friend's Email" onChange={handleChange}/>
            </label>
            <button className='friend-button'>Add Friend</button>
        </form>
        <div className='friends-list'>
        {friends.map(friend => (
            <FriendCard  key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
        ))}
        </div>
        </div>

    )
}

export default FriendsList