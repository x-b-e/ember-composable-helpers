import { helper } from '@ember/component/helper';
import { A as emberArray, isArray as isEmberArray } from '@ember/array';
import { isSliceable } from '../utils/as-array';

function contains(needle, haystack) {
  return emberArray(haystack).includes(needle);
}

export function without(needle, haystack) {
  if (isSliceable(haystack)) {
    haystack = haystack.slice();
  }
  if (isSliceable(needle)) {
    needle = needle.slice();
  }
  if (!isEmberArray(haystack)) {
    return false;
  }

  if (isEmberArray(needle) && needle.length) {
    return haystack.reduce((acc, val) => {
      return contains(val, needle) ? acc : acc.concat(val);
    }, []);
  }

  return emberArray(haystack).without(needle);
}

export default helper(function([needle, haystack]) {
  return without(needle, haystack);
});
