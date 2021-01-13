'use strict';

const Test = { name: '[object Test]' };

Test.expect = (result) => {
	return {
		toBe(expected) {
			if(result !== expected) {
				throw new Error(`${result} is not equal to ${expected} 😕`)
			}
    },
    toBeTruthy() {
			if(result !== true) {
				throw new Error(`Expected to receive true, but receives ${result} 😕`)
			}
    },
    toBeFalsy() {
			if(result !== false) {
				throw new Error(`Expected to receive false, but receives ${result} 😕`)
			}
		}
	}
};

Test.test = Test.it = (title, callback) => {
  try {
    callback()
    console.info(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
};

module.exports = { Test }

