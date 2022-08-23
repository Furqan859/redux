export const ADD  = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';
 
    export const Add = (value) => (dispatch) => {

    dispatch({
        type: ADD,
        payload: {value : value +1}
    });
};

    export const Subtract = (value) => (dispatch) => {
    dispatch({
    type: SUBTRACT,
    payload: {value : value -1}
})
    };

    export const Reset = (value) => (dispatch) => {
        dispatch({
            type:RESET,
            payload: {value : ""}
        })
    }
  


