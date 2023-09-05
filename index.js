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
const isUrl = require('is-url');

function truncate_path(filePath, length = 40) {
    let file,
        dir,
        arr,
        sep,
        is_url = false;

    if (isUrl(filePath)) {
        is_url = true;

        // parse url
        let o = new URL(filePath);

        dir = [o.hostname, path.dirname(o.pathname)].join('');
        file = o.pathname.split('/').pop();
        sep = '/';
    } else {
        file = path.basename(filePath);
        dir = path.dirname(filePath);
        sep = path.sep;
    }

    // make into array
    arr = dir
        .split(sep)
        .map((p) => (p == '' ? '/' : p))
        .reduce((a, b) => {
            let l = a.length ? a.length - 1 : 0;
            let v = a[l] || null;

            if (v == sep) {
                a[l] = a[l] + b;
            } else {
                a.push(b);
            }

            return a;
        }, []);

    let len = 0,
        n = 1,
        p,
        arr2;

    length = length - file.length;

    // console.log(length);

    for (p of arr) {
        if (len >= length) break;
        len += p.length;
        n++;
    }

    arr2 = arr.slice(0, n);
    
    if (n < arr.length - 1) arr2.push('[..]');
    arr2.push(file);

    filePath = path.join(...arr2);

    if (is_url) {
        filePath = '//' + filePath;
    }


    return filePath;
}

module.exports = truncate_path;
