import { helper } from '@ember/component/helper';
import asArray from '../utils/as-array';

export function append([...arrays]) {
  return [].concat(...arrays.map(asArray));
}

export default helper(append);
