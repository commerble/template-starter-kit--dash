import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Site/GuestOrder',
    argTypes: {
        serverError: { control: 'boolean' },
        invalid: { control: 'boolean' },
    },
}

export const Complete = {
    name: '/site/guestorder',
    render(args) {
        return layout({
            title: 'ゲスト注文詳細',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
