# lodash_mocha

## install

```
$ npm i lodash_mocha
```

## Document

* https://cdn.rawgit.com/zz860926/se107a/4412dff4/exercise/02-npm/02-jsdoc/docs/-_.html

## Test

```
$ mocha

  lodash
    join
      √ _.join(array) equalTo [ 1 | 2 | 3 ]
      √ _.join(array) equalTo [ 1, 2, 3 ]

  lodash
    reverse
      √ _.reverse(['a', 'b', 'c']) equalTo [ 'c','b','a' ]
      √ _.reverse(['1', '2', '3']) equalTo [ '3','2','1']
      √ _.reverse(['1', '2', '3']) equalTo [ '1', '2', '3']

  lodash
    tail
      √ _.tail(['a']) equalTo [ '' ]
      √ _.tail(['a', 'b', 'c', 'd']) equalTo [ 'b', 'c', 'd' ]
      √ _.tail(['1', '2', '3', '4']) equalTo [ '2', '3', '4']
      √ _.tail(['1', '2', '3', '4']) notEqualTo [ '1', '2', '3', '4' ]


  9 passing (15ms)
```



