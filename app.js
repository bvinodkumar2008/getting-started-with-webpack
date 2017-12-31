//Asynchronously loading the depend.js
require(['./depend.js'], function(depend) {
    document.body.appendChild(depend[0]);
});