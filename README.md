
# Why

Sometimes you need to display truncated paths in your application. This module does just that. It also works perfectly for urls too!

```javascript
let truncatePath = require('truncate-path');

let file = '/home/mugz/projects/node/my-modules/test-module/node_modules/chokidar/types/index.d.ts';

console.log("Local File:", truncatePath(file, 10));


let url="https://cdn.pixabay.com/download/audio/2023/04/03/audio_047543feac.mp3?filename=relaxing-145038.mp3&g-recaptcha-response=03ADUVZwAycgBPXsjVYD2lKzJNgZQdBFMeLK9oxBVA4hBSQCFriPkOOwz19q6Copxw41AnkONr4T7ekwCTWZDBcON-fbd4AHSJ6Xnro0h19hM5LaXXak6G6_o-y5pHhB3Bcx_mUMOa2dPQP4lXUBKqPN4idD2-e8G7UdhEHGcy-XT_8EIANjVtyHFO7SHHji4WkGGnJGYdQVQlKlXMkYrwrIAe7ILR6aWWFu-f42tbghVh3vmm9ls1tv1yKJEWqblV4bNL-CaK47yLiAZt7PlruJELzcsb6yVpDTOtLK4hznimRAUPKzl9DN7t7GrRacprKIAsJBnHZF4zCiqClxJsAPdXsJCI66frxZ0VP5EQvg19ur7mwoJC9rwhMRPuLh8fgulTt8i1svGn6zMsj737VwlP3ak4kYlWftnV1H2N3Wt9u1GsUSbVtVAMi2RKYg0vRIB_Pgzq2aEV7GtWcGJ87qTk-wLiQ_FIo9qg_XJaRBUnwEhThnxql95hpp7e1AMsD0LUlksSBuWmGvI2lJbj0Z3FIKWQnwU78Q&remote_template=1";

console.log("Long URL:", truncatePath(url));
```

This outputs:

```text
Local File: /your/[..]/index.d.ts

Long URL: //cdn.pixabay.com/download/audio/[..]/audio_047543feac.mp3

```

## API

### `truncatePath( file, [length] )`

The default length is 40 characters.

Please note that the path generated is not always the length defined but the closest (complete) path that can be generated.

By **complete path**, we mean that directory and file names are not split midway.

As such **"/this/that/those/file.ext"** can never be **"/this/that/th[...]/fi.ext"** or something like that. Because that would be a very ugly path indeed!

Enjoy!
