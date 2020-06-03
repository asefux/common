
# common

`npm install --save @asefux/common`

```javascript
module.exports = {
  uuid, // npm module uuid
  BN, // bignumber.js
  bn, // function to create a bignumber
  getTimeFromTimeuuid, // get milliseconds from timeuuid ( uuid.v1 )
  isUuid, // check if a string is a valid uuid format of specified version. default version is 4
  R, // ramda library
  object: { flatten, unflatten } // flattens object to single level, unflattens single level object
  string: { compile, toSymbolKey } // compiles a string from template
};
```

## usage
```javascript

const { uuid, bn, isUuid, string: { compile } } = require('@asefux/common');

const aBigNumber = bn('12345678909876543212345678901234566788');

const aTimeuuid = uuid.v1();

isUuid(aTimeuuid, 1) ? console.log('is uuid of version 1') : console.log('is not uuid of version 1');

const aTemplateString = 'Hello ${name}';

const aString = compile({ template: aTemplateString, info: { name: 'World' } }); 

console.log(aString); // will output: Hello World

```


## changes

<table>
<thead>
<tr>
<th>Version</th><th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.1.0</td><td>`isUuid(string, version)` - checks if string is a valid uuid format of given version, default to 4 </td>
</tr>
<tr>
<td>1.2.0</td><td>Ramda export as R, object.flatten/object.unflatten</td>
</tr>
<tr>
<td>1.2.1</td><td>readme & license update</td>
</tr>
<tr>
<td>1.2.2</td><td>cosmetics</td>
</tr>
<tr>
<td>1.3.0</td><td>simple string template</td>
</tr>
<tr>
<td>1.4.0-a1</td><td>

<ul>
<li>string.toSymbolKey(v)</li>
</ul>

</td>
</tr>
</tbody>
</table>
