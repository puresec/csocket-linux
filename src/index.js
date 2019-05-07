const path = require('path');
try {
  module.exports = require('node-gyp-build')(path.join(__dirname, '..'));
} catch (e) { // For webpack applications
  module.exports = require('node-gyp-build')(path.join(process.env.LAMBDA_TASK_ROOT, 'src', 'csocket-linux'));
}
