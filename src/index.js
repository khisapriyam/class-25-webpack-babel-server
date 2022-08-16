import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';
import './main.scss';

getProducts()
function getProducts(){

    const plist = document.querySelector('.p-list');

    let list = '';
    axios.get('http://localhost:5050/products').then(res =>{

        res.data.map(data =>{

            let {name, price, photoo} = data;
            list +=`
            <div class="col-md-3">
                <div class="card shadow">
                    <img class="card-img "src="${photoo}" alt="">
                    
                    <div class="card-body">
                        <h3>${name}</h3>
                        <p>Price : ${price}</p>
                    </div>
                </div>
            </div>
    
            `;
        })
        plist.innerHTML = list;
    

    })
}