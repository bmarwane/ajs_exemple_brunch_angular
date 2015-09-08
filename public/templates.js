(function() {
    var module;

    try {
        // Get current templates module
        module = angular.module('templates');
    } catch (error) {
        // Or create a new one
        module = angular.module('templates', []);
    }

    module.run(["$templateCache", function($templateCache) {
        $templateCache.put('app/views/page.html', '<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1>Prise de notes</h1>\n\n    <form ng-submit=\"addNote()\">\n      <input type=\"text\" class=\"form-control\" ng-model=\"noteInput\" />\n    </form>\n\n  </div>\n</div>\n\n<br/>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" ng-repeat=\"note in noteList\">{{note.text}}</li>\n      </ul>\n\n  </div>\n</div>\n');
    }]);
})();

//# sourceMappingURL=templates.js.map