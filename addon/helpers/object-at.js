import { helper } from '@ember/component/helper';
import { A, isArray as isEmberArray } from '@ember/array';
import asArray from '../utils/as-array';

export function objectAt(index, array) {
  if (array) {
    array = asArray(array);
  }
  if (!isEmberArray(array)) {
    return undefined;
  }

  index = parseInt(index, 10);

  return A(array).objectAt(index);
}

export default helper(function([index, array]) {
  return objectAt(index, array);
});
