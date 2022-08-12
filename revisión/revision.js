const fetchData = async () => {
  try {
    const apiKey = 'd17c4da9d768c4396eb985cc56c7ce9e';

    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?aqi=no&key=c6e97ae1a84040dcaeb143253221008&q=london`
    );
    const data = await res.json();

    console.log(data);

    console.log('hola');
  } catch (error) {
    console.log('error');
  }
};

fetchData();
