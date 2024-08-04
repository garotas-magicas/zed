export default (n: String | Number | Object): number => {
    if (isNaN(Number(n))) return 1;
    return Number(n);
}