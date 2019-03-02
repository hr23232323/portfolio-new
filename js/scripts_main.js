function make_life() {
    d3.csv('../res/life_resume.csv')
        .then(function (data) {
            // data is loaded!
            var div = d3.select("#life-resume")
            var svg = div.append("svg")
            var margin = {
                top: 10,
                bottom: 10,
                left: 20,
                right: 20
            }
            var width = document.getElementById('life-resume').offsetWidth;
            var height = document.getElementById('life-resume').offsetHeight;

            // SVG attributes
            svg.attr("width", (width - margin.left - margin.right))
                .attr("height", (height - margin.top - margin.bottom))
                .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

            // Make chart






        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })

}

make_life()
