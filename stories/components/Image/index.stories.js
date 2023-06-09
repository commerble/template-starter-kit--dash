import render from './image.fn.ejs'

export default {
  title: 'Components/Image',
  argTypes: {
    src: { control: 'text' },
    ratio: { control: { type: 'select' }, options: ['', 'square', 'golden', '4x3', '2x1', 'hero'] },
    notfound: { control: 'boolean' },
    wrap: { control: 'boolean' },
    wrapWidth: { control: 'number' },
  },
  tags: ['autodocs']
}

const Template = ({wrap, wrapWidth, ...args }) => {
  if (wrap) {
    return `<div style="width:${wrapWidth}px">
    ${render(args)}
</div>`
  }
  return render(args);
};

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/400x200?text=Image",
  wrap: true,
  wrapWidth: 500
};

export const Square = Template.bind({});
Square.args = {
  src: "https://via.placeholder.com/270x270?text=Square",
  ratio: 'square',
  wrap: true,
  wrapWidth: 500
};

export const Golden = Template.bind({});
Golden.args = {
  src: "https://via.placeholder.com/320x198?text=Golden",
  ratio: 'golden',
  wrap: true,
  wrapWidth: 500
};

export const Aspect4x3 = Template.bind({});
Aspect4x3.args = {
  src: "https://via.placeholder.com/320x240?text=4x3",
  ratio: '4x3',
  wrap: true,
  wrapWidth: 500
};