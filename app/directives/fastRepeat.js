app.directive('fastRepeat', function(){
    return{
        restrict: 'E',
        scope:{
            data: '='
        },
        replace : true,
        link:function(scope, el, attrs){
            var REPEAT = React.createClass({
                displayName: 'REPEAT',
                render: function() {
                    var data = this.props.data;
                    if (attrs.sort) {
                        if (attrs.sort === 'desc') {
                            data.sort(function (a, b) {
                                return a < b;
                            });
                        }
                        if (attrs.sort === 'asc') {
                            data.sort(function (a, b) {
                                return a > b;
                            });
                        }
                    }
                    var rows = data.map(function(datum) {
                        return (
                            React.DOM[attrs.children]( null, datum)
                        );
                    });
                    return (
                        React.DOM[attrs.parent](null,
                            rows
                        )
                    );
                }
            });
            scope.$watch('data', function(newValue, oldValue){
                React.renderComponent(
                    REPEAT({data:newValue}),
                    el[0]
                );
            })
        }
    }
});