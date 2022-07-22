/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "}") {
			if (stack.pop() !== "{") {
				return false
			}
		} else if (s[i] === ")") {
			if (stack.pop() !== "(") {
				return false
			}
		} else if (s[i] === "]") {
			if (stack.pop() !== "[") {
				return false
			}
		}

		if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
			stack.push(s[i])
		}
	}
	if (stack.length > 0) {
		return false
	}
	return true;
};
