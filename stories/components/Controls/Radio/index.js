import control from './radio.fn.ejs';
import field from './radio.field.fn.ejs';

function find(path, args) {
    if (path === 'radio') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}