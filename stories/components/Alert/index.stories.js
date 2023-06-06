import render from './alert.fn.ejs'

export default {
  title: 'Components/Alert',
  argTypes: {
    color: { 
      options: ['', 'error', 'warning', 'info', 'success'],
      control: { type: 'select' }
    }
  },
  tags:['autodocs']
}

const Template = ({...args }) => {
  return render(args);
};

export const Default = Template.bind({});
Default.args = {
  color: ''
};

export const Error = Template.bind({});
Error.args = {
  color: 'error'  
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  color: 'info'
};

export const Success = Template.bind({});
Success.args = {
  color: 'success'
};