const URL = "http://localhost:3000/user_images/"
export const createUserImage = (userImageObj, history) => {
    return function(dispatch, prevState){
        const token = localStorage.getItem("token")
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userImageObj)
        }
        
        fetch(URL, options)
        .then(resp => resp.json())
        .then(userImage => {
            const newArr = {...prevState().user, user_images:[...prevState().user.user_images, userImage]}
              dispatch({type: 'CREATE_USER_IMAGE',payload: newArr})
              dispatch({type: 'SET_CURRENT_IMAGE', payload: userImage})
            history.push(`/userimages/${userImage.id}`)
            return
        })
    }
}