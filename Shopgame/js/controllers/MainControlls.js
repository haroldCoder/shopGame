app.controller('maincontroller',['$scope',function($scope){
    $scope.games =  [
        {
            title: "Assassins cred 4",
            cover: "http://www.esferalibros.com/uploads/imagenes/libros/principal/201310/principal-el-arte-de-assassin-s-creed-iv-black-flag-es.jpg",
            descript: "Open world and adventure game in which you will be in the past as a murderer"
        },
        {
            title: "Mortal Kombat 11",
            cover: "https://image.api.playstation.com/vulcan/ap/rnd/202009/0123/bF1qmEL5RM6aMfL0oLcxRe8B.png",
            descript: "Sanginary fighting game in which you can play in story or tower mode"
        },
        {
            title: "Def Jam Fight For",
            cover: "https://http2.mlstatic.com/D_NQ_NP_969644-MLM28299522736_102018-O.jpg",
            descript: "street fighting game in which you can play story mode and vs mode"
        },{
            title: "Ride 3",
            cover: "https://image.api.playstation.com/cdn/EP4356/CUSA10100_00/3CfQThdCzXZEDqGI4aoWe0Csp8PVpVZt.png",
            descript: "motorcycle racing game in which as you play you can get different motorcycles"
        },
        {
            title: "Forza Horizon 4",
            cover: "https://store-images.s-microsoft.com/image/apps.38727.13644046779257471.1e2d89dd-a800-4e95-8dae-3c4213950c11.a5f0adff-bf68-4415-bf74-457d991d3ce7",
            descript: "Car race in which you should be the best and for this you will have hundreds of sports cars available."
        }
    ];
    $scope.games2 = [
        {
            title: "Gta Vice City",
            cover: "https://static.wikia.nocookie.net/esgta/images/0/0f/Grand_Theft_Auto_Vice_City.JPG/revision/latest?cb=20161127222945",
            descript: "Open world game in which the character is from the city of Miami"
        },
        {
            title: "Teken 7",
            cover: "https://image.api.playstation.com/cdn/EP0700/CUSA06014_00/4mtrKoz8Hy44mXJT82LvFagv3GGMAGpk.png?w=440",
            descript: "fighting game in which you can choose any character for combat"
        },
        {
            title: "Spider-Man",
            cover: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png",
            descript: "game based on the spiderman movie where you will have to do exactly the same using your powers"
        },
        {
            title: "Red dead Redemption 2",
            cover: "https://i.pinimg.com/originals/ee/3f/8e/ee3f8ed0c8288f4ccc3b24ccb64c1878.jpg",
            descript: "open world game which is located in the old west you can play story or free mode"
        },
        {
            title: "Call OF Duty WW2",
            cover: "https://static.wikia.nocookie.net/cod/images/3/36/Codww2.jpg/revision/latest/top-crop/width/360/height/450?cb=20190318214417&path-prefix=es",
            descript: "game set in 1939-1945 the second world war you will play as a soldier your mission to defeat the Germans"
        }
    ];
    $scope.color = "uuu";
    $scope.palette = [
       {
           color: "#F3F41A"
       }
    ];
}]);