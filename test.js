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

let truncatePath = require('.');

let file = '/your/very/very/long/path-to/my-modules/test-module/node_modules/chokidar/types/index.d.ts';

console.log("Local File:", truncatePath(file, 10));


let url="https://cdn.pixabay.com/download/audio/2023/04/03/audio_047543feac.mp3?filename=relaxing-145038.mp3&g-recaptcha-response=03ADUVZwAycgBPXsjVYD2lKzJNgZQdBFMeLK9oxBVA4hBSQCFriPkOOwz19q6Copxw41AnkONr4T7ekwCTWZDBcON-fbd4AHSJ6Xnro0h19hM5LaXXak6G6_o-y5pHhB3Bcx_mUMOa2dPQP4lXUBKqPN4idD2-e8G7UdhEHGcy-XT_8EIANjVtyHFO7SHHji4WkGGnJGYdQVQlKlXMkYrwrIAe7ILR6aWWFu-f42tbghVh3vmm9ls1tv1yKJEWqblV4bNL-CaK47yLiAZt7PlruJELzcsb6yVpDTOtLK4hznimRAUPKzl9DN7t7GrRacprKIAsJBnHZF4zCiqClxJsAPdXsJCI66frxZ0VP5EQvg19ur7mwoJC9rwhMRPuLh8fgulTt8i1svGn6zMsj737VwlP3ak4kYlWftnV1H2N3Wt9u1GsUSbVtVAMi2RKYg0vRIB_Pgzq2aEV7GtWcGJ87qTk-wLiQ_FIo9qg_XJaRBUnwEhThnxql95hpp7e1AMsD0LUlksSBuWmGvI2lJbj0Z3FIKWQnwU78Q&remote_template=1";

console.log("Long URL:", truncatePath(url));