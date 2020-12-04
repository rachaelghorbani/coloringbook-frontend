const url = "http://localhost:3000/images/"

export const fetchAllImages = () => {
    return function(dispatch){
        const token = localStorage.getItem("token")
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        fetch(url, options)
        .then(resp => resp.json())
        .then(images => {
           return dispatch({type: "FETCH_ALL_IMAGES", payload: images})
        })
    }
}



