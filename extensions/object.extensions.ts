declare global {
    interface Object {
        /* String */
        string(): string;

        /* Number */
        number(): number;
        min(n: number): number;
        max(n: number): number;
        
    }
}