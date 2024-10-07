class filmlerAPI{
        
        constructor(){
            this.apiKey = "3dfa66c31f5f487104622b77e25ecea1";
            this.populer = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
            this.arama = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
            this.resimURL = "https://image.tmdb.org/t/p/w500/"
            this.filmerBolumuDOM = document.querySelector("#filmlerGenelBolumu")
        }
        

        async getPopulerMovies(){
            const response = await fetch(this.populer);
            const data = await response.json()
            console.log(data)
            this.olustur(data)
        }

        async kullaniciFilmAramasi(filmAdi){
            const response = await fetch(this.arama + filmAdi);
            const data = await response.json()
            this.olustur(data)
        }
        

        olustur(data){
            this.filmerBolumuDOM.innerHTML = "";

            data.results.forEach((film) => {
                let filmPuan = film.vote_average
                this.filmerBolumuDOM.innerHTML += `
                <div class ="filmler">
                <img class="filmResimleri" width="230" height="345" src="${this.resimURL}${film.poster_path}" alt="">
                
            
                <div class="baslikVePuan">
                    <h1>${film.original_title}</h1>
                    <h3>${filmPuan.toFixed(1)}</h3>
                </div>  
                </div>`
            })
        }
        
}


