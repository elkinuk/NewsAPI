import App from 'app/App.js';
import './index.scss';
import { mobileCheck } from 'common/customPolyfils.js';

window.mobileCheck = mobileCheck;

const app = new App();
app.start();