import isNumber from '../util/isNumber';

Number.prototype.string = function (): string {
    return this.toString()
}

String.prototype.slug = function (): string {
    return this.trimStart().trimEnd().replaceAll(' ', '-');
}

String.prototype.number = function (): number {
    return isNumber(this);
}