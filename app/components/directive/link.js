/**
 * Created by kent1 on 8/2/2016.
 */

function link() {
    return {
        link: function (scope, elem) {
            elem.dropdownHover();
        }
    };
}

export default angular.module('directives.link', [])
    .directive('a', link)