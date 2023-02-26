export const convert = (date) => {
    const splitted = date.split("T");
    const splittedDate = splitted[0].split("-")

    const splittedTime = splitted[1].split(":")

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return months[splittedDate[1]-1] + " "+ splittedDate[2] +" "+ splittedDate[0] +" | "+ splittedTime[0]+ ":"+ splittedTime[1]

}