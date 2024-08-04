import isNumber from '../util/isNumber';

Number.prototype.string = function (): string {
    return String(this);
}

Object.prototype.min = function (n: number): number {
    return Math.max(this.number(), n);
}

Object.prototype.max = function (n: number): number {
    return Math.min(this.number(), n);
}

Object.prototype.number = function (): number {
    return isNumber(this)
}