var page = require('webpage').create(),
    server = 'http://192.168.11.200/phantomjs/form/signup.php?',
    data = 'username=kiet&password=123456';

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});