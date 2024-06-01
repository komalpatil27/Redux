import React from 'react'
import { useEffect , useState  } from 'react'
import {useDispatch , useSelector} from 'react-redux'


const CounterRedux = () => {

    // Hooks import are in react-redux
    const [city , setCity] = useState('')
    const [userName , setUserName] = useState('')
    const [error , setError] = useState('')

    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    console.log(selector , 'selectio')

    const handleSubmit = (e, value , name) => {
        e.preventDefault();

        if((city.length > 0) || (userName.length > 0)){
            // dispatch an action
            dispatch({type : `form/${name}` , payload : value})
            setUserName('')
            setCity('')
        }else {
            setError('please enter details')
        }
    }
    
    return(
        <>
        Welcome ....!!!!
        <form >
           <div>
            <label>City</label>
            <input
            style={{paddingLeft : '20px'}}
            name='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}  
            />
            <button onClick={(e) => handleSubmit(e ,city , 'city')}> Add City Name </button>
            </div>

            <div style={{padding : '20px'}}>
                <label>UserName</label>
            <input
             style={{paddingLeft : '20px'}}
            name='userName'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}  
            />

            <button onClick={(e) => handleSubmit(e, userName, 'userName')}> Add User Name </button>
            </div>

        </form>
        {error}
        <div>
            <span style={{paddingRight : '20px'}}>Name :</span> 
            <span>{selector.userName}</span>
        </div>
            <div> 
            <span style={{paddingRight : '20px'}}>City :</span> 
            <span>{selector.city}</span>
        </div>
        
        </>
        
    )
}

export default CounterRedux