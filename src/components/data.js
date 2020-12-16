/**
 * ランダムに表示されるstringのリスト
 */
export const list = [
  {
    title: "_.chunk(array, [size=1])",
    example:
      "_.chunk(['a', 'b', 'c', 'd'], 2);\n// => [['a', 'b'], ['c', 'd']]\n _.chunk(['a', 'b', 'c', 'd'], 3);\n// => [['a', 'b', 'c'], ['d']]"
  },
  {
    title: "_.compact(array)",
    example: "_.compact([0, 1, false, 2, '', 3]);\n// => [1, 2, 3]"
  },
  {
    title: "_.concat(array, [values])",
    example:
      "var array = [1];\nvar other = _.concat(array, 2, [3], [[4]]);\n console.log(other);\n// => [1, 2, 3, [4]]\n console.log(array);\n// => [1]"
  },
  {
    title: "_.difference(array, [values])",
    example: "_.difference([2, 1], [2, 3]);\n// => [1]"
  },
  {
    title: "_.differenceBy(array, [values], [iteratee=_.identity])",
    example:
      "_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);\n// => [1.2]\n // The `_.property` iteratee shorthand.\n_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');\n// => [{ 'x': 2 }]"
  },
  {
    title: "_.differenceWith(array, [values], [comparator])",
    example:
      "var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\n _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);\n// => [{ 'x': 2, 'y': 1 }]"
  },
  {
    title: "_.drop(array, [n=1])",
    example:
      "_.drop([1, 2, 3]);\n// => [2, 3]\n _.drop([1, 2, 3], 2);\n// => [3]\n _.drop([1, 2, 3], 5);\n// => []\n _.drop([1, 2, 3], 0);\n// => [1, 2, 3]"
  },
  {
    title: "_.dropRight(array, [n=1])",
    example:
      "_.dropRight([1, 2, 3]);\n// => [1, 2]\n _.dropRight([1, 2, 3], 2);\n// => [1]\n _.dropRight([1, 2, 3], 5);\n// => []\n _.dropRight([1, 2, 3], 0);\n// => [1, 2, 3]"
  },
  {
    title: "_.dropRightWhile(array, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': true },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': false }\n];\n _.dropRightWhile(users, function(o) { return !o.active; });\n// => objects for ['barney']\n // The `_.matches` iteratee shorthand.\n_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });\n// => objects for ['barney', 'fred']\n // The `_.matchesProperty` iteratee shorthand.\n_.dropRightWhile(users, ['active', false]);\n// => objects for ['barney']\n // The `_.property` iteratee shorthand.\n_.dropRightWhile(users, 'active');\n// => objects for ['barney', 'fred', 'pebbles']"
  },
  {
    title: "_.dropWhile(array, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': false },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': true }\n];\n _.dropWhile(users, function(o) { return !o.active; });\n// => objects for ['pebbles']\n // The `_.matches` iteratee shorthand.\n_.dropWhile(users, { 'user': 'barney', 'active': false });\n// => objects for ['fred', 'pebbles']\n // The `_.matchesProperty` iteratee shorthand.\n_.dropWhile(users, ['active', false]);\n// => objects for ['pebbles']\n // The `_.property` iteratee shorthand.\n_.dropWhile(users, 'active');\n// => objects for ['barney', 'fred', 'pebbles']"
  },
  {
    title: "_.fill(array, value, [start=0], [end=array.length])",
    example:
      "var array = [1, 2, 3];\n _.fill(array, 'a');\nconsole.log(array);\n// => ['a', 'a', 'a']\n _.fill(Array(3), 2);\n// => [2, 2, 2]\n _.fill([4, 6, 8, 10], '*', 1, 3);\n// => [4, '*', '*', 10]"
  },
  {
    title: "_.findIndex(array, [predicate=_.identity], [fromIndex=0])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': false },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': true }\n];\n _.findIndex(users, function(o) { return o.user == 'barney'; });\n// => 0\n // The `_.matches` iteratee shorthand.\n_.findIndex(users, { 'user': 'fred', 'active': false });\n// => 1\n // The `_.matchesProperty` iteratee shorthand.\n_.findIndex(users, ['active', false]);\n// => 0\n // The `_.property` iteratee shorthand.\n_.findIndex(users, 'active');\n// => 2"
  },
  {
    title:
      "_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': true },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': false }\n];\n _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });\n// => 2\n // The `_.matches` iteratee shorthand.\n_.findLastIndex(users, { 'user': 'barney', 'active': true });\n// => 0\n // The `_.matchesProperty` iteratee shorthand.\n_.findLastIndex(users, ['active', false]);\n// => 2\n // The `_.property` iteratee shorthand.\n_.findLastIndex(users, 'active');\n// => 0"
  },
  {
    title: "_.flatten(array)",
    example: "_.flatten([1, [2, [3, [4]], 5]]);\n// => [1, 2, [3, [4]], 5]"
  },
  {
    title: "_.flattenDeep(array)",
    example: "_.flattenDeep([1, [2, [3, [4]], 5]]);\n// => [1, 2, 3, 4, 5]"
  },
  {
    title: "_.flattenDepth(array, [depth=1])",
    example:
      "var array = [1, [2, [3, [4]], 5]];\n _.flattenDepth(array, 1);\n// => [1, 2, [3, [4]], 5]\n _.flattenDepth(array, 2);\n// => [1, 2, 3, [4], 5]"
  },
  {
    title: "_.fromPairs(pairs)",
    example: "_.fromPairs([['a', 1], ['b', 2]]);\n// => { 'a': 1, 'b': 2 }"
  },
  {
    title: "_.head(array)",
    example: "_.head([1, 2, 3]);\n// => 1\n _.head([]);\n// => undefined"
  },
  {
    title: "_.indexOf(array, value, [fromIndex=0])",
    example:
      "_.indexOf([1, 2, 1, 2], 2);\n// => 1\n // Search from the `fromIndex`.\n_.indexOf([1, 2, 1, 2], 2, 2);\n// => 3"
  },
  { title: "_.initial(array)", example: "_.initial([1, 2, 3]);\n// => [1, 2]" },
  {
    title: "_.intersection([arrays])",
    example: "_.intersection([2, 1], [2, 3]);\n// => [2]"
  },
  {
    title: "_.intersectionBy([arrays], [iteratee=_.identity])",
    example:
      "_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);\n// => [2.1]\n // The `_.property` iteratee shorthand.\n_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');\n// => [{ 'x': 1 }]"
  },
  {
    title: "_.intersectionWith([arrays], [comparator])",
    example:
      "var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\nvar others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n _.intersectionWith(objects, others, _.isEqual);\n// => [{ 'x': 1, 'y': 2 }]"
  },
  {
    title: "_.join(array, [separator=','])",
    example: "_.join(['a', 'b', 'c'], '~');\n// => 'a~b~c'"
  },
  { title: "_.last(array)", example: "_.last([1, 2, 3]);\n// => 3" },
  {
    title: "_.lastIndexOf(array, value, [fromIndex=array.length-1])",
    example:
      "_.lastIndexOf([1, 2, 1, 2], 2);\n// => 3\n // Search from the `fromIndex`.\n_.lastIndexOf([1, 2, 1, 2], 2, 2);\n// => 1"
  },
  {
    title: "_.nth(array, [n=0])",
    example:
      "var array = ['a', 'b', 'c', 'd'];\n _.nth(array, 1);\n// => 'b'\n _.nth(array, -2);\n// => 'c';"
  },
  {
    title: "_.pull(array, [values])",
    example:
      "var array = ['a', 'b', 'c', 'a', 'b', 'c'];\n _.pull(array, 'a', 'c');\nconsole.log(array);\n// => ['b', 'b']"
  },
  {
    title: "_.pullAll(array, values)",
    example:
      "var array = ['a', 'b', 'c', 'a', 'b', 'c'];\n _.pullAll(array, ['a', 'c']);\nconsole.log(array);\n// => ['b', 'b']"
  },
  {
    title: "_.pullAllBy(array, values, [iteratee=_.identity])",
    example:
      "var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];\n _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');\nconsole.log(array);\n// => [{ 'x': 2 }]"
  },
  {
    title: "_.pullAllWith(array, values, [comparator])",
    example:
      "var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];\n _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);\nconsole.log(array);\n// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]"
  },
  {
    title: "_.pullAt(array, [indexes])",
    example:
      "var array = ['a', 'b', 'c', 'd'];\nvar pulled = _.pullAt(array, [1, 3]);\n console.log(array);\n// => ['a', 'c']\n console.log(pulled);\n// => ['b', 'd']"
  },
  {
    title: "_.remove(array, [predicate=_.identity])",
    example:
      "var array = [1, 2, 3, 4];\nvar evens = _.remove(array, function(n) {\n  return n % 2 == 0;\n});\n console.log(array);\n// => [1, 3]\n console.log(evens);\n// => [2, 4]"
  },
  {
    title: "_.reverse(array)",
    example:
      "var array = [1, 2, 3];\n _.reverse(array);\n// => [3, 2, 1]\n console.log(array);\n// => [3, 2, 1]"
  },
  {
    title: "_.sortedIndex(array, value)",
    example: "_.sortedIndex([30, 50], 40);\n// => 1"
  },
  {
    title: "_.sortedIndexBy(array, value, [iteratee=_.identity])",
    example:
      "var objects = [{ 'x': 4 }, { 'x': 5 }];\n _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });\n// => 0\n // The `_.property` iteratee shorthand.\n_.sortedIndexBy(objects, { 'x': 4 }, 'x');\n// => 0"
  },
  {
    title: "_.sortedIndexOf(array, value)",
    example: "_.sortedIndexOf([4, 5, 5, 5, 6], 5);\n// => 1"
  },
  {
    title: "_.sortedLastIndex(array, value)",
    example: "_.sortedLastIndex([4, 5, 5, 5, 6], 5);\n// => 4"
  },
  {
    title: "_.sortedLastIndexBy(array, value, [iteratee=_.identity])",
    example:
      "var objects = [{ 'x': 4 }, { 'x': 5 }];\n _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });\n// => 1\n // The `_.property` iteratee shorthand.\n_.sortedLastIndexBy(objects, { 'x': 4 }, 'x');\n// => 1"
  },
  {
    title: "_.sortedLastIndexOf(array, value)",
    example: "_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);\n// => 3"
  },
  {
    title: "_.sortedUniq(array)",
    example: "_.sortedUniq([1, 1, 2]);\n// => [1, 2]"
  },
  {
    title: "_.sortedUniqBy(array, [iteratee])",
    example:
      "_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);\n// => [1.1, 2.3]"
  },
  { title: "_.tail(array)", example: "_.tail([1, 2, 3]);\n// => [2, 3]" },
  {
    title: "_.take(array, [n=1])",
    example:
      "_.take([1, 2, 3]);\n// => [1]\n _.take([1, 2, 3], 2);\n// => [1, 2]\n _.take([1, 2, 3], 5);\n// => [1, 2, 3]\n _.take([1, 2, 3], 0);\n// => []"
  },
  {
    title: "_.takeRight(array, [n=1])",
    example:
      "_.takeRight([1, 2, 3]);\n// => [3]\n _.takeRight([1, 2, 3], 2);\n// => [2, 3]\n _.takeRight([1, 2, 3], 5);\n// => [1, 2, 3]\n _.takeRight([1, 2, 3], 0);\n// => []"
  },
  {
    title: "_.takeRightWhile(array, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': true },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': false }\n];\n _.takeRightWhile(users, function(o) { return !o.active; });\n// => objects for ['fred', 'pebbles']\n // The `_.matches` iteratee shorthand.\n_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });\n// => objects for ['pebbles']\n // The `_.matchesProperty` iteratee shorthand.\n_.takeRightWhile(users, ['active', false]);\n// => objects for ['fred', 'pebbles']\n // The `_.property` iteratee shorthand.\n_.takeRightWhile(users, 'active');\n// => []"
  },
  {
    title: "_.takeWhile(array, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney',  'active': false },\n  { 'user': 'fred',    'active': false },\n  { 'user': 'pebbles', 'active': true }\n];\n _.takeWhile(users, function(o) { return !o.active; });\n// => objects for ['barney', 'fred']\n // The `_.matches` iteratee shorthand.\n_.takeWhile(users, { 'user': 'barney', 'active': false });\n// => objects for ['barney']\n // The `_.matchesProperty` iteratee shorthand.\n_.takeWhile(users, ['active', false]);\n// => objects for ['barney', 'fred']\n // The `_.property` iteratee shorthand.\n_.takeWhile(users, 'active');\n// => []"
  },
  {
    title: "_.union([arrays])",
    example: "_.union([2], [1, 2]);\n// => [2, 1]"
  },
  {
    title: "_.unionBy([arrays], [iteratee=_.identity])",
    example:
      "_.unionBy([2.1], [1.2, 2.3], Math.floor);\n// => [2.1, 1.2]\n // The `_.property` iteratee shorthand.\n_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');\n// => [{ 'x': 1 }, { 'x': 2 }]"
  },
  {
    title: "_.unionWith([arrays], [comparator])",
    example:
      "var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\nvar others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n _.unionWith(objects, others, _.isEqual);\n// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]"
  },
  { title: "_.uniq(array)", example: "_.uniq([2, 1, 2]);\n// => [2, 1]" },
  {
    title: "_.uniqBy(array, [iteratee=_.identity])",
    example:
      "_.uniqBy([2.1, 1.2, 2.3], Math.floor);\n// => [2.1, 1.2]\n // The `_.property` iteratee shorthand.\n_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');\n// => [{ 'x': 1 }, { 'x': 2 }]"
  },
  {
    title: "_.uniqWith(array, [comparator])",
    example:
      "var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];\n _.uniqWith(objects, _.isEqual);\n// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]"
  },
  {
    title: "_.unzip(array)",
    example:
      "var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);\n// => [['a', 1, true], ['b', 2, false]]\n _.unzip(zipped);\n// => [['a', 'b'], [1, 2], [true, false]]"
  },
  {
    title: "_.unzipWith(array, [iteratee=_.identity])",
    example:
      "var zipped = _.zip([1, 2], [10, 20], [100, 200]);\n// => [[1, 10, 100], [2, 20, 200]]\n _.unzipWith(zipped, _.add);\n// => [3, 30, 300]"
  },
  {
    title: "_.without(array, [values])",
    example: "_.without([2, 1, 2, 3], 1, 2);\n// => [3]"
  },
  { title: "_.xor([arrays])", example: "_.xor([2, 1], [2, 3]);\n// => [1, 3]" },
  {
    title: "_.xorBy([arrays], [iteratee=_.identity])",
    example:
      "_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);\n// => [1.2, 3.4]\n // The `_.property` iteratee shorthand.\n_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');\n// => [{ 'x': 2 }]"
  },
  {
    title: "_.xorWith([arrays], [comparator])",
    example:
      "var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];\nvar others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];\n _.xorWith(objects, others, _.isEqual);\n// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]"
  },
  {
    title: "_.zip([arrays])",
    example:
      "_.zip(['a', 'b'], [1, 2], [true, false]);\n// => [['a', 1, true], ['b', 2, false]]"
  },
  {
    title: "_.zipObject([props=[]], [values=[]])",
    example: "_.zipObject(['a', 'b'], [1, 2]);\n// => { 'a': 1, 'b': 2 }"
  },
  {
    title: "_.zipObjectDeep([props=[]], [values=[]])",
    example:
      "_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);\n// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }"
  },
  {
    title: "_.zipWith([arrays], [iteratee=_.identity])",
    example:
      "_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {\n  return a + b + c;\n});\n// => [111, 222]"
  },
  {
    title: "_.countBy(collection, [iteratee=_.identity])",
    example:
      "_.countBy([6.1, 4.2, 6.3], Math.floor);\n// => { '4': 1, '6': 2 }\n // The `_.property` iteratee shorthand.\n_.countBy(['one', 'two', 'three'], 'length');\n// => { '3': 2, '5': 1 }"
  },
  {
    title: "_.countBy(collection, [iteratee=_.identity])",
    example:
      "_.countBy([6.1, 4.2, 6.3], Math.floor);\n// => { '4': 1, '6': 2 }\n // The `_.property` iteratee shorthand.\n_.countBy(['one', 'two', 'three'], 'length');\n// => { '3': 2, '5': 1 }"
  },
  {
    title: "_.every(collection, [predicate=_.identity])",
    example:
      "_.every([true, 1, null, 'yes'], Boolean);\n// => false\n var users = [\n  { 'user': 'barney', 'age': 36, 'active': false },\n  { 'user': 'fred',   'age': 40, 'active': false }\n];\n // The `_.matches` iteratee shorthand.\n_.every(users, { 'user': 'barney', 'active': false });\n// => false\n // The `_.matchesProperty` iteratee shorthand.\n_.every(users, ['active', false]);\n// => true\n // The `_.property` iteratee shorthand.\n_.every(users, 'active');\n// => false"
  },
  {
    title: "_.filter(collection, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney', 'age': 36, 'active': true },\n  { 'user': 'fred',   'age': 40, 'active': false }\n];\n _.filter(users, function(o) { return !o.active; });\n// => objects for ['fred']\n // The `_.matches` iteratee shorthand.\n_.filter(users, { 'age': 36, 'active': true });\n// => objects for ['barney']\n // The `_.matchesProperty` iteratee shorthand.\n_.filter(users, ['active', false]);\n// => objects for ['fred']\n // The `_.property` iteratee shorthand.\n_.filter(users, 'active');\n// => objects for ['barney']"
  },
  {
    title: "_.find(collection, [predicate=_.identity], [fromIndex=0])",
    example:
      "var users = [\n  { 'user': 'barney',  'age': 36, 'active': true },\n  { 'user': 'fred',    'age': 40, 'active': false },\n  { 'user': 'pebbles', 'age': 1,  'active': true }\n];\n _.find(users, function(o) { return o.age < 40; });\n// => object for 'barney'\n // The `_.matches` iteratee shorthand.\n_.find(users, { 'age': 1, 'active': true });\n// => object for 'pebbles'\n // The `_.matchesProperty` iteratee shorthand.\n_.find(users, ['active', false]);\n// => object for 'fred'\n // The `_.property` iteratee shorthand.\n_.find(users, 'active');\n// => object for 'barney'"
  },
  {
    title:
      "_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])",
    example:
      "_.findLast([1, 2, 3, 4], function(n) {\n  return n % 2 == 1;\n});\n// => 3"
  },
  {
    title: "_.flatMap(collection, [iteratee=_.identity])",
    example:
      "function duplicate(n) {\n  return [n, n];\n}\n _.flatMap([1, 2], duplicate);\n// => [1, 1, 2, 2]"
  },
  {
    title: "_.flatMapDeep(collection, [iteratee=_.identity])",
    example:
      "function duplicate(n) {\n  return [[[n, n]]];\n}\n _.flatMapDeep([1, 2], duplicate);\n// => [1, 1, 2, 2]"
  },
  {
    title: "_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])",
    example:
      "function duplicate(n) {\n  return [[[n, n]]];\n}\n _.flatMapDepth([1, 2], duplicate, 2);\n// => [[1, 1], [2, 2]]"
  },
  {
    title: "_.forEach(collection, [iteratee=_.identity])",
    example:
      "_.forEach([1, 2], function(value) {\n  console.log(value);\n});\n// => Logs `1` then `2`.\n _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {\n  console.log(key);\n});\n// => Logs 'a' then 'b' (iteration order is not guaranteed)."
  },
  {
    title: "_.forEachRight(collection, [iteratee=_.identity])",
    example:
      "_.forEachRight([1, 2], function(value) {\n  console.log(value);\n});\n// => Logs `2` then `1`."
  },
  {
    title: "_.groupBy(collection, [iteratee=_.identity])",
    example:
      "_.groupBy([6.1, 4.2, 6.3], Math.floor);\n// => { '4': [4.2], '6': [6.1, 6.3] }\n // The `_.property` iteratee shorthand.\n_.groupBy(['one', 'two', 'three'], 'length');\n// => { '3': ['one', 'two'], '5': ['three'] }"
  },
  {
    title: "_.includes(collection, value, [fromIndex=0])",
    example:
      "_.includes([1, 2, 3], 1);\n// => true\n _.includes([1, 2, 3], 1, 2);\n// => false\n _.includes({ 'a': 1, 'b': 2 }, 1);\n// => true\n _.includes('abcd', 'bc');\n// => true"
  },
  {
    title: "_.invokeMap(collection, path, [args])",
    example:
      "_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');\n// => [[1, 5, 7], [1, 2, 3]]\n _.invokeMap([123, 456], String.prototype.split, '');\n// => [['1', '2', '3'], ['4', '5', '6']]"
  },
  {
    title: "_.keyBy(collection, [iteratee=_.identity])",
    example:
      "var array = [\n  { 'dir': 'left', 'code': 97 },\n  { 'dir': 'right', 'code': 100 }\n];\n _.keyBy(array, function(o) {\n  return String.fromCharCode(o.code);\n});\n// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }\n _.keyBy(array, 'dir');\n// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }"
  },
  {
    title: "_.map(collection, [iteratee=_.identity])",
    example:
      "function square(n) {\n  return n * n;\n}\n _.map([4, 8], square);\n// => [16, 64]\n _.map({ 'a': 4, 'b': 8 }, square);\n// => [16, 64] (iteration order is not guaranteed)\n var users = [\n  { 'user': 'barney' },\n  { 'user': 'fred' }\n];\n // The `_.property` iteratee shorthand.\n_.map(users, 'user');\n// => ['barney', 'fred']"
  },
  {
    title: "_.orderBy(collection, [iteratees=[_.identity]], [orders])",
    example:
      "var users = [\n  { 'user': 'fred',   'age': 48 },\n  { 'user': 'barney', 'age': 34 },\n  { 'user': 'fred',   'age': 40 },\n  { 'user': 'barney', 'age': 36 }\n];\n // Sort by `user` in ascending order and by `age` in descending order.\n_.orderBy(users, ['user', 'age'], ['asc', 'desc']);\n// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]"
  },
  {
    title: "_.partition(collection, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney',  'age': 36, 'active': false },\n  { 'user': 'fred',    'age': 40, 'active': true },\n  { 'user': 'pebbles', 'age': 1,  'active': false }\n];\n _.partition(users, function(o) { return o.active; });\n// => objects for [['fred'], ['barney', 'pebbles']]\n // The `_.matches` iteratee shorthand.\n_.partition(users, { 'age': 1, 'active': false });\n// => objects for [['pebbles'], ['barney', 'fred']]\n // The `_.matchesProperty` iteratee shorthand.\n_.partition(users, ['active', false]);\n// => objects for [['barney', 'pebbles'], ['fred']]\n // The `_.property` iteratee shorthand.\n_.partition(users, 'active');\n// => objects for [['fred'], ['barney', 'pebbles']]"
  },
  {
    title: "_.reduce(collection, [iteratee=_.identity], [accumulator])",
    example:
      "_.reduce([1, 2], function(sum, n) {\n  return sum + n;\n}, 0);\n// => 3\n _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {\n  (result[value] || (result[value] = [])).push(key);\n  return result;\n}, {});\n// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)"
  },
  {
    title: "_.reduceRight(collection, [iteratee=_.identity], [accumulator])",
    example:
      "var array = [[0, 1], [2, 3], [4, 5]];\n _.reduceRight(array, function(flattened, other) {\n  return flattened.concat(other);\n}, []);\n// => [4, 5, 2, 3, 0, 1]"
  },
  {
    title: "_.reject(collection, [predicate=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney', 'age': 36, 'active': false },\n  { 'user': 'fred',   'age': 40, 'active': true }\n];\n _.reject(users, function(o) { return !o.active; });\n// => objects for ['fred']\n // The `_.matches` iteratee shorthand.\n_.reject(users, { 'age': 40, 'active': true });\n// => objects for ['barney']\n // The `_.matchesProperty` iteratee shorthand.\n_.reject(users, ['active', false]);\n// => objects for ['fred']\n // The `_.property` iteratee shorthand.\n_.reject(users, 'active');\n// => objects for ['barney']"
  },
  {
    title: "_.sample(collection)",
    example: "_.sample([1, 2, 3, 4]);\n// => 2"
  },
  {
    title: "_.sampleSize(collection, [n=1])",
    example:
      "_.sampleSize([1, 2, 3], 2);\n// => [3, 1]\n _.sampleSize([1, 2, 3], 4);\n// => [2, 3, 1]"
  },
  {
    title: "_.shuffle(collection)",
    example: "_.shuffle([1, 2, 3, 4]);\n// => [4, 1, 3, 2]"
  },
  {
    title: "_.size(collection)",
    example:
      "_.size([1, 2, 3]);\n// => 3\n _.size({ 'a': 1, 'b': 2 });\n// => 2\n _.size('pebbles');\n// => 7"
  },
  {
    title: "_.some(collection, [predicate=_.identity])",
    example:
      "_.some([null, 0, 'yes', false], Boolean);\n// => true\n var users = [\n  { 'user': 'barney', 'active': true },\n  { 'user': 'fred',   'active': false }\n];\n // The `_.matches` iteratee shorthand.\n_.some(users, { 'user': 'barney', 'active': false });\n// => false\n // The `_.matchesProperty` iteratee shorthand.\n_.some(users, ['active', false]);\n// => true\n // The `_.property` iteratee shorthand.\n_.some(users, 'active');\n// => true"
  },
  {
    title: "_.sortBy(collection, [iteratees=[_.identity]])",
    example:
      "var users = [\n  { 'user': 'fred',   'age': 48 },\n  { 'user': 'barney', 'age': 36 },\n  { 'user': 'fred',   'age': 40 },\n  { 'user': 'barney', 'age': 34 }\n];\n _.sortBy(users, [function(o) { return o.user; }]);\n// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]\n _.sortBy(users, ['user', 'age']);\n// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]"
  },
  {
    title: "_.now()",
    example:
      "_.defer(function(stamp) {\n  console.log(_.now() - stamp);\n}, _.now());\n// => Logs the number of milliseconds it took for the deferred invocation."
  },
  {
    title: "_.now()",
    example:
      "_.defer(function(stamp) {\n  console.log(_.now() - stamp);\n}, _.now());\n// => Logs the number of milliseconds it took for the deferred invocation."
  },
  {
    title: "_.after(n, func)",
    example:
      "var saves = ['profile', 'settings'];\n var done = _.after(saves.length, function() {\n  console.log('done saving!');\n});\n _.forEach(saves, function(type) {\n  asyncSave({ 'type': type, 'complete': done });\n});\n// => Logs 'done saving!' after the two async saves have completed."
  },
  {
    title: "_.after(n, func)",
    example:
      "var saves = ['profile', 'settings'];\n var done = _.after(saves.length, function() {\n  console.log('done saving!');\n});\n _.forEach(saves, function(type) {\n  asyncSave({ 'type': type, 'complete': done });\n});\n// => Logs 'done saving!' after the two async saves have completed."
  },
  {
    title: "_.ary(func, [n=func.length])",
    example: "_.map(['6', '8', '10'], _.ary(parseInt, 1));\n// => [6, 8, 10]"
  },
  {
    title: "_.before(n, func)",
    example:
      "jQuery(element).on('click', _.before(5, addContactToList));\n// => Allows adding up to 4 contacts to the list."
  },
  {
    title: "_.bind(func, thisArg, [partials])",
    example:
      "function greet(greeting, punctuation) {\n  return greeting + ' ' + this.user + punctuation;\n}\n var object = { 'user': 'fred' };\n var bound = _.bind(greet, object, 'hi');\nbound('!');\n// => 'hi fred!'\n // Bound with placeholders.\nvar bound = _.bind(greet, object, _, '!');\nbound('hi');\n// => 'hi fred!'"
  },
  {
    title: "_.bindKey(object, key, [partials])",
    example:
      "var object = {\n  'user': 'fred',\n  'greet': function(greeting, punctuation) {\n    return greeting + ' ' + this.user + punctuation;\n  }\n};\n var bound = _.bindKey(object, 'greet', 'hi');\nbound('!');\n// => 'hi fred!'\n object.greet = function(greeting, punctuation) {\n  return greeting + 'ya ' + this.user + punctuation;\n};\n bound('!');\n// => 'hiya fred!'\n // Bound with placeholders.\nvar bound = _.bindKey(object, 'greet', _, '!');\nbound('hi');\n// => 'hiya fred!'"
  },
  {
    title: "_.curry(func, [arity=func.length])",
    example:
      "var abc = function(a, b, c) {\n  return [a, b, c];\n};\n var curried = _.curry(abc);\n curried(1)(2)(3);\n// => [1, 2, 3]\n curried(1, 2)(3);\n// => [1, 2, 3]\n curried(1, 2, 3);\n// => [1, 2, 3]\n // Curried with placeholders.\ncurried(1)(_, 3)(2);\n// => [1, 2, 3]"
  },
  {
    title: "_.curryRight(func, [arity=func.length])",
    example:
      "var abc = function(a, b, c) {\n  return [a, b, c];\n};\n var curried = _.curryRight(abc);\n curried(3)(2)(1);\n// => [1, 2, 3]\n curried(2, 3)(1);\n// => [1, 2, 3]\n curried(1, 2, 3);\n// => [1, 2, 3]\n // Curried with placeholders.\ncurried(3)(1, _)(2);\n// => [1, 2, 3]"
  },
  {
    title: "_.debounce(func, [wait=0], [options={}])",
    example:
      "// Avoid costly calculations while the window size is in flux.\njQuery(window).on('resize', _.debounce(calculateLayout, 150));\n // Invoke `sendMail` when clicked, debouncing subsequent calls.\njQuery(element).on('click', _.debounce(sendMail, 300, {\n  'leading': true,\n  'trailing': false\n}));\n // Ensure `batchLog` is invoked once after 1 second of debounced calls.\nvar debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\nvar source = new EventSource('/stream');\njQuery(source).on('message', debounced);\n // Cancel the trailing debounced invocation.\njQuery(window).on('popstate', debounced.cancel);"
  },
  {
    title: "_.defer(func, [args])",
    example:
      "_.defer(function(text) {\n  console.log(text);\n}, 'deferred');\n// => Logs 'deferred' after one millisecond."
  },
  {
    title: "_.delay(func, wait, [args])",
    example:
      "_.delay(function(text) {\n  console.log(text);\n}, 1000, 'later');\n// => Logs 'later' after one second."
  },
  {
    title: "_.flip(func)",
    example:
      "var flipped = _.flip(function() {\n  return _.toArray(arguments);\n});\n flipped('a', 'b', 'c', 'd');\n// => ['d', 'c', 'b', 'a']"
  },
  {
    title: "_.memoize(func, [resolver])",
    example:
      "var object = { 'a': 1, 'b': 2 };\nvar other = { 'c': 3, 'd': 4 };\n var values = _.memoize(_.values);\nvalues(object);\n// => [1, 2]\n values(other);\n// => [3, 4]\n object.a = 2;\nvalues(object);\n// => [1, 2]\n // Modify the result cache.\nvalues.cache.set(object, ['a', 'b']);\nvalues(object);\n// => ['a', 'b']\n // Replace `_.memoize.Cache`.\n_.memoize.Cache = WeakMap;"
  },
  {
    title: "_.negate(predicate)",
    example:
      "function isEven(n) {\n  return n % 2 == 0;\n}\n _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));\n// => [1, 3, 5]"
  },
  {
    title: "_.once(func)",
    example:
      "var initialize = _.once(createApplication);\ninitialize();\ninitialize();\n// => `createApplication` is invoked once"
  },
  {
    title: "_.overArgs(func, [transforms=[_.identity]])",
    example:
      "function doubled(n) {\n  return n * 2;\n}\n function square(n) {\n  return n * n;\n}\n var func = _.overArgs(function(x, y) {\n  return [x, y];\n}, [square, doubled]);\n func(9, 3);\n// => [81, 6]\n func(10, 5);\n// => [100, 10]"
  },
  {
    title: "_.partial(func, [partials])",
    example:
      "function greet(greeting, name) {\n  return greeting + ' ' + name;\n}\n var sayHelloTo = _.partial(greet, 'hello');\nsayHelloTo('fred');\n// => 'hello fred'\n // Partially applied with placeholders.\nvar greetFred = _.partial(greet, _, 'fred');\ngreetFred('hi');\n// => 'hi fred'"
  },
  {
    title: "_.partialRight(func, [partials])",
    example:
      "function greet(greeting, name) {\n  return greeting + ' ' + name;\n}\n var greetFred = _.partialRight(greet, 'fred');\ngreetFred('hi');\n// => 'hi fred'\n // Partially applied with placeholders.\nvar sayHelloTo = _.partialRight(greet, 'hello', _);\nsayHelloTo('fred');\n// => 'hello fred'"
  },
  {
    title: "_.rearg(func, indexes)",
    example:
      "var rearged = _.rearg(function(a, b, c) {\n  return [a, b, c];\n}, [2, 0, 1]);\n rearged('b', 'c', 'a')\n// => ['a', 'b', 'c']"
  },
  {
    title: "_.rest(func, [start=func.length-1])",
    example:
      "var say = _.rest(function(what, names) {\n  return what + ' ' + _.initial(names).join(', ') +\n    (_.size(names) > 1 ? ', & ' : '') + _.last(names);\n});\n say('hello', 'fred', 'barney', 'pebbles');\n// => 'hello fred, barney, & pebbles'"
  },
  {
    title: "_.spread(func, [start=0])",
    example:
      "var say = _.spread(function(who, what) {\n  return who + ' says ' + what;\n});\n say(['fred', 'hello']);\n// => 'fred says hello'\n var numbers = Promise.all([\n  Promise.resolve(40),\n  Promise.resolve(36)\n]);\n numbers.then(_.spread(function(x, y) {\n  return x + y;\n}));\n// => a Promise of 76"
  },
  {
    title: "_.throttle(func, [wait=0], [options={}])",
    example:
      "// Avoid excessively updating the position while scrolling.\njQuery(window).on('scroll', _.throttle(updatePosition, 100));\n // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\nvar throttled = _.throttle(renewToken, 300000, { 'trailing': false });\njQuery(element).on('click', throttled);\n // Cancel the trailing throttled invocation.\njQuery(window).on('popstate', throttled.cancel);"
  },
  {
    title: "_.unary(func)",
    example: "_.map(['6', '8', '10'], _.unary(parseInt));\n// => [6, 8, 10]"
  },
  {
    title: "_.wrap(value, [wrapper=identity])",
    example:
      "var p = _.wrap(_.escape, function(func, text) {\n  return '<p>' + func(text) + '</p>';\n});\n p('fred, barney, & pebbles');\n// => '<p>fred, barney, &amp; pebbles</p>'"
  },
  {
    title: "_.castArray(value)",
    example:
      "_.castArray(1);\n// => [1]\n _.castArray({ 'a': 1 });\n// => [{ 'a': 1 }]\n _.castArray('abc');\n// => ['abc']\n _.castArray(null);\n// => [null]\n _.castArray(undefined);\n// => [undefined]\n _.castArray();\n// => []\n var array = [1, 2, 3];\nconsole.log(_.castArray(array) === array);\n// => true"
  },
  {
    title: "_.castArray(value)",
    example:
      "_.castArray(1);\n// => [1]\n _.castArray({ 'a': 1 });\n// => [{ 'a': 1 }]\n _.castArray('abc');\n// => ['abc']\n _.castArray(null);\n// => [null]\n _.castArray(undefined);\n// => [undefined]\n _.castArray();\n// => []\n var array = [1, 2, 3];\nconsole.log(_.castArray(array) === array);\n// => true"
  },
  {
    title: "_.clone(value)",
    example:
      "var objects = [{ 'a': 1 }, { 'b': 2 }];\n var shallow = _.clone(objects);\nconsole.log(shallow[0] === objects[0]);\n// => true"
  },
  {
    title: "_.cloneDeep(value)",
    example:
      "var objects = [{ 'a': 1 }, { 'b': 2 }];\n var deep = _.cloneDeep(objects);\nconsole.log(deep[0] === objects[0]);\n// => false"
  },
  {
    title: "_.cloneDeepWith(value, [customizer])",
    example:
      "function customizer(value) {\n  if (_.isElement(value)) {\n    return value.cloneNode(true);\n  }\n}\n var el = _.cloneDeepWith(document.body, customizer);\n console.log(el === document.body);\n// => false\nconsole.log(el.nodeName);\n// => 'BODY'\nconsole.log(el.childNodes.length);\n// => 20"
  },
  {
    title: "_.cloneWith(value, [customizer])",
    example:
      "function customizer(value) {\n  if (_.isElement(value)) {\n    return value.cloneNode(false);\n  }\n}\n var el = _.cloneWith(document.body, customizer);\n console.log(el === document.body);\n// => false\nconsole.log(el.nodeName);\n// => 'BODY'\nconsole.log(el.childNodes.length);\n// => 0"
  },
  {
    title: "_.conformsTo(object, source)",
    example:
      "var object = { 'a': 1, 'b': 2 };\n _.conformsTo(object, { 'b': function(n) { return n > 1; } });\n// => true\n _.conformsTo(object, { 'b': function(n) { return n > 2; } });\n// => false"
  },
  {
    title: "_.eq(value, other)",
    example:
      "var object = { 'a': 1 };\nvar other = { 'a': 1 };\n _.eq(object, object);\n// => true\n _.eq(object, other);\n// => false\n _.eq('a', 'a');\n// => true\n _.eq('a', Object('a'));\n// => false\n _.eq(NaN, NaN);\n// => true"
  },
  {
    title: "_.gt(value, other)",
    example:
      "_.gt(3, 1);\n// => true\n _.gt(3, 3);\n// => false\n _.gt(1, 3);\n// => false"
  },
  {
    title: "_.gte(value, other)",
    example:
      "_.gte(3, 1);\n// => true\n _.gte(3, 3);\n// => true\n _.gte(1, 3);\n// => false"
  },
  {
    title: "_.isArguments(value)",
    example:
      "_.isArguments(function() { return arguments; }());\n// => true\n _.isArguments([1, 2, 3]);\n// => false"
  },
  {
    title: "_.isArray(value)",
    example:
      "_.isArray([1, 2, 3]);\n// => true\n _.isArray(document.body.children);\n// => false\n _.isArray('abc');\n// => false\n _.isArray(_.noop);\n// => false"
  },
  {
    title: "_.isArrayBuffer(value)",
    example:
      "_.isArrayBuffer(new ArrayBuffer(2));\n// => true\n _.isArrayBuffer(new Array(2));\n// => false"
  },
  {
    title: "_.isArrayLike(value)",
    example:
      "_.isArrayLike([1, 2, 3]);\n// => true\n _.isArrayLike(document.body.children);\n// => true\n _.isArrayLike('abc');\n// => true\n _.isArrayLike(_.noop);\n// => false"
  },
  {
    title: "_.isArrayLikeObject(value)",
    example:
      "_.isArrayLikeObject([1, 2, 3]);\n// => true\n _.isArrayLikeObject(document.body.children);\n// => true\n _.isArrayLikeObject('abc');\n// => false\n _.isArrayLikeObject(_.noop);\n// => false"
  },
  {
    title: "_.isBoolean(value)",
    example: "_.isBoolean(false);\n// => true\n _.isBoolean(null);\n// => false"
  },
  {
    title: "_.isBuffer(value)",
    example:
      "_.isBuffer(new Buffer(2));\n// => true\n _.isBuffer(new Uint8Array(2));\n// => false"
  },
  {
    title: "_.isDate(value)",
    example:
      "_.isDate(new Date);\n// => true\n _.isDate('Mon April 23 2012');\n// => false"
  },
  {
    title: "_.isElement(value)",
    example:
      "_.isElement(document.body);\n// => true\n _.isElement('<body>');\n// => false"
  },
  {
    title: "_.isEmpty(value)",
    example:
      "_.isEmpty(null);\n// => true\n _.isEmpty(true);\n// => true\n _.isEmpty(1);\n// => true\n _.isEmpty([1, 2, 3]);\n// => false\n _.isEmpty({ 'a': 1 });\n// => false"
  },
  {
    title: "_.isEqual(value, other)",
    example:
      "var object = { 'a': 1 };\nvar other = { 'a': 1 };\n _.isEqual(object, other);\n// => true\n object === other;\n// => false"
  },
  {
    title: "_.isEqualWith(value, other, [customizer])",
    example:
      "function isGreeting(value) {\n  return /^h(?:i|ello)$/.test(value);\n}\n function customizer(objValue, othValue) {\n  if (isGreeting(objValue) && isGreeting(othValue)) {\n    return true;\n  }\n}\n var array = ['hello', 'goodbye'];\nvar other = ['hi', 'goodbye'];\n _.isEqualWith(array, other, customizer);\n// => true"
  },
  {
    title: "_.isError(value)",
    example:
      "_.isError(new Error);\n// => true\n _.isError(Error);\n// => false"
  },
  {
    title: "_.isFinite(value)",
    example:
      "_.isFinite(3);\n// => true\n _.isFinite(Number.MIN_VALUE);\n// => true\n _.isFinite(Infinity);\n// => false\n _.isFinite('3');\n// => false"
  },
  {
    title: "_.isFunction(value)",
    example: "_.isFunction(_);\n// => true\n _.isFunction(/abc/);\n// => false"
  },
  {
    title: "_.isInteger(value)",
    example:
      "_.isInteger(3);\n// => true\n _.isInteger(Number.MIN_VALUE);\n// => false\n _.isInteger(Infinity);\n// => false\n _.isInteger('3');\n// => false"
  },
  {
    title: "_.isLength(value)",
    example:
      "_.isLength(3);\n// => true\n _.isLength(Number.MIN_VALUE);\n// => false\n _.isLength(Infinity);\n// => false\n _.isLength('3');\n// => false"
  },
  {
    title: "_.isMap(value)",
    example:
      "_.isMap(new Map);\n// => true\n _.isMap(new WeakMap);\n// => false"
  },
  {
    title: "_.isMatch(object, source)",
    example:
      "var object = { 'a': 1, 'b': 2 };\n _.isMatch(object, { 'b': 2 });\n// => true\n _.isMatch(object, { 'b': 1 });\n// => false"
  },
  {
    title: "_.isMatchWith(object, source, [customizer])",
    example:
      "function isGreeting(value) {\n  return /^h(?:i|ello)$/.test(value);\n}\n function customizer(objValue, srcValue) {\n  if (isGreeting(objValue) && isGreeting(srcValue)) {\n    return true;\n  }\n}\n var object = { 'greeting': 'hello' };\nvar source = { 'greeting': 'hi' };\n _.isMatchWith(object, source, customizer);\n// => true"
  },
  {
    title: "_.isNaN(value)",
    example:
      "_.isNaN(NaN);\n// => true\n _.isNaN(new Number(NaN));\n// => true\n isNaN(undefined);\n// => true\n _.isNaN(undefined);\n// => false"
  },
  {
    title: "_.isNative(value)",
    example:
      "_.isNative(Array.prototype.push);\n// => true\n _.isNative(_);\n// => false"
  },
  {
    title: "_.isNil(value)",
    example:
      "_.isNil(null);\n// => true\n _.isNil(void 0);\n// => true\n _.isNil(NaN);\n// => false"
  },
  {
    title: "_.isNull(value)",
    example: "_.isNull(null);\n// => true\n _.isNull(void 0);\n// => false"
  },
  {
    title: "_.isNumber(value)",
    example:
      "_.isNumber(3);\n// => true\n _.isNumber(Number.MIN_VALUE);\n// => true\n _.isNumber(Infinity);\n// => true\n _.isNumber('3');\n// => false"
  },
  {
    title: "_.isObject(value)",
    example:
      "_.isObject({});\n// => true\n _.isObject([1, 2, 3]);\n// => true\n _.isObject(_.noop);\n// => true\n _.isObject(null);\n// => false"
  },
  {
    title: "_.isObjectLike(value)",
    example:
      "_.isObjectLike({});\n// => true\n _.isObjectLike([1, 2, 3]);\n// => true\n _.isObjectLike(_.noop);\n// => false\n _.isObjectLike(null);\n// => false"
  },
  {
    title: "_.isPlainObject(value)",
    example:
      "function Foo() {\n  this.a = 1;\n}\n _.isPlainObject(new Foo);\n// => false\n _.isPlainObject([1, 2, 3]);\n// => false\n _.isPlainObject({ 'x': 0, 'y': 0 });\n// => true\n _.isPlainObject(Object.create(null));\n// => true"
  },
  {
    title: "_.isRegExp(value)",
    example:
      "_.isRegExp(/abc/);\n// => true\n _.isRegExp('/abc/');\n// => false"
  },
  {
    title: "_.isSafeInteger(value)",
    example:
      "_.isSafeInteger(3);\n// => true\n _.isSafeInteger(Number.MIN_VALUE);\n// => false\n _.isSafeInteger(Infinity);\n// => false\n _.isSafeInteger('3');\n// => false"
  },
  {
    title: "_.isSet(value)",
    example:
      "_.isSet(new Set);\n// => true\n _.isSet(new WeakSet);\n// => false"
  },
  {
    title: "_.isString(value)",
    example: "_.isString('abc');\n// => true\n _.isString(1);\n// => false"
  },
  {
    title: "_.isSymbol(value)",
    example:
      "_.isSymbol(Symbol.iterator);\n// => true\n _.isSymbol('abc');\n// => false"
  },
  {
    title: "_.isTypedArray(value)",
    example:
      "_.isTypedArray(new Uint8Array);\n// => true\n _.isTypedArray([]);\n// => false"
  },
  {
    title: "_.isUndefined(value)",
    example:
      "_.isUndefined(void 0);\n// => true\n _.isUndefined(null);\n// => false"
  },
  {
    title: "_.isWeakMap(value)",
    example:
      "_.isWeakMap(new WeakMap);\n// => true\n _.isWeakMap(new Map);\n// => false"
  },
  {
    title: "_.isWeakSet(value)",
    example:
      "_.isWeakSet(new WeakSet);\n// => true\n _.isWeakSet(new Set);\n// => false"
  },
  {
    title: "_.lt(value, other)",
    example:
      "_.lt(1, 3);\n// => true\n _.lt(3, 3);\n// => false\n _.lt(3, 1);\n// => false"
  },
  {
    title: "_.lte(value, other)",
    example:
      "_.lte(1, 3);\n// => true\n _.lte(3, 3);\n// => true\n _.lte(3, 1);\n// => false"
  },
  {
    title: "_.toArray(value)",
    example:
      "_.toArray({ 'a': 1, 'b': 2 });\n// => [1, 2]\n _.toArray('abc');\n// => ['a', 'b', 'c']\n _.toArray(1);\n// => []\n _.toArray(null);\n// => []"
  },
  {
    title: "_.toFinite(value)",
    example:
      "_.toFinite(3.2);\n// => 3.2\n _.toFinite(Number.MIN_VALUE);\n// => 5e-324\n _.toFinite(Infinity);\n// => 1.7976931348623157e+308\n _.toFinite('3.2');\n// => 3.2"
  },
  {
    title: "_.toInteger(value)",
    example:
      "_.toInteger(3.2);\n// => 3\n _.toInteger(Number.MIN_VALUE);\n// => 0\n _.toInteger(Infinity);\n// => 1.7976931348623157e+308\n _.toInteger('3.2');\n// => 3"
  },
  {
    title: "_.toLength(value)",
    example:
      "_.toLength(3.2);\n// => 3\n _.toLength(Number.MIN_VALUE);\n// => 0\n _.toLength(Infinity);\n// => 4294967295\n _.toLength('3.2');\n// => 3"
  },
  {
    title: "_.toNumber(value)",
    example:
      "_.toNumber(3.2);\n// => 3.2\n _.toNumber(Number.MIN_VALUE);\n// => 5e-324\n _.toNumber(Infinity);\n// => Infinity\n _.toNumber('3.2');\n// => 3.2"
  },
  {
    title: "_.toPlainObject(value)",
    example:
      "function Foo() {\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.assign({ 'a': 1 }, new Foo);\n// => { 'a': 1, 'b': 2 }\n _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n// => { 'a': 1, 'b': 2, 'c': 3 }"
  },
  {
    title: "_.toSafeInteger(value)",
    example:
      "_.toSafeInteger(3.2);\n// => 3\n _.toSafeInteger(Number.MIN_VALUE);\n// => 0\n _.toSafeInteger(Infinity);\n// => 9007199254740991\n _.toSafeInteger('3.2');\n// => 3"
  },
  {
    title: "_.toString(value)",
    example:
      "_.toString(null);\n// => ''\n _.toString(-0);\n// => '-0'\n _.toString([1, 2, 3]);\n// => '1,2,3'"
  },
  { title: "_.add(augend, addend)", example: "_.add(6, 4);\n// => 10" },
  { title: "_.add(augend, addend)", example: "_.add(6, 4);\n// => 10" },
  {
    title: "_.ceil(number, [precision=0])",
    example:
      "_.ceil(4.006);\n// => 5\n _.ceil(6.004, 2);\n// => 6.01\n _.ceil(6040, -2);\n// => 6100"
  },
  {
    title: "_.divide(dividend, divisor)",
    example: "_.divide(6, 4);\n// => 1.5"
  },
  {
    title: "_.floor(number, [precision=0])",
    example:
      "_.floor(4.006);\n// => 4\n _.floor(0.046, 2);\n// => 0.04\n _.floor(4060, -2);\n// => 4000"
  },
  {
    title: "_.max(array)",
    example: "_.max([4, 2, 8, 6]);\n// => 8\n _.max([]);\n// => undefined"
  },
  {
    title: "_.maxBy(array, [iteratee=_.identity])",
    example:
      "var objects = [{ 'n': 1 }, { 'n': 2 }];\n _.maxBy(objects, function(o) { return o.n; });\n// => { 'n': 2 }\n // The `_.property` iteratee shorthand.\n_.maxBy(objects, 'n');\n// => { 'n': 2 }"
  },
  { title: "_.mean(array)", example: "_.mean([4, 2, 8, 6]);\n// => 5" },
  {
    title: "_.meanBy(array, [iteratee=_.identity])",
    example:
      "var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n _.meanBy(objects, function(o) { return o.n; });\n// => 5\n // The `_.property` iteratee shorthand.\n_.meanBy(objects, 'n');\n// => 5"
  },
  {
    title: "_.min(array)",
    example: "_.min([4, 2, 8, 6]);\n// => 2\n _.min([]);\n// => undefined"
  },
  {
    title: "_.minBy(array, [iteratee=_.identity])",
    example:
      "var objects = [{ 'n': 1 }, { 'n': 2 }];\n _.minBy(objects, function(o) { return o.n; });\n// => { 'n': 1 }\n // The `_.property` iteratee shorthand.\n_.minBy(objects, 'n');\n// => { 'n': 1 }"
  },
  {
    title: "_.multiply(multiplier, multiplicand)",
    example: "_.multiply(6, 4);\n// => 24"
  },
  {
    title: "_.round(number, [precision=0])",
    example:
      "_.round(4.006);\n// => 4\n _.round(4.006, 2);\n// => 4.01\n _.round(4060, -2);\n// => 4100"
  },
  {
    title: "_.subtract(minuend, subtrahend)",
    example: "_.subtract(6, 4);\n// => 2"
  },
  { title: "_.sum(array)", example: "_.sum([4, 2, 8, 6]);\n// => 20" },
  {
    title: "_.sumBy(array, [iteratee=_.identity])",
    example:
      "var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];\n _.sumBy(objects, function(o) { return o.n; });\n// => 20\n // The `_.property` iteratee shorthand.\n_.sumBy(objects, 'n');\n// => 20"
  },
  {
    title: "_.clamp(number, [lower], upper)",
    example: "_.clamp(-10, -5, 5);\n// => -5\n _.clamp(10, -5, 5);\n// => 5"
  },
  {
    title: "_.clamp(number, [lower], upper)",
    example: "_.clamp(-10, -5, 5);\n// => -5\n _.clamp(10, -5, 5);\n// => 5"
  },
  {
    title: "_.inRange(number, [start=0], end)",
    example:
      "_.inRange(3, 2, 4);\n// => true\n _.inRange(4, 8);\n// => true\n _.inRange(4, 2);\n// => false\n _.inRange(2, 2);\n// => false\n _.inRange(1.2, 2);\n// => true\n _.inRange(5.2, 4);\n// => false\n _.inRange(-3, -2, -6);\n// => true"
  },
  {
    title: "_.random([lower=0], [upper=1], [floating])",
    example:
      "_.random(0, 5);\n// => an integer between 0 and 5\n _.random(5);\n// => also an integer between 0 and 5\n _.random(5, true);\n// => a floating-point number between 0 and 5\n _.random(1.2, 5.2);\n// => a floating-point number between 1.2 and 5.2"
  },
  {
    title: "_.assign(object, [sources])",
    example:
      "function Foo() {\n  this.a = 1;\n}\n function Bar() {\n  this.c = 3;\n}\n Foo.prototype.b = 2;\nBar.prototype.d = 4;\n _.assign({ 'a': 0 }, new Foo, new Bar);\n// => { 'a': 1, 'c': 3 }"
  },
  {
    title: "_.assign(object, [sources])",
    example:
      "function Foo() {\n  this.a = 1;\n}\n function Bar() {\n  this.c = 3;\n}\n Foo.prototype.b = 2;\nBar.prototype.d = 4;\n _.assign({ 'a': 0 }, new Foo, new Bar);\n// => { 'a': 1, 'c': 3 }"
  },
  {
    title: "_.assignIn(object, [sources])",
    example:
      "function Foo() {\n  this.a = 1;\n}\n function Bar() {\n  this.c = 3;\n}\n Foo.prototype.b = 2;\nBar.prototype.d = 4;\n _.assignIn({ 'a': 0 }, new Foo, new Bar);\n// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }"
  },
  {
    title: "_.assignInWith(object, sources, [customizer])",
    example:
      "function customizer(objValue, srcValue) {\n  return _.isUndefined(objValue) ? srcValue : objValue;\n}\n var defaults = _.partialRight(_.assignInWith, customizer);\n defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });\n// => { 'a': 1, 'b': 2 }"
  },
  {
    title: "_.assignWith(object, sources, [customizer])",
    example:
      "function customizer(objValue, srcValue) {\n  return _.isUndefined(objValue) ? srcValue : objValue;\n}\n var defaults = _.partialRight(_.assignWith, customizer);\n defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });\n// => { 'a': 1, 'b': 2 }"
  },
  {
    title: "_.at(object, [paths])",
    example:
      "var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };\n _.at(object, ['a[0].b.c', 'a[1]']);\n// => [3, 4]"
  },
  {
    title: "_.create(prototype, [properties])",
    example:
      "function Shape() {\n  this.x = 0;\n  this.y = 0;\n}\n function Circle() {\n  Shape.call(this);\n}\n Circle.prototype = _.create(Shape.prototype, {\n  'constructor': Circle\n});\n var circle = new Circle;\ncircle instanceof Circle;\n// => true\n circle instanceof Shape;\n// => true"
  },
  {
    title: "_.defaults(object, [sources])",
    example:
      "_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });\n// => { 'a': 1, 'b': 2 }"
  },
  {
    title: "_.defaultsDeep(object, [sources])",
    example:
      "_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });\n// => { 'a': { 'b': 2, 'c': 3 } }"
  },
  {
    title: "_.findKey(object, [predicate=_.identity])",
    example:
      "var users = {\n  'barney':  { 'age': 36, 'active': true },\n  'fred':    { 'age': 40, 'active': false },\n  'pebbles': { 'age': 1,  'active': true }\n};\n _.findKey(users, function(o) { return o.age < 40; });\n// => 'barney' (iteration order is not guaranteed)\n // The `_.matches` iteratee shorthand.\n_.findKey(users, { 'age': 1, 'active': true });\n// => 'pebbles'\n // The `_.matchesProperty` iteratee shorthand.\n_.findKey(users, ['active', false]);\n// => 'fred'\n // The `_.property` iteratee shorthand.\n_.findKey(users, 'active');\n// => 'barney'"
  },
  {
    title: "_.findLastKey(object, [predicate=_.identity])",
    example:
      "var users = {\n  'barney':  { 'age': 36, 'active': true },\n  'fred':    { 'age': 40, 'active': false },\n  'pebbles': { 'age': 1,  'active': true }\n};\n _.findLastKey(users, function(o) { return o.age < 40; });\n// => returns 'pebbles' assuming `_.findKey` returns 'barney'\n // The `_.matches` iteratee shorthand.\n_.findLastKey(users, { 'age': 36, 'active': true });\n// => 'barney'\n // The `_.matchesProperty` iteratee shorthand.\n_.findLastKey(users, ['active', false]);\n// => 'fred'\n // The `_.property` iteratee shorthand.\n_.findLastKey(users, 'active');\n// => 'pebbles'"
  },
  {
    title: "_.forIn(object, [iteratee=_.identity])",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.forIn(new Foo, function(value, key) {\n  console.log(key);\n});\n// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed)."
  },
  {
    title: "_.forInRight(object, [iteratee=_.identity])",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.forInRight(new Foo, function(value, key) {\n  console.log(key);\n});\n// => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'."
  },
  {
    title: "_.forOwn(object, [iteratee=_.identity])",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.forOwn(new Foo, function(value, key) {\n  console.log(key);\n});\n// => Logs 'a' then 'b' (iteration order is not guaranteed)."
  },
  {
    title: "_.forOwnRight(object, [iteratee=_.identity])",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.forOwnRight(new Foo, function(value, key) {\n  console.log(key);\n});\n// => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'."
  },
  {
    title: "_.functions(object)",
    example:
      "function Foo() {\n  this.a = _.constant('a');\n  this.b = _.constant('b');\n}\n Foo.prototype.c = _.constant('c');\n _.functions(new Foo);\n// => ['a', 'b']"
  },
  {
    title: "_.functionsIn(object)",
    example:
      "function Foo() {\n  this.a = _.constant('a');\n  this.b = _.constant('b');\n}\n Foo.prototype.c = _.constant('c');\n _.functionsIn(new Foo);\n// => ['a', 'b', 'c']"
  },
  {
    title: "_.get(object, path, [defaultValue])",
    example:
      "var object = { 'a': [{ 'b': { 'c': 3 } }] };\n _.get(object, 'a[0].b.c');\n// => 3\n _.get(object, ['a', '0', 'b', 'c']);\n// => 3\n _.get(object, 'a.b.c', 'default');\n// => 'default'"
  },
  {
    title: "_.has(object, path)",
    example:
      "var object = { 'a': { 'b': 2 } };\nvar other = _.create({ 'a': _.create({ 'b': 2 }) });\n _.has(object, 'a');\n// => true\n _.has(object, 'a.b');\n// => true\n _.has(object, ['a', 'b']);\n// => true\n _.has(other, 'a');\n// => false"
  },
  {
    title: "_.hasIn(object, path)",
    example:
      "var object = _.create({ 'a': _.create({ 'b': 2 }) });\n _.hasIn(object, 'a');\n// => true\n _.hasIn(object, 'a.b');\n// => true\n _.hasIn(object, ['a', 'b']);\n// => true\n _.hasIn(object, 'b');\n// => false"
  },
  {
    title: "_.invert(object)",
    example:
      "var object = { 'a': 1, 'b': 2, 'c': 1 };\n _.invert(object);\n// => { '1': 'c', '2': 'b' }"
  },
  {
    title: "_.invertBy(object, [iteratee=_.identity])",
    example:
      "var object = { 'a': 1, 'b': 2, 'c': 1 };\n _.invertBy(object);\n// => { '1': ['a', 'c'], '2': ['b'] }\n _.invertBy(object, function(value) {\n  return 'group' + value;\n});\n// => { 'group1': ['a', 'c'], 'group2': ['b'] }"
  },
  {
    title: "_.invoke(object, path, [args])",
    example:
      "var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };\n _.invoke(object, 'a[0].b.c.slice', 1, 3);\n// => [2, 3]"
  },
  {
    title: "_.keys(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.keys(new Foo);\n// => ['a', 'b'] (iteration order is not guaranteed)\n _.keys('hi');\n// => ['0', '1']"
  },
  {
    title: "_.keysIn(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.keysIn(new Foo);\n// => ['a', 'b', 'c'] (iteration order is not guaranteed)"
  },
  {
    title: "_.mapKeys(object, [iteratee=_.identity])",
    example:
      "_.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {\n  return key + value;\n});\n// => { 'a1': 1, 'b2': 2 }"
  },
  {
    title: "_.mapValues(object, [iteratee=_.identity])",
    example:
      "var users = {\n  'fred':    { 'user': 'fred',    'age': 40 },\n  'pebbles': { 'user': 'pebbles', 'age': 1 }\n};\n _.mapValues(users, function(o) { return o.age; });\n// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)\n // The `_.property` iteratee shorthand.\n_.mapValues(users, 'age');\n// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)"
  },
  {
    title: "_.merge(object, [sources])",
    example:
      "var object = {\n  'a': [{ 'b': 2 }, { 'd': 4 }]\n};\n var other = {\n  'a': [{ 'c': 3 }, { 'e': 5 }]\n};\n _.merge(object, other);\n// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }"
  },
  {
    title: "_.mergeWith(object, sources, customizer)",
    example:
      "function customizer(objValue, srcValue) {\n  if (_.isArray(objValue)) {\n    return objValue.concat(srcValue);\n  }\n}\n var object = { 'a': [1], 'b': [2] };\nvar other = { 'a': [3], 'b': [4] };\n _.mergeWith(object, other, customizer);\n// => { 'a': [1, 3], 'b': [2, 4] }"
  },
  {
    title: "_.omit(object, [paths])",
    example:
      "var object = { 'a': 1, 'b': '2', 'c': 3 };\n _.omit(object, ['a', 'c']);\n// => { 'b': '2' }"
  },
  {
    title: "_.omitBy(object, [predicate=_.identity])",
    example:
      "var object = { 'a': 1, 'b': '2', 'c': 3 };\n _.omitBy(object, _.isNumber);\n// => { 'b': '2' }"
  },
  {
    title: "_.pick(object, [paths])",
    example:
      "var object = { 'a': 1, 'b': '2', 'c': 3 };\n _.pick(object, ['a', 'c']);\n// => { 'a': 1, 'c': 3 }"
  },
  {
    title: "_.pickBy(object, [predicate=_.identity])",
    example:
      "var object = { 'a': 1, 'b': '2', 'c': 3 };\n _.pickBy(object, _.isNumber);\n// => { 'a': 1, 'c': 3 }"
  },
  {
    title: "_.result(object, path, [defaultValue])",
    example:
      "var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };\n _.result(object, 'a[0].b.c1');\n// => 3\n _.result(object, 'a[0].b.c2');\n// => 4\n _.result(object, 'a[0].b.c3', 'default');\n// => 'default'\n _.result(object, 'a[0].b.c3', _.constant('default'));\n// => 'default'"
  },
  {
    title: "_.set(object, path, value)",
    example:
      "var object = { 'a': [{ 'b': { 'c': 3 } }] };\n _.set(object, 'a[0].b.c', 4);\nconsole.log(object.a[0].b.c);\n// => 4\n _.set(object, ['x', '0', 'y', 'z'], 5);\nconsole.log(object.x[0].y.z);\n// => 5"
  },
  {
    title: "_.setWith(object, path, value, [customizer])",
    example:
      "var object = {};\n _.setWith(object, '[0][1]', 'a', Object);\n// => { '0': { '1': 'a' } }"
  },
  {
    title: "_.toPairs(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.toPairs(new Foo);\n// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)"
  },
  {
    title: "_.toPairsIn(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.toPairsIn(new Foo);\n// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)"
  },
  {
    title: "_.transform(object, [iteratee=_.identity], [accumulator])",
    example:
      "_.transform([2, 3, 4], function(result, n) {\n  result.push(n *= n);\n  return n % 2 == 0;\n}, []);\n// => [4, 9]\n _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {\n  (result[value] || (result[value] = [])).push(key);\n}, {});\n// => { '1': ['a', 'c'], '2': ['b'] }"
  },
  {
    title: "_.unset(object, path)",
    example:
      "var object = { 'a': [{ 'b': { 'c': 7 } }] };\n_.unset(object, 'a[0].b.c');\n// => true\n console.log(object);\n// => { 'a': [{ 'b': {} }] };\n _.unset(object, ['a', '0', 'b', 'c']);\n// => true\n console.log(object);\n// => { 'a': [{ 'b': {} }] };"
  },
  {
    title: "_.update(object, path, updater)",
    example:
      "var object = { 'a': [{ 'b': { 'c': 3 } }] };\n _.update(object, 'a[0].b.c', function(n) { return n * n; });\nconsole.log(object.a[0].b.c);\n// => 9\n _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });\nconsole.log(object.x[0].y.z);\n// => 0"
  },
  {
    title: "_.updateWith(object, path, updater, [customizer])",
    example:
      "var object = {};\n _.updateWith(object, '[0][1]', _.constant('a'), Object);\n// => { '0': { '1': 'a' } }"
  },
  {
    title: "_.values(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.values(new Foo);\n// => [1, 2] (iteration order is not guaranteed)\n _.values('hi');\n// => ['h', 'i']"
  },
  {
    title: "_.valuesIn(object)",
    example:
      "function Foo() {\n  this.a = 1;\n  this.b = 2;\n}\n Foo.prototype.c = 3;\n _.valuesIn(new Foo);\n// => [1, 2, 3] (iteration order is not guaranteed)"
  },
  {
    title: "_.camelCase([string=''])",
    example:
      "_.camelCase('Foo Bar');\n// => 'fooBar'\n _.camelCase('--foo-bar--');\n// => 'fooBar'\n _.camelCase('__FOO_BAR__');\n// => 'fooBar'"
  },
  {
    title: "_.camelCase([string=''])",
    example:
      "_.camelCase('Foo Bar');\n// => 'fooBar'\n _.camelCase('--foo-bar--');\n// => 'fooBar'\n _.camelCase('__FOO_BAR__');\n// => 'fooBar'"
  },
  {
    title: "_.capitalize([string=''])",
    example: "_.capitalize('FRED');\n// => 'Fred'"
  },
  {
    title: "_.deburr([string=''])",
    example: "_.deburr('deja vu');\n// => 'deja vu'"
  },
  {
    title: "_.endsWith([string=''], [target], [position=string.length])",
    example:
      "_.endsWith('abc', 'c');\n// => true\n _.endsWith('abc', 'b');\n// => false\n _.endsWith('abc', 'b', 2);\n// => true"
  },
  {
    title: "_.escape([string=''])",
    example:
      "_.escape('fred, barney, & pebbles');\n// => 'fred, barney, &amp; pebbles'"
  },
  {
    title: "_.escapeRegExp([string=''])",
    example:
      "_.escapeRegExp('[lodash](https://lodash.com/)');\n// => '[lodash](https://lodash.com/)'"
  },
  {
    title: "_.kebabCase([string=''])",
    example:
      "_.kebabCase('Foo Bar');\n// => 'foo-bar'\n _.kebabCase('fooBar');\n// => 'foo-bar'\n _.kebabCase('__FOO_BAR__');\n// => 'foo-bar'"
  },
  {
    title: "_.lowerCase([string=''])",
    example:
      "_.lowerCase('--Foo-Bar--');\n// => 'foo bar'\n _.lowerCase('fooBar');\n// => 'foo bar'\n _.lowerCase('__FOO_BAR__');\n// => 'foo bar'"
  },
  {
    title: "_.lowerFirst([string=''])",
    example:
      "_.lowerFirst('Fred');\n// => 'fred'\n _.lowerFirst('FRED');\n// => 'fRED'"
  },
  {
    title: "_.pad([string=''], [length=0], [chars=' '])",
    example:
      "_.pad('abc', 8);\n// => '  abc   '\n _.pad('abc', 8, '_-');\n// => '_-abc_-_'\n _.pad('abc', 3);\n// => 'abc'"
  },
  {
    title: "_.padEnd([string=''], [length=0], [chars=' '])",
    example:
      "_.padEnd('abc', 6);\n// => 'abc   '\n _.padEnd('abc', 6, '_-');\n// => 'abc_-_'\n _.padEnd('abc', 3);\n// => 'abc'"
  },
  {
    title: "_.padStart([string=''], [length=0], [chars=' '])",
    example:
      "_.padStart('abc', 6);\n// => '   abc'\n _.padStart('abc', 6, '_-');\n// => '_-_abc'\n _.padStart('abc', 3);\n// => 'abc'"
  },
  {
    title: "_.parseInt(string, [radix=10])",
    example:
      "_.parseInt('08');\n// => 8\n _.map(['6', '08', '10'], _.parseInt);\n// => [6, 8, 10]"
  },
  {
    title: "_.repeat([string=''], [n=1])",
    example:
      "_.repeat('*', 3);\n// => '***'\n _.repeat('abc', 2);\n// => 'abcabc'\n _.repeat('abc', 0);\n// => ''"
  },
  {
    title: "_.replace([string=''], pattern, replacement)",
    example: "_.replace('Hi Fred', 'Fred', 'Barney');\n// => 'Hi Barney'"
  },
  {
    title: "_.snakeCase([string=''])",
    example:
      "_.snakeCase('Foo Bar');\n// => 'foo_bar'\n _.snakeCase('fooBar');\n// => 'foo_bar'\n _.snakeCase('--FOO-BAR--');\n// => 'foo_bar'"
  },
  {
    title: "_.split([string=''], separator, [limit])",
    example: "_.split('a-b-c', '-', 2);\n// => ['a', 'b']"
  },
  {
    title: "_.startCase([string=''])",
    example:
      "_.startCase('--foo-bar--');\n// => 'Foo Bar'\n _.startCase('fooBar');\n// => 'Foo Bar'\n _.startCase('__FOO_BAR__');\n// => 'FOO BAR'"
  },
  {
    title: "_.startsWith([string=''], [target], [position=0])",
    example:
      "_.startsWith('abc', 'a');\n// => true\n _.startsWith('abc', 'b');\n// => false\n _.startsWith('abc', 'b', 1);\n// => true"
  },
  {
    title: "_.toUpper([string=''])",
    example:
      "_.toUpper('--foo-bar--');\n// => '--FOO-BAR--'\n _.toUpper('fooBar');\n// => 'FOOBAR'\n _.toUpper('__foo_bar__');\n// => '__FOO_BAR__'"
  },
  {
    title: "_.trim([string=''], [chars=whitespace])",
    example:
      "_.trim('  abc  ');\n// => 'abc'\n _.trim('-_-abc-_-', '_-');\n// => 'abc'\n _.map(['  foo  ', '  bar  '], _.trim);\n// => ['foo', 'bar']"
  },
  {
    title: "_.trimEnd([string=''], [chars=whitespace])",
    example:
      "_.trimEnd('  abc  ');\n// => '  abc'\n _.trimEnd('-_-abc-_-', '_-');\n// => '-_-abc'"
  },
  {
    title: "_.trimStart([string=''], [chars=whitespace])",
    example:
      "_.trimStart('  abc  ');\n// => 'abc  '\n _.trimStart('-_-abc-_-', '_-');\n// => 'abc-_-'"
  },
  {
    title: "_.truncate([string=''], [options={}])",
    example:
      "_.truncate('hi-diddly-ho there, neighborino');\n// => 'hi-diddly-ho there, neighbo...'\n _.truncate('hi-diddly-ho there, neighborino', {\n  'length': 24,\n  'separator': ' '\n});\n// => 'hi-diddly-ho there,...'\n _.truncate('hi-diddly-ho there, neighborino', {\n  'length': 24,\n  'separator': /,? +/\n});\n// => 'hi-diddly-ho there...'\n _.truncate('hi-diddly-ho there, neighborino', {\n  'omission': ' [...]'\n});\n// => 'hi-diddly-ho there, neig [...]'"
  },
  {
    title: "_.unescape([string=''])",
    example:
      "_.unescape('fred, barney, &amp; pebbles');\n// => 'fred, barney, & pebbles'"
  },
  {
    title: "_.upperCase([string=''])",
    example:
      "_.upperCase('--foo-bar');\n// => 'FOO BAR'\n _.upperCase('fooBar');\n// => 'FOO BAR'\n _.upperCase('__foo_bar__');\n// => 'FOO BAR'"
  },
  {
    title: "_.upperFirst([string=''])",
    example:
      "_.upperFirst('fred');\n// => 'Fred'\n _.upperFirst('FRED');\n// => 'FRED'"
  },
  {
    title: "_.words([string=''], [pattern])",
    example:
      "_.words('fred, barney, & pebbles');\n// => ['fred', 'barney', 'pebbles']\n _.words('fred, barney, & pebbles', /[^, ]+/g);\n// => ['fred', 'barney', '&', 'pebbles']"
  },
  {
    title: "_.attempt(func, [args])",
    example:
      "// Avoid throwing errors for invalid selectors.\nvar elements = _.attempt(function(selector) {\n  return document.querySelectorAll(selector);\n}, '>_>');\n if (_.isError(elements)) {\n  elements = [];\n}"
  },
  {
    title: "_.attempt(func, [args])",
    example:
      "// Avoid throwing errors for invalid selectors.\nvar elements = _.attempt(function(selector) {\n  return document.querySelectorAll(selector);\n}, '>_>');\n if (_.isError(elements)) {\n  elements = [];\n}"
  },
  {
    title: "_.bindAll(object, methodNames)",
    example:
      "var view = {\n  'label': 'docs',\n  'click': function() {\n    console.log('clicked ' + this.label);\n  }\n};\n _.bindAll(view, ['click']);\njQuery(element).on('click', view.click);\n// => Logs 'clicked docs' when clicked."
  },
  {
    title: "_.cond(pairs)",
    example:
      "var func = _.cond([\n  [_.matches({ 'a': 1 }),           _.constant('matches A')],\n  [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],\n  [_.stubTrue,                      _.constant('no match')]\n]);\n func({ 'a': 1, 'b': 2 });\n// => 'matches A'\n func({ 'a': 0, 'b': 1 });\n// => 'matches B'\n func({ 'a': '1', 'b': '2' });\n// => 'no match'"
  },
  {
    title: "_.conforms(source)",
    example:
      "var objects = [\n  { 'a': 2, 'b': 1 },\n  { 'a': 1, 'b': 2 }\n];\n _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));\n// => [{ 'a': 1, 'b': 2 }]"
  },
  {
    title: "_.constant(value)",
    example:
      "var objects = _.times(2, _.constant({ 'a': 1 }));\n console.log(objects);\n// => [{ 'a': 1 }, { 'a': 1 }]\n console.log(objects[0] === objects[1]);\n// => true"
  },
  {
    title: "_.defaultTo(value, defaultValue)",
    example:
      "_.defaultTo(1, 10);\n// => 1\n _.defaultTo(undefined, 10);\n// => 10"
  },
  {
    title: "_.flow([funcs])",
    example:
      "function square(n) {\n  return n * n;\n}\n var addSquare = _.flow([_.add, square]);\naddSquare(1, 2);\n// => 9"
  },
  {
    title: "_.flowRight([funcs])",
    example:
      "function square(n) {\n  return n * n;\n}\n var addSquare = _.flowRight([square, _.add]);\naddSquare(1, 2);\n// => 9"
  },
  {
    title: "_.identity(value)",
    example:
      "var object = { 'a': 1 };\n console.log(_.identity(object) === object);\n// => true"
  },
  {
    title: "_.iteratee([func=_.identity])",
    example:
      "var users = [\n  { 'user': 'barney', 'age': 36, 'active': true },\n  { 'user': 'fred',   'age': 40, 'active': false }\n];\n // The `_.matches` iteratee shorthand.\n_.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));\n// => [{ 'user': 'barney', 'age': 36, 'active': true }]\n // The `_.matchesProperty` iteratee shorthand.\n_.filter(users, _.iteratee(['user', 'fred']));\n// => [{ 'user': 'fred', 'age': 40 }]\n // The `_.property` iteratee shorthand.\n_.map(users, _.iteratee('user'));\n// => ['barney', 'fred']\n // Create custom iteratee shorthands.\n_.iteratee = _.wrap(_.iteratee, function(iteratee, func) {\n  return !_.isRegExp(func) ? iteratee(func) : function(string) {\n    return func.test(string);\n  };\n});\n _.filter(['abc', 'def'], /ef/);\n// => ['def']"
  },
  {
    title: "_.matches(source)",
    example:
      "var objects = [\n  { 'a': 1, 'b': 2, 'c': 3 },\n  { 'a': 4, 'b': 5, 'c': 6 }\n];\n _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));\n// => [{ 'a': 4, 'b': 5, 'c': 6 }]"
  },
  {
    title: "_.matchesProperty(path, srcValue)",
    example:
      "var objects = [\n  { 'a': 1, 'b': 2, 'c': 3 },\n  { 'a': 4, 'b': 5, 'c': 6 }\n];\n _.find(objects, _.matchesProperty('a', 4));\n// => { 'a': 4, 'b': 5, 'c': 6 }"
  },
  {
    title: "_.method(path, [args])",
    example:
      "var objects = [\n  { 'a': { 'b': _.constant(2) } },\n  { 'a': { 'b': _.constant(1) } }\n];\n _.map(objects, _.method('a.b'));\n// => [2, 1]\n _.map(objects, _.method(['a', 'b']));\n// => [2, 1]"
  },
  {
    title: "_.methodOf(object, [args])",
    example:
      "var array = _.times(3, _.constant),\n    object = { 'a': array, 'b': array, 'c': array };\n _.map(['a[2]', 'c[0]'], _.methodOf(object));\n// => [2, 0]\n _.map([['a', '2'], ['c', '0']], _.methodOf(object));\n// => [2, 0]"
  },
  {
    title: "_.mixin([object=lodash], source, [options={}])",
    example:
      "function vowels(string) {\n  return _.filter(string, function(v) {\n    return /[aeiou]/i.test(v);\n  });\n}\n _.mixin({ 'vowels': vowels });\n_.vowels('fred');\n// => ['e']\n _('fred').vowels().value();\n// => ['e']\n _.mixin({ 'vowels': vowels }, { 'chain': false });\n_('fred').vowels();\n// => ['e']"
  },
  { title: "_.noConflict()", example: "var lodash = _.noConflict();" },
  {
    title: "_.noop()",
    example: "_.times(2, _.noop);\n// => [undefined, undefined]"
  },
  {
    title: "_.nthArg([n=0])",
    example:
      "var func = _.nthArg(1);\nfunc('a', 'b', 'c', 'd');\n// => 'b'\n var func = _.nthArg(-2);\nfunc('a', 'b', 'c', 'd');\n// => 'c'"
  },
  {
    title: "_.over([iteratees=[_.identity]])",
    example:
      "var func = _.over([Math.max, Math.min]);\n func(1, 2, 3, 4);\n// => [4, 1]"
  },
  {
    title: "_.overEvery([predicates=[_.identity]])",
    example:
      "var func = _.overEvery([Boolean, isFinite]);\n func('1');\n// => true\n func(null);\n// => false\n func(NaN);\n// => false"
  },
  {
    title: "_.overSome([predicates=[_.identity]])",
    example:
      "var func = _.overSome([Boolean, isFinite]);\n func('1');\n// => true\n func(null);\n// => true\n func(NaN);\n// => false"
  },
  {
    title: "_.property(path)",
    example:
      "var objects = [\n  { 'a': { 'b': 2 } },\n  { 'a': { 'b': 1 } }\n];\n _.map(objects, _.property('a.b'));\n// => [2, 1]\n _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');\n// => [1, 2]"
  },
  {
    title: "_.propertyOf(object)",
    example:
      "var array = [0, 1, 2],\n    object = { 'a': array, 'b': array, 'c': array };\n _.map(['a[2]', 'c[0]'], _.propertyOf(object));\n// => [2, 0]\n _.map([['a', '2'], ['c', '0']], _.propertyOf(object));\n// => [2, 0]"
  },
  {
    title: "_.range([start=0], end, [step=1])",
    example:
      "_.range(4);\n// => [0, 1, 2, 3]\n _.range(-4);\n// => [0, -1, -2, -3]\n _.range(1, 5);\n// => [1, 2, 3, 4]\n _.range(0, 20, 5);\n// => [0, 5, 10, 15]\n _.range(0, -4, -1);\n// => [0, -1, -2, -3]\n _.range(1, 4, 0);\n// => [1, 1, 1]\n _.range(0);\n// => []"
  },
  {
    title: "_.rangeRight([start=0], end, [step=1])",
    example:
      "_.rangeRight(4);\n// => [3, 2, 1, 0]\n _.rangeRight(-4);\n// => [-3, -2, -1, 0]\n _.rangeRight(1, 5);\n// => [4, 3, 2, 1]\n _.rangeRight(0, 20, 5);\n// => [15, 10, 5, 0]\n _.rangeRight(0, -4, -1);\n// => [-3, -2, -1, 0]\n _.rangeRight(1, 4, 0);\n// => [1, 1, 1]\n _.rangeRight(0);\n// => []"
  },
  {
    title: "_.runInContext([context=root])",
    example:
      "_.mixin({ 'foo': _.constant('foo') });\n var lodash = _.runInContext();\nlodash.mixin({ 'bar': lodash.constant('bar') });\n _.isFunction(_.foo);\n// => true\n_.isFunction(_.bar);\n// => false\n lodash.isFunction(lodash.foo);\n// => false\nlodash.isFunction(lodash.bar);\n// => true\n // Create a suped-up `defer` in Node.js.\nvar defer = _.runInContext({ 'setTimeout': setImmediate }).defer;"
  },
  {
    title: "_.stubArray()",
    example:
      "var arrays = _.times(2, _.stubArray);\n console.log(arrays);\n// => [[], []]\n console.log(arrays[0] === arrays[1]);\n// => false"
  },
  {
    title: "_.stubFalse()",
    example: "_.times(2, _.stubFalse);\n// => [false, false]"
  },
  {
    title: "_.stubObject()",
    example:
      "var objects = _.times(2, _.stubObject);\n console.log(objects);\n// => [{}, {}]\n console.log(objects[0] === objects[1]);\n// => false"
  },
  {
    title: "_.stubString()",
    example: "_.times(2, _.stubString);\n// => ['', '']"
  },
  {
    title: "_.stubTrue()",
    example: "_.times(2, _.stubTrue);\n// => [true, true]"
  },
  {
    title: "_.times(n, [iteratee=_.identity])",
    example:
      "_.times(3, String);\n// => ['0', '1', '2']\n  _.times(4, _.constant(0));\n// => [0, 0, 0, 0]"
  },
  {
    title: "_.toPath(value)",
    example:
      "_.toPath('a.b.c');\n// => ['a', 'b', 'c']\n _.toPath('a[0].b.c');\n// => ['a', '0', 'b', 'c']"
  },
  {
    title: "_.uniqueId([prefix=''])",
    example:
      "_.uniqueId('contact_');\n// => 'contact_104'\n _.uniqueId();\n// => '105'"
  },
  {
    title: "_.toLower([string=''])",
    example:
      "_.toLower('--Foo-Bar--');\n// => '--foo-bar--'\n _.toLower('fooBar');\n// => 'foobar'\n _.toLower('__FOO_BAR__');\n// => '__foo_bar__'"
  },
  {
    title: "_.template([string=''], [options={}])",
    example:
      "// Use the \"interpolate\" delimiter to create a compiled template.\nvar compiled = _.template('hello <%= user %>!');\ncompiled({ 'user': 'fred' });\n// => 'hello fred!'"
  }
];
