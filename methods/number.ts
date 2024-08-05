import isNumber from "../util/isNumber";

Number.prototype.string = function (): string {
    return this.toString()
}

Number.prototype.min = function (n: number): number {
    return Math.max(this.number(), n);
}

Number.prototype.max = function (n: number): number {
    return Math.min(this.number(), n);
}