import select from '../Select/select.fn.ejs';
import control from './date.fn.ejs';
import field from './date.field.fn.ejs';

function find(path, args) {
    if (path === 'select') {
        return select(args);
    }
    if (path === 'date') {
        return control(args, null, find);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}