const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback, time) => {
    console.log(messageDelay());

    setTimeout (() => console.log( `Mars temperature is: ${callback} degree Celsius`), time);
}


// crie a função sendMarsTemperature abaixo

sendMarsTemperature(getMarsTemperature(),messageDelay() ); // imprime "Mars temperature is: 20 degree Celsius", por exemplo