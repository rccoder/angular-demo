/**
 * Created by rccoder on 2016/1/11.
 */
function ViewsAndTemplates($scope) {
    $scope.peoples = [
        {
            name: "rccoder",
            age: 19
        },
        {
            name: "nickname",
            age: 20
        }
    ];

    $scope.orderProp = 'age';
};

