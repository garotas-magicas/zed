declare global {

    function string(x: number): string;

    interface String {

        /* String */
        string(): string;
        slug(): string;

        /* Number */
        number(): number;
    }
}