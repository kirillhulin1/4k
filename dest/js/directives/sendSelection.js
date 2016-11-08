app.directive("sendSelection",["$window",function($window){
    return {
        "restrict": "A",
        "link": function(scope, element){

            element.bind("keypress",function(e){
                if (e.ctrlKey && e.keyCode==10) {
                    console.log(getSelection());
                }


            });

            function getSelection() {
                var text = "";
                if (window.getSelection) {
                    text = window.getSelection().toString();
                }
                else {
                    text = document.selection.createRange().text;
                }
                return text;
            }

            function getChar(e) {
                if(e.which == null) {
                    if (e.keyCode<32) return null;
                    return String.fromCharCode(e.keyCode);
                }
                if(e.which != 0 && e.charCode != 0) {
                    if (e.which<32) return null;
                    return String.fromCharCode(e.which);
                }
                return null;
            }
        }
    }
}]);
