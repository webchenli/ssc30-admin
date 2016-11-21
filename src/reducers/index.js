import { combineReducers } from 'redux';
import welcome from './welcome';
import arch from './arch';
import { role } from './role';
import permission from './permission';
import archSetting from './archSetting';
import ncSync from './ncSync';
import demo from './demo';

const rootReducer = combineReducers({
  welcome,
  arch,
  role,
  permission,
  archSetting,
  ncSync,
  demo
});

export default rootReducer;
