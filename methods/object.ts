import isNumber from '../util/isNumber';

Object.prototype.string = function (): string {
    return this.toString();
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