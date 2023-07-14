import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/Quit',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/quit',
    render(args) {
        return layout({
            title: '退会',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        serverError: false
    }
}

export const HasBacklog = {
    name: '/member/quit - has backlog',
    render(args) {
        return layout({
            title: '退会',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        serverError: false,
        hasBacklog: true
    }
}

