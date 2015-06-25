
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


Template.background.helpers({

	'bgImage': function() {
		
		var bgs =  ["http://peek.space/art/city-lights-asia-night-8k/full.jpg",
					"http://peek.space/art/earth-lights-lrg/full.jpg",
					"http://peek.space/art/peek-space-img-5/full.jpg",
					"http://peek.space/art/peek-space-img-3/full.jpg", 
					"http://peek.space/art/peek-space-img-20/full.jpg",
					"http://peek.space/art/peek-space-img-23/full.jpg",
					"http://peek.space/art/peek-space-img-25/full.jpg",
					"http://peek.space/art/peek-space-img-24/full.jpg",
					"http://peek.space/art/peek-space-img-28/full.jpg", 
					"http://peek.space/art/peek-space-img-9/full.jpg", 
					"http://peek.space/art/iss040e74022-lrg/full.jpg",
					];
					
		var x = getRandomInt(0, bgs.length-1);

		return bgs[x];	
	},

});