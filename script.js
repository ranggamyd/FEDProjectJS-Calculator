document.addEventListener("DOMContentLoaded", function (event) {
    let result = document.getElementById("result");

    let clear = document.querySelector("#clear");
    let history = document.querySelector("#history");
    let equalTo = document.querySelector("#equalTo");
    let del = document.querySelector("#del");

    let btn = document.querySelectorAll("#btn");

    let init = "";

    btn.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            let text = this.innerHTML;
            init += text;
            result.value = init.replace(/\s+/g, "");
            // console.log(init);
        });
    });

    /*equal to button action*/
    equalTo.addEventListener("click", function () {
        if (result.value != "") {
            history.innerHTML = result.value;
            result.value = eval(result.value);
            init = eval(result.value);
        } else {
            alert("Please enter any number");
        }
    });

    /*clear all number*/
    clear.addEventListener("click", function () {
        result.value = "";
        init = "";
    });

    /*delete number*/
    del.addEventListener("click", function () {
        result.value = result.value.substring(
            0,
            result.value.length - 1
        );
        init = result.value;
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});