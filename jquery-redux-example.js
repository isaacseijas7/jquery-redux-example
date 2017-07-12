// original from:https://codepen.io/mdd/pen/wGRqbw
// Reducer
const counter = (state = 0, actions) => {
    switch (actions.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

// Almacenar para mantener el estado de la aplicación.
const store = Redux.createStore(counter);

// La única manera de mutar el estado interno es enviar una acción.
$('#inc').click(() => store.dispatch({
    type: 'INCREMENT'
}));
$('#dec').click(() => store.dispatch({
    type: 'DECREMENT'
}));

// Utilice subscribe () para actualizar la interfaz de usuario en respuesta a cambios de estado.
store.subscribe(() => {
    $('#num').html(store.getState())
});

///////////////////////// Ejemplo de reductor de objetos ////////////////////////////////////
const updateNameReducer = (state = {}, actions) => {
    // Use destructiong para acceder fácilmente a las propiedades de acción
    // Y también proporcionan valores por defecto
    let {
        first_name = '', last_name = ''
    } = actions;

    switch (actions.type) {
        case 'UPDATE_FIRST_NAME':
            return Object.assign({}, state, {
                first_name: first_name
            });
        case 'UPDATE_LAST_NAME':
            return Object.assign({}, state, {
                last_name: last_name
            });
        default:
            return state
    }
}

const updateNameStore = Redux.createStore(updateNameReducer)

$('#firstNameInput').on('input', (e) => {
    updateNameStore.dispatch({
        type: 'UPDATE_FIRST_NAME',
        first_name: e.target.value
    });
});
$('#lastNameInput').on('input', (e) => {
    updateNameStore.dispatch({
        type: 'UPDATE_LAST_NAME',
        last_name: e.target.value
    });
});

updateNameStore.subscribe(() => {
    let {
        first_name,
        last_name
    } = updateNameStore.getState();

    $('#firstName').html(first_name);
    $('#lastName').html(last_name);
    console.log(updateNameStore.getState());
});