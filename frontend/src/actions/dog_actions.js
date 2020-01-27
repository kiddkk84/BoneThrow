
import { getDogs, getUserDogs, writeDog } from '../util/dogs_api_util';

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_USER_DOGS = "RECEIVE_USER_DOGS";
export const RECEIVE_NEW_DOG = "RECEIVE_NEW_DOG";

export const receiveDogs= dogs => ({
    type: RECEIVE_DOGS,
    dogs
});

export const receiveUserDogs = dogs => ({
    type: RECEIVE_USER_DOGS,
    dogs
});

export const receiveNewDog = dog => ({
    type: RECEIVE_NEW_DOG,
    dog
})

export const fetchDogs = () => dispatch => (
    getDogs()
        .then(dogs => dispatch(receiveDogs(dogs)))
        .catch(err => console.log(err))
);

export const fetchUserDogs = id => dispatch => (
    getUserDogs(id)
        .then(dogs => dispatch(receiveUserDogs(dogs)))
        .catch(err => console.log(err))
);

export const composeDog = data => dispatch => (
    writeDog(data)
        .then(dog => dispatch(receiveNewDog(dog)))
        .catch(err => {
            console.log(err)
            // window.error = err 
            // window.alert(err)
        })
        
);