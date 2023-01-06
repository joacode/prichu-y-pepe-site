export const dateParser = (date: string): string => {
    return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(
        date
    ).getFullYear()}`
}
