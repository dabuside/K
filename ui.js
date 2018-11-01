/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


const statusElement = document.getElementById('status');
const messageElement = document.getElementById('message');
const resultElement = document.getElementById('result');
const canvasElement = document.getElementById('canvas-container');

export function isTraining() {
    statusElement.innerText = 'Training...';
}

export function showTestResults(predictions) {
    resultElement.innerText = 'Emmmm, I guess it is ' + predictions;
}

export function showDefaultResults() {
    statusElement.innerText = 'Write your number...';
    resultElement.innerText = '';
}

export function showCanvas() {
    canvasElement.style.display = 'block';
}
