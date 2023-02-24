export const closeBlock = (ref, open, setOpen) => {
    const checkIfClickedOutside = e => {
        if(open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
        }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
    }
}