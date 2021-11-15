import '../src/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#34394D',
        },
        {
          name: 'light',
          value: '#f1f1f1',
        },
      ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
