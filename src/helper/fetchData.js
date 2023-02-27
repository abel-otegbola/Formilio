export const fetchData = async (type, email, setState) => {
    await fetch(`/api/${type}/${email}`)
    .then(res => res.json())
    .then(data => {
        if(data.error) {
            return console.log(data.error)
        }
        else {
            return setState(data.data)
        }
    })
    .catch(err => {
        console.log(err)
    }) 
}