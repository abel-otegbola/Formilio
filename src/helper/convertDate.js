export const convert = (date) => {
    const splitted = date.split("T");
    const splittedDate = splitted[0].split("-")

    const splittedTime = splitted[1].split(":")

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"]

    return months[splittedDate[1]-1] + " "+ splittedDate[2] +" "+ splittedDate[0] +" | "+ splittedTime[0]+ ":"+ splittedTime[1]

}