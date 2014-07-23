app.directive('fastNg', function () {
    var MYAPP = React.createClass({
        displayName: 'MYAPP',
        render:function(){
            return React.DOM.span(null, this.props.framework);

        }
    });
    return {
        restrict: 'E',
        scope: {
            framework:'='
        },
        link: function (scope, el, attrs) {
            scope.$watch('framework', function(newValue, oldValue){
                React.renderComponent(
                    MYAPP({framework: newValue}),
                    el[0]
                );
            })
        }
    };
});