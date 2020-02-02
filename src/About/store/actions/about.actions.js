import axios from 'axios';
export const GET_ABOUT_DETAILS = 'GET-ABOUT-DETAILS';


export const getDetails = () => {
    console.log('get details action dipached!');

    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
            dispatch({
                type:GET_ABOUT_DETAILS,
                payload:res.data
            })
        })
    }
}