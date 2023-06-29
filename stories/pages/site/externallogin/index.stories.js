import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Site/ExternalLogin',
    argTypes: {
        serverError: { control: 'boolean' },
        invalid: { control: 'boolean' },
    },
}

export const Complete = {
    name: '/site/externallogin',
    render(args) {
        return layout({
            title: '認証失敗',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
