<!--
 Copyright 2021 Anthony Mugendi
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

# Why

Sometimes you need to display truncated paths in your application. This module does just that.


```javascript

    let truncatePath = require('.');
    
    let file = '/home/mugz/projects/node/my-modules/test-module/node_modules/chokidar/types/index.d.ts';
    
    console.log(truncatePath(file));

```

This outputs ```/home/mugz/projects/[..]/index.d.ts```

## API
### ```truncatePath( file, [length] )```

The default length is 20 characters.

Please note that the path generated is not always the length defined but the closest (complete) path that can be generated.

By **complete path**, we mean that directory and file names are not split midway.

As such **"/this/that/those/file.ext"** can never be **"/this/that/th[...]/fi.ext"** or something like that. Because that would be a very ugly path indeed!

Enjoy!