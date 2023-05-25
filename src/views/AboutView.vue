<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
  
    <!-- Box -->
  
    <div class="box d-flex justify-content-center align-items-center">
        <article class="about d-flex justify-content-center align-items-center">
            <div class="col-6">
                <div class="about-content">
                    <!-- single item -->
                    <div class="content active" id="history">
                    <h2 class="h2-box">OM OS</h2>
                    <p>
                        I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                        mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                        rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                        tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                        mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                        direct trade hoodie ugh chambray, craft beer pork belly flannel
                        tacos single-origin coffee art party migas plaid pop-up.
                    </p>
                    </div>
                    <!-- end of single item -->
                    <!-- single item -->
                    <div class="content" id="vision">
                    <h2 class="h2-box">BLIV DJ!</h2>
                    <p>
                        Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                        crucifix offal deep v hella biodiesel. Church-key listicle
                        polaroid put a bird on it chillwave palo santo enamel pin,
                        tattooed meggings franzen la croix cray. Retro yr aesthetic four
                        loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                        Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                        Roof party hammock master cleanse pop-up truffaut, bicycle
                        rights skateboard affogato readymade sustainable deep v
                        live-edge schlitz narwhal.
                    </p>
                    <ul>
                        <li>list item</li>
                        <li>list item</li>
                        <li>list item</li>
                    </ul>
                    </div>
                    <!-- end of single item -->
                    <!-- single item -->
                    <div class="content" id="goals">
                    <h2 class="h2-box">HVOR ER VI?</h2>
                    <p>
                        Chambray authentic truffaut, kickstarter brunch taxidermy vape
                        heirloom four dollar toast raclette shoreditch church-key.
                        Poutine etsy tote bag, cred fingerstache leggings cornhole
                        everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                        swag, mixtape hashtag marfa readymade direct trade man braid
                        cold-pressed roof party. Small batch adaptogen coloring book
                        heirloom. Letterpress food truck hammock literally hell of wolf
                        beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                        banh mi salvia venmo photo booth quinoa chicharrones.
                    </p>
                    </div>
                    <!-- end of single item -->
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-3">
                <button class="tab-btn active" data-id="history">OM OS</button>
                <button class="tab-btn" data-id="vision">BLIV DJ</button>
                <button class="tab-btn" data-id="goals">HVOR ER VI?</button>
            </div>
        </article>

        

    </div>
  
    <!-- Card-box -->
  
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        
        <div class="d-flex justify-content-center align-items-center">
            <div class="col-6">
                <h2 class="h2-box">KRÆFTVÆRKET</h2>
                <p class="p-box">Esbjerg har i flere år manglet gængse øvelokaler med mulighed for indspilning, og her vil Kanten give muligheden for at benytte sig af et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens vision om at hjælpe det musikalske vækstlag med at skabe musik, så vil der tilbydes en lydtekniker som ifølge aftale kan undervise i lydstudieteknik - alt efter behov. Med Kraftværkets placering i Østerbyen vil vi løfte interessen for musik, særligt for de lokale unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med kendskab til unge i området. Kraftværket kan benyttes af alle der spiller, eller gerne vil spille musik.</p>

                <h2 class="h2-box">PRISER PÅ MEDLEMSKAB</h2>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Adgang til øvelokalet  i 3 md.</p>
                    <p class="p-box">300 kr.</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Adgang til studiet 3 md.</p>
                    <p class="p-box">350 kr.</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Opstart kursus i studiet (kan være krav)</p>
                    <p class="p-box">100 kr.</p>
                </div>

                <h2 class="h2-box">KONTAKT KANTEN</h2>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Telefon:</p>
                    <p class="p-box">28 97 11 85</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Email:</p>
                    <p class="p-box">musikforeningenkanten@gmail.com</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Adresse:</p>
                    <p class="p-box">GL Novrupvej 14, 6705 Esbjerg Ø</p>
                </div>
            </div>
            <div class="col-4"></div>
        </div>

    </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'

onMounted(() => {
    const isActive = ref(true)
    
    //Test
    
    //const about = document.querySelector('.about');
    const btns = document.querySelectorAll('.tab-btn');
    const articles = document.querySelectorAll('.content');
    
    let selected = 0;

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", () => {
            changeSelected(i)
        })
    }

    const changeSelected = (newSelected) => {
        articles[selected].classList.remove("active")
        articles[newSelected].classList.add("active")
        selected = newSelected
    }

    /* about.addEventListener("click", function (e) {
    const id = e.target.dataset.id; */
    //console.log(id)
    
    /* if (id) {
      btns.forEach(function(btn) {
      btn.classList.remove('active');
      })
    }
    
    e.target.classList.add('active');
    
    articles.forEach(function(article) {
      article.classList.remove('active');
    })
    
    const element = document.getElementById(id);
    element.classList.add("active")
    }); */
})
  

  </script>
  
  <style scoped>
    .hero {
      height: 50vh;
      background-color: aqua;
  
      background-image: url(../assets/img/hero_img.jpg);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .box {
        height: 70vh;
    }
    
    .card-box {
        height: auto;
        padding: 8rem 0;
    }

    /* test */
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img:not(.logo) {
  width: 100%;
}
img {
  display: block;
}

/*  global classes */

/* section */

main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
/*
=============== 
About
===============
*/

.about {
  background: var(--clr-white);
  border-radius: var(--radius);
  display: grid;
  grid-template-rows: auto 1fr;
}
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.tab-btn:nth-child(1) {
  border-top-left-radius: var(--radius);
}
.tab-btn:nth-child(3) {
  border-top-right-radius: var(--radius);
}
.tab-btn {
  padding: 1rem 0;
  border: none;
  text-transform: capitalize;
  font-size: 1rem;
  display: block;
  cursor: pointer;
}
.tab-btn:hover:not(.active) {
  background: var(--clr-primary-10);
  color: var(--clr-primary-5);
}
.about-content {
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding: 2rem 0 2rem 1.5rem;
}
/* hide content */
.content {
  display: none;
}
.tab-btn.active {
  background: var(--vt-c-white-soft);
}
.content.active {
  display: block;
}
  </style>
  