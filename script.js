let weather = {
    "apiKey": "1a37580f10798b78e5e52070fa1e5c1a",

    
    fetchWeather: function(city) {

        fetch
        ("https://api.openweathermap.org/data/2.5/forecast?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=> this.displayWeather(data)).catch(err => alert("Please enter a valid city name"));
        
        
    },

    displayWeather: function(data) {
        const{name} = data.city; //extract the name of the city object
        const{icon, description} = data.list[1].weather[0]; //extract the icon and description
        const{temp,humidity} = data.list[0].main; //extract the temp and humidity info
        const{speed}=data.list[3].wind; //extract the speed info
        
        var tempfixed = temp.toFixed(1); 
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Current Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = tempfixed + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')" //gives a background image depending the name of the city
        

        tarih();



        for(i=0; i<=32; i+=8)
        {
            const{icon, description} = data.list[i].weather[0]; //extract the icon and description
            const{temp} = data.list[i].main; //extract the temp and humidity info
            const{dt_txt}=data.list[i];

            var tempfixed = temp.toFixed(1);


            let d = String(new Date(dt_txt));

            d=d.slice(0,3);

            console.log(d.slice(0,3));


            if(i==0)
            {

            document.querySelector(".day").innerText = d;
            document.querySelector(".temp").innerText = tempfixed + "°C";
            document.querySelector(".smalldescription").innerText = description;
            document.querySelector(".smallicon").src = "https://openweathermap.org/img/wn/" + icon +".png";
    
            }
            else if(i==8)
            {
            document.querySelector(".day2").innerText = d;
            document.querySelector(".temp2").innerText = tempfixed + "°C";
            document.querySelector(".smalldescription2").innerText = description;
            document.querySelector(".smallicon2").src = "https://openweathermap.org/img/wn/" + icon +".png";
            }
            else if(i==16)
            {
            document.querySelector(".day3").innerText = d;
            document.querySelector(".temp3").innerText = tempfixed + "°C";
            document.querySelector(".smalldescription3").innerText = description;
            document.querySelector(".smallicon3").src = "https://openweathermap.org/img/wn/" + icon +".png";
            }
            else if(i==24)
            {
            document.querySelector(".day4").innerText = d;
            document.querySelector(".temp4").innerText = tempfixed + "°C";
            document.querySelector(".smalldescription4").innerText = description;
            document.querySelector(".smallicon4").src = "https://openweathermap.org/img/wn/" + icon +".png";
            }
            else if(i==32)
            {
            document.querySelector(".day5").innerText = d;
            document.querySelector(".temp5").innerText = tempfixed + "°C";
            document.querySelector(".smalldescription5").innerText = description;
            document.querySelector(".smallicon5").src = "https://openweathermap.org/img/wn/" + icon +".png";
            }
            

        }

        
    },

    search: function()
    {
        this.fetchWeather(document.querySelector(".find").value);
        
        
    },

};

document.querySelector(".searchbox button").addEventListener("click", function(){

    weather.search(); //this will automatically get the content of the searchbar and search for it

});

//this will search when we press the enter key
document.querySelector(".find").addEventListener("keyup", function(event){
    if(event.key=="Enter")
    {

        weather.search();
        
        tarih();

    }
});

weather.fetchWeather("İstanbul");


function tarih()
{

    var date = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    let current_date = date.toLocaleString("en-US", options);


    document.querySelector(".date").innerText = current_date;
}

