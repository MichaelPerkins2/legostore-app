const initState = {
    projects: [
        {id: '1', title: 'First Title', content: 'Content 1'},
        {id: '2', title: 'Second Title', content: 'Content 2'},
        {id: '3', title: 'Third Title', content: 'Content 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}


export default projectReducer;