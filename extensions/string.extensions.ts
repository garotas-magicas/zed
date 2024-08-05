declare global {

    function string(x: any): string;

    interface String {

        /* String */
        string(): string;
        slug(): string;

        /* Number */
        number(): number;
    }
}