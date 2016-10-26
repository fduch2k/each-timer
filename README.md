# each-timer

![Build Status](https://img.shields.io/travis/fduch2k/each-timer.svg)
![Coverage](https://img.shields.io/coveralls/fduch2k/each-timer.svg)
![Downloads](https://img.shields.io/npm/dt/each-timer.svg)
![npm version](https://img.shields.io/npm/v/each-timer.svg)
![dependencies](https://img.shields.io/david/fduch2k/each-timer.svg)
![dev dependencies](https://img.shields.io/david/dev/fduch2k/each-timer.svg)
![License](https://img.shields.io/npm/l/each-timer.svg)

Elegant timer interface

## Getting Started

Install it via npm:

```shell
npm install each-timer
```

Include in your project:

```javascript
var each-timer = require("each-timer");
```

## Functions

<dl>
<dt><a href="#isFunction">isFunction(param)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if passed param is function</p>
</dd>
<dt><a href="#Timer">Timer(timingFn)</a></dt>
<dd><p>Timer constructor</p>
</dd>
<dt><a href="#each">each(interval)</a> ⇒ <code>Object</code></dt>
<dd><p>Return timer constructors for specified interval</p>
</dd>
</dl>

<a name="isFunction"></a>

## isFunction(param) ⇒ <code>Boolean</code>
Check if passed param is function

**Kind**: global function

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| param | <code>Any</code> | Any variable to check |

<a name="Timer"></a>

## Timer(timingFn)
Timer constructor

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| timingFn | <code>function</code> | Function that get passsed time interval and return it as milliseconds |


* [Timer(timingFn)](#Timer)
    * [.perform(Callback)](#Timer+perform) ⇒ <code>[Timer](#Timer)</code>
    * [.stop()](#Timer+stop) ⇒ <code>[Timer](#Timer)</code>
    * [.restart()](#Timer+restart) ⇒ <code>[Timer](#Timer)</code>

<a name="Timer+perform"></a>

### timer.perform(Callback) ⇒ <code>[Timer](#Timer)</code>
Set callback function for executing by timer

**Kind**: instance method of <code>[Timer](#Timer)</code>
**Returns**: <code>[Timer](#Timer)</code> - Object itself

| Param | Type | Description |
| --- | --- | --- |
| Callback | <code>function</code> | function. If it returns false execution of timer will be canceled. @see [restart](restart) |

<a name="Timer+stop"></a>

### timer.stop() ⇒ <code>[Timer](#Timer)</code>
Stop timer execution

**Kind**: instance method of <code>[Timer](#Timer)</code>
**Returns**: <code>[Timer](#Timer)</code> - Object itself
<a name="Timer+restart"></a>

### timer.restart() ⇒ <code>[Timer](#Timer)</code>
Restart timer execution flow

**Kind**: instance method of <code>[Timer](#Timer)</code>
**Returns**: <code>[Timer](#Timer)</code> - Object itself
<a name="each"></a>

## each(interval) ⇒ <code>Object</code>
Return timer constructors for specified interval

**Kind**: global function
**Returns**: <code>Object</code> - Object with factory functions for interval units (milliseconds, seconds, minutes and hours)

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>Integer</code> | Time interval for timer |

## License

[MIT](https://opensource.org/licenses/MIT)
