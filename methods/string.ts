import isNumber from '../util/isNumber';

String.prototype.slug = function (): string {
    return this.trimStart().trimEnd().replaceAll(' ', '-');
}

String.prototype.number = function (): number {
    return isNumber(this);
}