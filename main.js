(async a=>{const e=await fetch("https://api.weatherapi.com/v1/forecast.json?key=af2f62539eb34d9ab3e195115232611&q=Valencia&days=5",{mode:"cors"}),o=await e.json();console.log(o)})();