import {render} from './index.js'

export default {
  title: 'Components/Content',
  argTypes: {
    wide: { control: 'boolean' }
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};