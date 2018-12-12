import dva from 'dva';

import './index.css';
import './common/css/remake.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
 app.model(require('./models/demo').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
