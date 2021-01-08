export const loadState = () => {
    try {
        const serializablState = localStorage.getItem('state')
        if(serializablState === null){
            return undefined
        }
        return JSON.parse(serializablState)
        } catch (e) {
        console.log(e)
    }
}

export const saveState = (state) =>{
    try{
        const serializablState = JSON.stringify(state);
        localStorage.setItem('state',serializablState)
    }catch (e) {
        console.log(e)
    }
}