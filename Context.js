$(document).ready(function() {
    var firends = ['Ethan', 'Schuyler', 'Will', 'Sonni', 'Jeremiah'];
    var location = ['Hall','Kitchen','Bedroom','Attic','Den','Living Room','Bathroom','Garage','Swimming Pool','Shed'];
    var weapon = ['Water bottle', 'Dental Floss', 'Katana','Shotgun','Tommahawk','Curtains','Wristwatch','Sugar Spoon','Lightsaber','Great Axe','Toothpick','Garden hose','Mouse Trap','Breakfast Cereal','Fruit Bat','Banana','Stool','Model Airplane','Cell Phone','Hand Grenade'];

    for (var i=0; i<100; i+=1) {
        $('body').append('<h3 id="'+i+'">Accusation ' + (i+1) + '</h3>');

        function indexes (event) {
            var $tar = event.target.id
            var iF = $tar%5;
            var iL = $tar%10;
            var iW = $tar%20;
            function display() {
                var FRIEND_NAME = firends[iF];
                var LOCATION_NAME = location[iL];
                var WEAPON_NAME = weapon[iW];
                alert('I accuse ' + FRIEND_NAME + ', with the '+ WEAPON_NAME +' in the '+ LOCATION_NAME +'!');
            };
            display();
        };
    };
    $(this).click(indexes);
});


