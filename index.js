// Copyright 2021 Anthony Mugendi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');

function truncate_path(filePath, length = 20) {

    let file = path.basename(filePath),
        dir = path.dirname(filePath),
        arr = dir.split(path.sep).map(p => p == '' ? '/' : p),
        len = 0,
        p, i, arr2;

    length = length - file.length;

    for (i in arr) {
        if (len >= length) break;
        p = arr[i];
        len += p.length;
    }

    arr2 = arr.slice(0, i)
    if (i < arr.length - 1) arr2.push('[..]');
    arr2.push(file);

    console.log(arr2);
    filePath = path.join(...arr2)

    return filePath;

}


module.exports = truncate_path;