let tempf = 100
while (true) {
    console.log("temperature: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (tempf > 60) {
        light.setPixelColor(0, light.rgb(250, 0, 0))
        light.setPixelColor(1, light.rgb(250, 0, 0))
        light.setPixelColor(2, light.rgb(250, 0, 0))
        light.setPixelColor(3, light.rgb(250, 0, 0))
        light.setPixelColor(4, light.rgb(250, 0, 0))
        light.setPixelColor(5, light.rgb(250, 0, 0))
        light.setPixelColor(6, light.rgb(250, 0, 0))
        light.setPixelColor(7, light.rgb(250, 0, 0))
        light.setPixelColor(8, light.rgb(250, 0, 0))
        light.setPixelColor(9, light.rgb(250, 0, 0))
    } else if (70 < tempf && tempf > 40) {
        light.setPixelColor(0, light.rgb(0, 250, 0))
        light.setPixelColor(1, light.rgb(0, 250, 0))
        light.setPixelColor(2, light.rgb(0, 250, 0))
        light.setPixelColor(3, light.rgb(0, 250, 0))
        light.setPixelColor(4, light.rgb(0, 250, 0))
        light.setPixelColor(5, light.rgb(0, 250, 0))
        light.setPixelColor(6, light.rgb(0, 250, 0))
        light.setPixelColor(7, light.rgb(0, 250, 0))
        light.setPixelColor(8, light.rgb(0, 250, 0))
        light.setPixelColor(9, light.rgb(0, 250, 0))
    } else {
        light.setPixelColor(0, light.rgb(0, 0, 250))
        light.setPixelColor(1, light.rgb(0, 0, 250))
        light.setPixelColor(2, light.rgb(0, 0, 250))
        light.setPixelColor(3, light.rgb(0, 0, 250))
        light.setPixelColor(4, light.rgb(0, 0, 250))
        light.setPixelColor(5, light.rgb(0, 0, 250))
        light.setPixelColor(6, light.rgb(0, 0, 250))
        light.setPixelColor(7, light.rgb(0, 0, 250))
        light.setPixelColor(8, light.rgb(0, 0, 250))
        light.setPixelColor(9, light.rgb(0, 0, 250))
    }
    
}
