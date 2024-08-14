function number(x: any): number;
function string(x: any): string;

interface String {
    /* String */
    string(): string;
    slug(): string;

    /* Number */
    number(): number;
}

interface Number {
    /* String */
    string(): string;

    /* Number */
    number(): number;
    min(n: number): number;
    max(n: number): number;
}

interface Object {
    /* String */
    string(): string;

    /* Number */
    number(): number;
    min(n: number): number;
    max(n: number): number;
}
