/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from '../components/App';

describe('APP component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
