# JSMicro - Is Error

### **`isError(object)`**

Check does the given Javascript Object (array, object, string, etc) is an error.

### **`isNotError(object)`**

Check does the given Javascript Error (array, object, string, etc) is not an error.

## Browser Usage

```bash
bower install --save jsmicro-is-error
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-error/index.js">
<script type="text/javascript">
    var obj = new Error();
    var nbr = 200;

    // Available in the window object.
    isError(obj);      // true
    isError(nbr);      // false
    isNotError(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-error
```

```js
const obj = require('@jsmicro/is-error');

// Available in the global object.
isError(new Error()); // true
isError(23322333); // false
isNotError(23234); // true

// Also available in the export object.
obj.isError(new Error()); // true
obj.isError(23322333); // false
obj.isNotError(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
