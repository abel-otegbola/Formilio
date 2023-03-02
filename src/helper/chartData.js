export const ChartData = () => {
    const result = [];

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const currentMonth = new Date().getMonth();

    getSixNumbers(currentMonth).map(number => (
        result.push(months[number])
    ))
    return result;
}

function getSixNumbers(index) {
  var numbers = [];
  for (var i = index - 5; i <= index; i++) {
    numbers.push((i < 0 ? i + 12 : i) % 12); // add the number, wrapping around at 12
  }
  numbers[index - (index - 5)] = index; // set the last number to be the index itself
  return numbers;
}

export const ChartDataX = (data) => {
    const currentMonth = new Date().getMonth();

    let numbers = [];

    if(typeof data === "object") {
      numbers.push(getSixNumbers(currentMonth).map(number => (
          data.filter(item => item.createdAt.split("T")[0].split("-")[1] -1 === number).length
      )))
    }
    return numbers
}
  