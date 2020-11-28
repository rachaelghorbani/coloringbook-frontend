export const setCurrentColor = color => {
    return {
        type: 'SET_CURRENT_COLOR',
        payload: color
    }
}

export const resetFillArray = (index, currentColor) => {
    return function(dispatch, getState){
        const fill = getState().initialFill.slice(0)
        fill[index] = currentColor
        return dispatch({type: 'RESET_FILL_ARRAY', payload: fill})
    }
}