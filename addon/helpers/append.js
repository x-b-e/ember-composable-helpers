import { helper } from '@ember/component/helper';
import { isSliceable } from '../utils/as-array';

export function append([...arrays]) {
  return [].concat(...arrays.map((array) => isSliceable(array) ? array.slice() : array));
}

export default helper(append);
