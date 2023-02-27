export const fetchData = async (type, email, setState) => {
    await fetch(`/api/${type}/${email}`)
    .then(res => res.json())
    .then(data => {
        if(data.error) {
        console.log(data.error)
        }
        else {
            setState(data.data)
        }
    })
    .catch(err => {
        console.log(err)
    }) 
}