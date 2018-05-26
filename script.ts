class Mylocation {
	
	constructor(public title: string, public city: string, public zip: number, public address: string, public teaserimg: string, public creationDate: Date) {}
	render(){
	document.querySelector('.hugo').innerHTML += `
	<section id="bloglocation">
			<div class="container">
	            <div class="row">
	                <div class="col-md-8 col-md-offset-2 text-center">
	                    <h2 class="sec-title">Places</h2>
	                </div>
	            </div>
	            <div class="row">
		<div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
                <div class="card-header text-center">
                    ${this.title}
                </div>
                <img class="card-img-top" style="max-width: 100%" src="img/${this.teaserimg}" alt="${this.title}">
                <div class="card-body">
                    <p>${this.address}, ${this.zip} ${this.city}</p>
                    <hr><p>Created: ${this.creationDate}</p>
                </div>
            </div>
        </div>
      </div>
	</div>
</section>`
};
};

let church = new Mylocation('St. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', "charles-church.jpg", new Date('2017-02-08 08:30'));
let zoo = new Mylocation('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'zoo-vienna.jpg', new Date('2018-04-08 10:30'));


class Restaurants extends Mylocation {
	constructor(title: string, city: string, zip: number, address: string, teaserimg: string, creationDate: Date, public tel: string, public kindof: string, public site: string){
	super(title, city, zip, address, teaserimg, creationDate);
	this.tel = tel,
	this.kindof = kindof,
	this.site = site
	};
	render(){
		document.querySelector('.hugo').innerHTML += `
		<section id="bloglocation">
			<div class="container">
	            <div class="row">
	                <div class="col-md-8 col-md-offset-2 text-center">
	                    <h2 class="sec-title">Restanrants</h2>
	                </div>
	            </div>
	            <div class="row">
				<div class="col-lg-3 col-md-6 col-sm-12">
		            <div class="card">
		                <div class="card-header text-center">
		                    ${this.title}
		                </div>
		                <img class="card-img-top" style="max-width: 100%" src="img/${this.teaserimg}" alt="${this.title}">
		                <div class="card-body">
		                    <p>${this.address}, ${this.zip} ${this.city}</p>
		                    <p>${this.tel}</p>
		                    <p>${this.site}</p>
		                    <p>Type: ${this.kindof}</p>
		                    <hr><p>Created: ${this.creationDate}</p>
		                </div>
		            </div>
		        </div>
		      </div>
		    </div>
		 </section>`

	};
};


let thai = new Restaurants('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'lemon-leaf.png', new Date('2018-05-04 18:00'), '+43(1)5812308', 'thai', 'http://www.lemonleaf.at');
let sixta = new Restaurants('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'sixta.png', new Date('2018-01-04 17:00'), '+43 1 58 528 56 / +43 1 58 528 56', 'wienerisch', 'http://www.sixta-restaurant.at/');



class Events extends Mylocation {
	constructor(title, city, zip, address, teaserimg, creationDate, public eventDate: string, public eventTime: string, public price: string){
		super(title, city, zip, address, teaserimg, creationDate);
		this.eventDate = eventDate,
		this.eventTime = eventTime,
		this.price = price
	};
	render(){
		document.querySelector('.hugo').innerHTML += `
		<section id="bloglocation">
			<div class="container">
	            <div class="row">
	                <div class="col-md-8 col-md-offset-2 text-center">
	                    <h2 class="sec-title">Events</h2>
	                </div>
	            </div>
	            <div class="row">
					<div class="col-lg-3 col-md-6 col-sm-12">
			            <div class="card">
			                <div class="card-header text-center">
			                    ${this.title}
			                </div>
			                <img class="card-img-top" style="max-width: 100%" src="img/${this.teaserimg}" alt="${this.title}">
			                <div class="card-body">
			                    <p>${this.address}, ${this.zip} ${this.city}</p>
			                    <p>${this.eventDate} ${this.eventTime}</p>
			                    <p>${this.price}</p>
			                    <hr><p>Created: ${this.creationDate}</p>
			                </div>
			            </div>
			        </div>
		      	</div>
		    </div>
		 </section>`
	};
};


let kris = new Events('Kris Kristofferson', 'Vienna', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'kris-kristofferson.jpg', new Date('2017-12-18 19:00'), 'Fr., 15.06.2018', '20:00', '58,50 EUR');
let lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'lenny-kravitz.jpg', new Date('2017-12-14 13:00'), 'Sat, 09.06.2018', '19:30', '€ 47,80');
let blogs: any[] = [church, zoo, thai, sixta, kris, lenny];






function displayBlog(arr: any[]){
    arr.forEach((blog:any)=>{
        blog.render();
    });
};
displayBlog(blogs);

