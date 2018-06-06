var push = require('git-push');

push('./', { name: 'dist', url: 'https://github.com/lzear/sandbox-b.git', branch: 'test-git-push' }, function() {
  console.log('Done!');
});
