import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './components/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', async () => {
		const App = await import ('./components/App');
		render(App.default)
	})
}
