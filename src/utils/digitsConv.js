export const minDigits = (value) => {
    return value.toLocaleString("en-EN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}