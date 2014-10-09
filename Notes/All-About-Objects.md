// ALL ABOUT OBJEX

### All About Objects

```javascript
var anObject = {
    aProperty: 'a value',
    aMethod: function aMethod(){
    }
}
```

### Object-Oriented vs Procedural

This is procedural code:

```javascript
var ones = [ 'zero', 'one', 'two', 'three', 'four' ];

function toEnglish(value){
  return ones[value];
}

toEnglish(1) + toEnglish(0) + toEnglish(1);
```

This is Object-Oriented code:

```javascript
Number.prototype._English = {
    '0,9': [ 'zero', 'one', 'two', /* . . . */ 'nine' ],
    /* . . . */
};

Number.prototype.toEnglish = function(){
    for ( key in this._English ){
        var range = key.split(',').map(Number);

        if ( this.valueOf() >= range[0] && this.valueOf() <= range[1] ){
            return this._English[key][this.valueOf()];
        }
    }
};

(1).toEnglish() + (0).toEnglish() + (1).toEnglish();
```
