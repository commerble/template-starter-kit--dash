import { addDecorator, addParameters } from '@storybook/html'
import { withA11y } from '@storybook/addon-a11y'

import '../scss/style.scss'

addDecorator(withA11y)

const customViewports = {
  iPhone5: {
    name: 'iPhone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone6,7,8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneXsMax: {
    name: 'iPhoneXsMax',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    }
  }
}

addParameters({
  viewport: { viewports: customViewports }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}