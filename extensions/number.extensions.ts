declare global {
    interface Number {
        /* String */
        string(): string;

        /* Number */
        min(n: number): number;
        max(n: number): number;
    }
}