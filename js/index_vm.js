var vm = {
    a: ko.observable(1),
    onbtn2clked: function () {
        let oldvalue = vm.a();
        vm.a(oldvalue + 1);
    }
};


ko.applyBindings(vm);