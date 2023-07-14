import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/Index',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/index',
    render(args) {
        return layout({
            title: 'マイページ',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Complete = {
    name: '/member/index - complete',
    render(args) {
        return layout({
            title: 'マイページ',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        complete: true
    }
}
