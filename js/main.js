const row = document.querySelector('#row');





let myInit = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("../data.json", myInit);

const getData = async () => {
    const request = await fetch(myRequest);
    if(request.status !== 200) {
        throw new Error('Qandaydir xatolik bor.')

    }
    const data = await request.json();
    return data;
}
getData()
    .then((data) => {
        console.log(data.products);
        data.products.forEach(item => {
        row.innerHTML += `
                <div class="col-sm-6 col-md-6 col-lg-4  ">
                    <div class="card mt-3">
                        <img src="${item.imgUrl}" class="imd-fluid card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${item.title}</p>
                            <b>${item.newPrice}</b>
                            <s class="text-secondary ms-3">${item.oldPrice}</s>
                        </div>
                    </div>
                </div>
        `
        });
    })
    .catch((err) => {
        console.log(err.message);
    })

