export default (n: String | Number | Object): number => {
    if (isNaN(Number(n))) return 0;
    return Number(n);
}
