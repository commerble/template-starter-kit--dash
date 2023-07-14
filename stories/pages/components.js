import alert from '../components/Alert/alert.fn.ejs';
import badge from '../components/Badge/badge.fn.ejs';
import button from '../components/Button/button.fn.ejs';
import checkbox from '../components/Controls/Checkbox/checkbox.fn.ejs';
import checkboxField from '../components/Controls/Checkbox/checkbox.field.fn.ejs';
import date from '../components/Controls/Date/date.fn.ejs';
import dateField from '../components/Controls/Date/date.field.fn.ejs';
import password from '../components/Controls/Password/password.fn.ejs';
import passwordField from '../components/Controls/Password/password.field.fn.ejs';
import radio from '../components/Controls/Radio/radio.fn.ejs';
import radioField from '../components/Controls/Radio/radio.field.fn.ejs';
import select from '../components/Controls/Select/select.fn.ejs';
import selectField from '../components/Controls/Select/select.field.fn.ejs';
import text from '../components/Controls/Text/text.fn.ejs';
import textField from '../components/Controls/Text/text.field.fn.ejs';
import textarea from '../components/Controls/TextArea/textarea.fn.ejs';
import textareaField from '../components/Controls/TextArea/textarea.field.fn.ejs';
import gfooter from '../components/Gfooter/gfooter.fn.ejs';
import gheader from '../components/Gheader/gheader.fn.ejs';
import gnav from '../components/Gnav/gnav.fn.ejs';
import hero from '../components/Hero/hero.fn.ejs';
import image from '../components/Image/image.fn.ejs';
import messagebox from '../components/MessageBox/messagebox.fn.ejs';
import price from '../components/Price/price.fn.ejs';
import tileProduct from '../components/Tile/tile.product.fn.ejs';
import tileArticle from '../components/Tile/tile.article.fn.ejs';
import cartLines from './order/cart/lines.fn.ejs';
import memberMenu from './member/menu.fn.ejs';

export default function find(path, args) {
    switch(path) {
        case 'alert': return alert(args, null, find);
        case 'badge': return badge(args, null, find);
        case 'button': return button(args, null, find);
        case 'checkbox': return checkbox(args, null, find);
        case 'checkboxField': return checkboxField(args, null, find);
        case 'date': return date(args, null, find);
        case 'dateField': return dateField(args, null, find);
        case 'password': return password(args, null, find);
        case 'passwordField': return passwordField(args, null, find);
        case 'radio': return radio(args, null, find);
        case 'radioField': return radioField(args, null, find);
        case 'select': return select(args, null, find);
        case 'selectField': return selectField(args, null, find);
        case 'text': return text(args, null, find);
        case 'textField': return textField(args, null, find);
        case 'textarea': return textarea(args, null, find);
        case 'textareaField': return textareaField(args, null, find);
        case 'gfooter': return gfooter(args, null, find);
        case 'gheader': return gheader(args, null, find);
        case 'gnav': return gnav(args, null, find);
        case 'hero': return hero(args, null, find);
        case 'image': return image(args, null, find);
        case 'messagebox': return messagebox(args, null, find);
        case 'price': return price(args, null, find);
        case 'tile.product': return tileProduct(args, null, find);
        case 'tile.article': return tileArticle(args, null, find);
        case 'cartLines': return cartLines(args, null, find);
        case 'memberMenu': return memberMenu(args, null, find);
        default: throw new Error('not supported');
    }
}

// export function Alert(args) {
//     return alert(args, null, find);
// }

// export function Badge(args) {
//     return badge(args, null, find);
// }

// export function Button(args) {
//     return button(args, null, find);
// }

// export function Checkbox(args) {
//     return checkbox(args, null, find);
// }

// export function CheckboxField(args) {
//     return checkboxField(args, null, find);
// }

// export function Date(args) {
//     return date(args, null, find);
// }

// export function DateField(args) {
//     return dateField(args, null, find);
// }

// export function Password(args) {
//     return password(args, null, find);
// }

// export function PasswordField(args) {
//     return passwordField(args, null, find);
// }

// export function Radio(args) {
//     return radio(args, null, find);
// }

// export function RadioField(args) {
//     return radioField(args, null, find);
// }

// export function Select(args) {
//     return select(args, null, find);
// }

// export function SelectField(args) {
//     return selectField(args, null, find);
// }

// export function Text(args) {
//     return text(args, null, find);
// }

// export function TextField(args) {
//     return textField(args, null, find);
// }

// export function Textarea(args) {
//     return textarea(args, null, find);
// }

// export function TextareaField(args) {
//     return textareaField(args, null, find);
// }

// export function Gfooter(args) {
//     return gfooter(args, null, find);
// }

// export function Gheader(args) {
//     return gheader(args, null, find);
// }

// export function Gnav(args) {
//     return gnav(args, null, find);
// }

// export function Hero(args) {
//     return hero(args, null, find);
// }

// export function Image(args) {
//     return image(args, null, find);
// }

// export function MessageBox(args) {
//     return messagebox(args, null, find);
// }

// export function Price(args) {
//     return price(args, null, find);
// }

// export function ProductTiles(args) {
//     return productTiles(args, null, find);
// }

// export function ArticleTiles(args) {
//     return articleTiles(args, null, find);
// }
