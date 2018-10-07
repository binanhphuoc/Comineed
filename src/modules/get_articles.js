axios = require('axios');

get_location = (text, data, i, cb) => {
    axios.post('http://localhost:2204/', text, {
    headers: {'Content-Type': 'raw'}})
    .then(function (response) {
        response.data = response.data.slice(response.data.indexOf("{"))
        var obj = JSON.parse(`${response.data}`);
        var result = ((obj.cities[0]===undefined)?'':(obj.cities[0]+' '))+((obj.countries[0]===undefined)?'':obj.countries[0]);
        //console.log(result);
        cb(result, data, i);
    })
    .catch(function (error) {
        //console.log(error.response);
    });
}

get_articles = () => {
    axios.get('https://newsapi.org/v2/everything?q=natural+disaster+victims&apiKey=8281d920a6634e01a0e2a16c75d1fb8f')
    .then((response) => {
        var obj = JSON.parse(`${response.data}`);
        console.log(obj)
    }).catch((error)=>{
        console.log(error.response);
    })
}

axios.get('https://newsapi.org/v2/everything?q=natural+disaster+victims&apiKey=8281d920a6634e01a0e2a16c75d1fb8f')
.then((response) => {
    var articles = response.data.articles;
    var data = {};
    for (i = 0; i < articles.length; i++)
    {
        get_location(articles[i].title, data, i, (result, data, t) => {
            //console.log(result);
            if (data[t] === undefined)
                data[t] = '';
            data[t] = data[t]+result+' '; 
            //console.log(data[t]); 
        });
        get_location((articles[i].description), data, i, (result, data, t) => {
            if (data[t] === undefined)
                data[t] = '';
            data[t] = data[t]+result+' ';
            console.log(t+' '+data[t]); 
        });
        //console.log(result);
    }
    
}).catch((error)=>{
    console.log(error.response);
})

module.exports = {
    get_location
}