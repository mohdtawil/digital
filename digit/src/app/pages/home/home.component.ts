import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesComponent } from 'src/app/components/movies/movies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoviesJson = [
    
    {
      type: 'upcoming',
      adult: false,
      backdrop_path: "/2n95p9isIi1LYTscTcGytlI4zYd.jpg",
      genre_ids: [
      18,
      53,
      80
      ],
      id: 799876,
      original_language: "en",
      original_title: "The Outfit",
      overview: "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
      popularity: 1561.57,
      poster_path: "/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
      release_date: "2022-02-25",
      title: "The Outfit",
      video: false,
      vote_average: 7,
      vote_count: 196
    },
    {
      type: 'upcoming',
      adult: false,
      backdrop_path: "/geYUecpFI2AonDLhjyK9zoVFcMv.jpg",
      genre_ids: [
      16,
      28,
      12,
      9648
      ],
      id: 810693,
      original_language: "ja",
      original_title: "Random movie..",
      overview: "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
      popularity: 276.797,
      poster_path: "/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
      release_date: "2021-12-24",
      title: "Jujutsu Kaisen 0",
      video: false,
      vote_average: 7.7,
      vote_count: 130
    },
    {
      type: 'upcoming',
      adult: false,
      backdrop_path: "/9Fv41b6nEBGrSprFDVpO6GA94Wi.jpg",
      genre_ids: [
      12,
      28,
      878,
      53
      ],
      id: 507086,
      original_language: "en",
      original_title: "Jurassic World Dominion",
      overview: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      popularity: 212.096,
      poster_path: "/w4c0GTpmEQ1CZQNHndTv2PPgf2p.jpg",
      release_date: "2022-06-01",
      title: "Jurassic World Dominion",
      video: false,
      vote_average: 0,
      vote_count: 0
    },
   
    {
      type: 'top_rated',
      adult: false,
      backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      genre_ids: [
      18,
      80
      ],
      id: 278,
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      popularity: 55.745,
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      release_date: "1994-09-23",
      title: "The Shawshank Redemption",
      video: false,
      vote_average: 8.7,
      vote_count: 21383
    },
    {
      type: 'top_rated',
      adult: false,
      backdrop_path: "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
      genre_ids: [
      35,
      18,
      10749
      ],
      id: 19404,
      original_language: "hi",
      original_title: "micheal wnedw nwdw",
      overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      popularity: 16.479,
      poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      release_date: "1995-10-20",
      title: "Dilwale Dulhania Le Jayenge",
      video: false,
      vote_average: 8.7,
      vote_count: 3622
    },
    {
      type: 'top_rated',
      adult: false,
      backdrop_path: "/AbgEQO2mneCSOc8CSnOMa8pBS8I.jpg",
      genre_ids: [
      18,
      80
      ],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 66.818,
      poster_path: "/n6PvMAKL66gavIFxOyRB6czAeQO.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.7,
      vote_count: 15940
    },
    
    {
      type: 'popular',
      adult: false,
      backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      genre_ids: [
      28,
      878,
      35,
      10751,
      12
      ],
      id: 675353,
      original_language: "en",
      original_title: "Sonic the Hedgehog 2",
      overview: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      popularity: 9974.171,
      poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      release_date: "2022-03-30",
      title: "Sonic the Hedgehog 2",
      video: false,
      vote_average: 7.7,
      vote_count: 1262
    },
    {
      type: 'popular',
      adult: false,
      backdrop_path: "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
      genre_ids: [
      80,
      9648,
      53
      ],
      id: 414906,
      original_language: "en",
      original_title: "The Batman",
      overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      popularity: 3815.084,
      poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      release_date: "2022-03-01",
      title: "The Batman",
      video: false,
      vote_average: 7.8,
      vote_count: 4474
    },
    {
      type: 'popular',
      adult: false,
      backdrop_path: "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
      genre_ids: [
      28,
      12
      ],
      id: 335787,
      original_language: "en",
      original_title: "Uncharted",
      overview: "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
      popularity: 4085.072,
      poster_path: "/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
      release_date: "2022-02-10",
      title: "Uncharted",
      video: false,
      vote_average: 7.2,
      vote_count: 1865
    },
  ]
  formData: FormGroup = new FormGroup({});
  movies: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }

   populateFormData() {
    this.formData = this.formBuilder.group({
      type: ['all'],
      searchQuery: ['']
    })
  }
  onSearchChange(searchValue: any): void {  
    console.log(searchValue.value);
    var movies: any[] = [];
    var fromDataValue = this.formData.value;

    this.allMoviesJson.forEach((movie) => {
      if(fromDataValue.type == movie.type && movie.original_title.toLowerCase().search(searchValue.value.toLowerCase()) != -1) {
        movies.push(movie)
      } else if(fromDataValue.type == 'all' && movie.original_title.toLowerCase().search(searchValue.value.toLowerCase()) != -1) {
        movies.push(movie)
      }
    })
    this.movies = movies;
  }
  onChanges() {
    this.formData.valueChanges.subscribe(async(val) => {
     
      if(val.searchQuery.length == 0) {
        console.log(val.type);
        if(val.type == 'all') {
          this.movies =  this.allMoviesJson;
        } else {
          this.movies =  this.allMoviesJson.filter(function(movie: any) {
            return movie.type == val.type;
          });
        } 
      }  
    });
    
  }

  async ngOnInit() {
     this.populateFormData();
     console.log(this.formData)
     this.movies = this.allMoviesJson;
     this.onChanges();
  }

}
