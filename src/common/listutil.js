//便利な汎用ライブラリ lodash ramda
import _ from "lodash";
import * as R from "ramda";

/**
 * リストから特定の値以外のランダムなリストを返す
 */
export const nonCurrentList = (list) => {
  return (current) => {
    if (current === undefined) return list;
    return R.filter((n) => n !== current, list);
  };
};

/**
 * リストからランダムな値を返す
 * リストの数が1ならそれを返す
 */
export const randomValueFromList = (list) => {
  if (list.length === 1) return list[0];
  return list[_.random(list.length - 1)];
};
