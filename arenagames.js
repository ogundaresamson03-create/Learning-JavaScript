const houseMatesPoints = [
    {name: "Chimson", points: 66}, {name: "Mercedes", points: 105}, {name: "Gerard", points: 44},
    {name: "Sheba", points: 57},{name: "Tram", points: 33},{name: "Oyin", points:46},
    {name: "Sultex", points:62},{name: "Goddessa", points:83},{name: "Ricky", points:8},
    {name: "Abi", points:70},{name: "Martins ", points: 92},{name: "Kamsy", points:70},
    {name: "Barry", points:61},{name: "Bells", points:54},{name: "Neche", points:84},
    {name: "Cassie", points:84},{name: "Temi", points:56},{name: "Araga", points: 76},
    {name: "Bluethopia", points: 54},{name: "Keivo", points:95},{name: "Flora", points:35},
    {name: "Yusuf", points:64},{name: "Aikou", points:90},{name: "Nomy", points:34}

 ];
const leaderBoard = [...houseMatesPoints].sort((a,b) => b.points - a.points);
console.log(leaderBoard);