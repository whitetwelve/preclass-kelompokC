const arr = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m"," " ," "]

function sortArray() {
    const firstWord = arr[1] + arr[0] + arr[2] + arr[4] + arr[3] + arr[5]  + arr[6] + arr[7]

    const secondWord = arr[17] + arr[8] + arr[9] + arr[18]

    const thirdWord = arr[5] + arr[3] + arr[12] + arr[7] + arr[15] + arr[16] + arr[14]

    return `"` +firstWord + secondWord + thirdWord + `"`
}
console.log(sortArray());
