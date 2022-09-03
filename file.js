const news = () => {

    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data.news_category))
}

const displayNews = dat => {

    const parrent = document.getElementById('parrent');

    dat.forEach(datam => {
        // console.log(datam.category_id);
        // console.log(datam);
        const div = document.createElement('div');
        div.classList.add('d');
        div.innerHTML = `
        <p onclick="display('${datam.category_id}')">
        ${datam.category_name}
        </p>
        `;
        // console.log(div);
        parrent.appendChild(div)
    });



}

const display = id => {

    
    // console.log(id);
   //https://openapi.programming-hero.com/api/news/category/08
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayId(data.data));
        spinner(true);

    
}

const displayId = d => {
    console.log(d.length);
    

    //display korbo catagoary gula
    if(d.length>0){

        const asbe=document.getElementById('asbe');
        document.getElementById('asbe').innerHTML=" ";
        const sure=document.createElement('div');
        sure.innerHTML=`<h3 class="text-danger bg-gradient border border-3"> ${d.length} items found</h3>`;
        asbe.appendChild(sure);

    }
    else{
        document.getElementById('asbe').innerHTML=`
          <h2 class="bg-danger"> no data found here </h2>
        `;
    }
    

   
    const baba = document.getElementById('baba');
    document.getElementById('baba').innerHTML = " ";

    d.forEach(dd => {
        // console.log(dd);
        // console.log(dd.author.img);
        const div = document.createElement('div');

        div.classList.add('child');
        div.innerHTML = `
           

    <div class="card mb-3 mw-70 child">
        <div>
             <div class="row g-0">
                <div class="col-md-4">
                  <img src="${dd.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${dd.title}</h5>
                    <p class="card-text">${dd.details.slice(0,400)}</p>
                    <p class="card-text"></p>
                  </div>

                  <div class="d-flex justify-content-between">
                  <div class="d-flex gap-2">
                      <img style="width: 50px; height: 50px; border-radius: 50%;" class="img-fluid" src='${dd.author.img}'>
                      <div>${dd.author.name}</div>
                  </div>
                  <div class="d-flex">
                  <div> <i class="fa fa-eye" style="font-size:24px"></i>  ${dd.rating.number} </div>
                     
                  </div>
                  <div class="d-flex gap-5 ">
                      <div> <span class="text-primary p-2 rounded"> Star status</span> </div>
                      <div onclick="modal('${dd.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-right :20px; font-weight: 700;"><p>&#8594;</p></div>

                      


                  </div>
      
              </div>
                </div>
            </div>
        </div>
    </div>
        
        `;

        baba.appendChild(div);

//// here we need to stop i guess

        
    });
    spinner(false);


}


const spinner = isspinner => {
    const load = document.getElementById('spinner');
    if (isspinner) {
        load.classList.remove('d-none');
    }
    else {
        load.classList.add('d-none');
    }
}

const fo=()=>{

    window.location.href='info.html';
}



const modal=hi=>{
    
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => doo(data.data));
       

}

const doo=dak=>{
    console.log(dak);
}


news();

