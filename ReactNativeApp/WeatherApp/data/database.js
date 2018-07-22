var horizontalstatus = {
    rainy: {
        icon : '../img/rainy.png'
    },
    cloud: {
        icon : '../img/cloudy.jpg'
    },
    thunderstorm: {
        icon : '../img/thunderstorms.png'
    },
    sunny: {
        icon : '../img/sunny.png'
    }
};
var horizontalFlatListData =[
    {
        hour: "1 AM",
        statusIcon: horizontalstatus.rainy,
        status: "rainy",
        degrees: 27
    },
    {
        hour: "2 AM",
        statusIcon: horizontalstatus.cloud,
        status: "cloud",
        degrees: 26
    },
    {
        hour: "3 AM",
        statusIcon: horizontalstatus.cloud,
        status: "cloud",
        degrees: 25
    },
    {
        hour: "4 AM",
        statusIcon: horizontalstatus.thunderstorm,
        status: "thunderstorm",
        degrees: 20
    },
    {
        hour: "5 AM",
        statusIcon: horizontalstatus.sunny,
        status: "sunny",
        degrees: 32
    }, 
    {
        hour: "6 AM",
        statusIcon: horizontalstatus.cloud,
        status: "cloud",
        degrees: 35
    }, 
    {
        hour: "7 AM",
        statusIcon: horizontalstatus.thunderstorm,
        status: "thunderstorm",
        degrees: 36
    }, 
    {
        hour: "8 AM",
        statusIcon: horizontalstatus.cloud,
        status: "cloud",
        degrees: 37
    }, 
    {
        hour: "9 AM",
        statusIcon: horizontalstatus.sunny,
        status: "sunny",
        degrees: 36
    }, 
    {
        hour: "10 AM",
        statusIcon: horizontalstatus.sunny,
        status: "sunny",
        degrees: 33
    }
];

export {horizontalstatus};
export {horizontalFlatListData};