import {render} from './index.js'

export default {
  title: 'Components/GlobalNav',
  argTypes: {
  },
  tags: ['autodocs']
}

const Template = ({...args }) => {
  return render({...args});
};


export const Default = Template.bind({});
Default.args = {
};