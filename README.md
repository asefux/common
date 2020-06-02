
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
};
```

## usage
```javascript

const { uuid, bn, isUuid } = require('@asefux/common');

const aBigNumber = bn('12345678909876543212345678901234566788');

const aTimeuuid = uuid.v1();

isUuid(aTimeuuid, 1) ? console.log('is uuid of version 1') : console.log('is not uuid of version 1')

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
</tbody>
</table>
