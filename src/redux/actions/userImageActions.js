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

export const resetFillArray = (newFillArray, id) => {
    return function(dispatch, getState){
        const token = localStorage.getItem("token")
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({fill_colors: newFillArray})
        }

        fetch(URL + id, options)
        .then(resp => resp.json())
        .then(updatedUserImage => {
            console.log(updatedUserImage)
        })
        //reset user with newFillArray
        //
        const userImage = getState().user.user_images.find(ui => ui.id === id)
        const userImages = getState().user.user_images
        const index = userImages.indexOf(userImage)
        userImage.fill_colors = newFillArray
        userImages[index] = userImage
        console.log(userImages)
        // console.log({...getState().user, user_images: updatedUserImagesArray})
        console.log(getState().user)
        // userImage.fill_colors = newFillArray
        //now need to update the user
        const updatedUser = {...getState().user, user_images: userImages}
        console.log(updatedUser)

        // console.log(userImage)
        // fill[index] = currentColor
        return dispatch({type: 'UPDATE_IMAGE_FILL', payload: updatedUser})
    }
}