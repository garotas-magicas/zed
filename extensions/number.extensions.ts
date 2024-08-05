declare global {

    function number(x: string): number;

    interface Number {
        /* String */
        string(): string;

        /* Number */
        numberr(n: number): number;
        min(n: number): number;
        max(n: number): number;
    }
}