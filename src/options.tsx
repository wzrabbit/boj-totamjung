import { render } from 'react-dom';
import Test from '@components/Test';

const Options = () => {
  return <Test message="와 리액뜨!!" />;
};

render(<Options />, document.getElementById('root'));
