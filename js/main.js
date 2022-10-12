const spec = "js/chart.vg.json";
vegaEmbed('#chart', spec).then(function(result) {
}).catch(console.error);

const spec2 = "js/choropleth_map.vg.json";
vegaEmbed('#map', spec2).then(function(result) {
}).catch(console.error);

const spec3 = "js/butterfly_chart.vg.json";
vegaEmbed('#butterfly', spec3).then(function(result) {
}).catch(console.error);

const spec4 = "js/heatmap.vg.json";
vegaEmbed('#heatmap', spec4).then(function(result) {
}).catch(console.error);

const spec5 = "js/bubble.vg.json";
vegaEmbed('#bubble', spec5).then(function(result) {
}).catch(console.error);

function mainSelectFunc() {
    var country = document.getElementById("mainSelect").value;
    var selects = document.getElementsByName("CountrySelect_COUNTRY");
    var selectList = Array.prototype.slice.call(selects);
    selectList.forEach(element => {
        element.value = country;
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    });
    document.getElementById("subtitle").innerHTML = `Death statistics for ${['Netherlands', 'UK', 'USA'].includes(country) ? 'the' : ''} ${country}`
  }