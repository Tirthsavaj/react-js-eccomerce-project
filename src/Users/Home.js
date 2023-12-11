import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "./Slider";

const Home = () => {
    const [product, setProduct] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mobile, setMobile] = useState([]);
    const [clothes, setClothes] = useState([]);
    const [grocery, setGrocery] = useState([]);
    const getAllProduct = async () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const getAllElectronics = () => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                let ans = res.data.filter((val, i) => {
                    if (i < 5) {
                        return val.category === "eletronics"
                    }
                })
                setElectronics(ans)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const getAllMobile = () => {
        axios.get(`http://localhost:8000/products?category=mobile&&status=instock`)
            .then((res) => {
                setMobile(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getAllClothes = () => {
        axios.get(`http://localhost:8000/products?category=clothes&&status=instock`)
            .then((res) => {
                setClothes(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getAllGrocery = () => {
        axios.get(`http://localhost:8000/products?category=grocery&&status=instock`)
            .then((res) => {
                setGrocery(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }


    useEffect(() => {
        getAllProduct();
        getAllElectronics();
        getAllMobile();
        getAllClothes();
        getAllGrocery();
    }, []);


    return (
        <>
            <Slider />
            <div className="light-gray">
                <div className="container p-5">
                    <hr />
                    <h2 className="text-white">Best of Electronics</h2>
                    <hr />
                    <div className="row">
                        {
                            electronics.map((val) => {
                                return (
                                    <div className="col-md-3 pb-5 flip-card">
                                        <div class="flip-card d-flex justify-content-between">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src={val.image} alt="Avatar" style={{ width: "300px", height: "300px", objectFit: 'cover' }} />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h3 className="pt-3 ms-2">Name :- {val.name}</h3>
                                                    <hr />
                                                    <h3 className="ms-2">Price :- {val.price}</h3>
                                                    <hr />
                                                    <h6 className="ms-2">Dec :- {val.desc}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="container-fluid p-5">
                <hr/>
                    <h2 className="text-white">Top Deals</h2>
                <hr/>
               <div className="row justify-content-around text-center">
               <div className="card p-2 my-5" style={{ width: '16rem' }}>
                        <img className="card-img-top" src="https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/1/o/b/7-if7252-7-adidas-crywht-arcngt-luclem-original-imagr5vh9bgfq2by.jpeg?q=80" style={{height:"15rem" , width:"15rem"}} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">ADIDAS, Skechers & more</h5> 
                            <h6>Min. 50-80% Off</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" src="https://rukminim1.flixcart.com/image/210/210/krwec280/sweatshirt/k/e/e/8-9-years-itbss00067ochrels-indian-terrain-original-imag5kxsztkezqja.jpeg?q=80" style={{height:"15rem" , width:"14rem"}}  alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Kids' Winter Wear</h5> 
                            <h6>Min 60% Off</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" src="https://rukminim1.flixcart.com/image/210/210/xif0q/sandal/i/9/e/-original-imaggcb5y7fdqa3v.jpeg?q=80" style={{height:"15rem" , width:"14rem"}}  alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Reebok, Campus & More</h5> 
                            <h6>Under ₹599</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" style={{height:"15rem" , width:"14rem"}}  src="https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/4/v/u/6-177105-9-skechers-wbl-original-imagr5tqnaywtjcs.jpeg?q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Skechers</h5> 
                            <h6>Min. 60% Off</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" style={{height:"15rem" , width:"14rem"}}  src="https://rukminim1.flixcart.com/image/210/210/l45xea80/kurta/k/5/j/l-ews2ku0819a-soch-original-imagf4hj4ut35pgx.jpeg?q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Kurta Sets</h5> 
                            <h6>Flat 70% Off</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" style={{height:"11rem" , width:"14rem"}} src="https://rukminim1.flixcart.com/image/210/210/xif0q/monitor/m/a/b/-original-imagsatbymyszzjf.jpeg?q=80" alt="Card image cap" />
                        <div className="card-body py-5 px-0">
                            <h5 className="card-title">Top Deals on Acer Monitors</h5> 
                            <h6>30-80% Off</h6>
                        </div>
                    </div>
               <div className="card p-2 my-5" style={{ width: '15rem' }}>
                        <img className="card-img-top" src="https://rukminim1.flixcart.com/image/210/210/xif0q/shoe/7/i/x/-original-imagmh3muw48qn62.jpeg?q=80" style={{height:"15rem" , width:"14rem"}}  alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">HRX, FILA  & More</h5> 
                            <h6>Under ₹899</h6>
                        </div>
                    </div>
               </div>
                    <hr/>
                </div>
                <div className="container p-5">
                    <hr />
                    <h2 className="text-white">Best of Mobile</h2>
                    <hr />
                    <div className="row">
                        {
                            mobile.map((val) => {
                                return (
                                    <div className="col-md-3 pb-5 flip-card">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src={val.image} alt="Avatar" style={{ width: "300px", height: "300px", objectFit: 'cover' }} />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h3 className="pt-3 ms-2">Name :- {val.name}</h3>
                                                    <hr />
                                                    <h3 className="ms-2">Price :- {val.price}</h3>
                                                    <hr />
                                                    <h6 className="ms-2">Dec :- {val.desc}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr/>
                <div className="bg-white">
                <div className="">
                    <div className="row justify-content-around m-2 py-3" >
                        <div className="col-3">
                            <img src="offer-img-1.jpg"/>
                        </div>
                        <div className="col-3">
                            <img src="offer-img-2.jpg"/>
                        </div>
                        <div className="col-3">
                            <img src="offer-img-3.jpg"/>
                        </div>
                    </div>
                </div>
                </div>
                <hr/>
                <div className="container p-5">
                    <hr />
                    <h2 className="text-white">Best of Clothes</h2>
                    <hr />
                    <div className="row">
                        {
                            clothes.map((val) => {
                                return (
                                    <div className="col-md-3 pb-5 flip-card">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src={val.image} alt="Avatar" style={{ width: "300px", height: "300px", objectFit: 'cover' }} />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h3 className="pt-3 ms-2">Name :- {val.name}</h3>
                                                    <hr />
                                                    <h3 className="ms-2">Price :- {val.price}</h3>
                                                    <hr />
                                                    <h6 className="ms-2">Dec :- {val.desc}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container p-5">
                    <hr />
                    <h2 className="text-white">Best of Grocery</h2>
                    <hr />
                    <div className="row">
                        {
                            grocery.map((val) => {
                                return (
                                    <div className="col-md-3 pb-5 flip-card">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src={val.image} alt="Avatar" style={{ width: "300px", height: "300px", objectFit: 'cover' }} />
                                                </div>
                                                <div class="flip-card-back">
                                                    <h3 className="pt-3 ms-2">Name :- {val.name}</h3>
                                                    <hr />
                                                    <h3 className="ms-2">Price :- {val.price}</h3>
                                                    <hr />
                                                    <h6 className="ms-2">Dec :- {val.desc}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/induction-cook-top/d/y/y/hatco-high-power-commercial-induction-cooktop-heavy-duty-original-imagmmf8pezmgndk.jpeg?q=70" style={{ width: "200px", height: '180px' }} className="img-fluid rounded-start m-0" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Name :- Electric Stove</h5>
                                            <p className="card-text">An electric stove, electric cooker or electric
                                                range is a stove with an integrated electrical heating device to cook and bake.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-6">
                                <div className="card mb-3" style={{ maxWidth: 600 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://rukminim2.flixcart.com/image/416/416/l0r1j0w0/kitchen-tool-set/6/5/r/-original-imagch2yyzejknzh.jpeg?q=70" style={{ width: "200px", height: '180px' }} className="img-fluid rounded-start m-0" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Name :- Stainless Steel Kitchen Tool Set</h5>
                                                <p className="card-text">Made entirely from ultra-durable, polished 18/10 stainless steel. Long-reaching handles are ideal for pots and pans of all sizes.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 1 hours ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://rukminim2.flixcart.com/image/832/832/kvifekw0/fabric/h/z/o/no-2-35-m-unstitched-na-black-aghori-guoyu-original-imag8dymcy7zdyxv.jpeg?q=70" style={{ width: "200px", height: '180px' }} className="img-fluid rounded-start m-0" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Name :- Unstitched Polycotton Shirt </h5>
                                            <p className="card-text">This piece of shirt fabric from This Brand is the perfect pick for your party wardrobe. Pair it up with sleek trousers and shoes for an outstanding look.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 20 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ maxWidth: 600 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDyUsbui4csscWrb2PKhg9Wj52jrXoEL_LKtZfdj74D96Ezq03ur2xRAArLyMHqoeRgVgqnLYVHaV7fMVT335wZfwWzq2sRG7OTOuzXV_1mOqlc5dH0UdxcA&usqp=CAE" style={{ width: "200px", height: '180px' }} className="img-fluid rounded-start m-0" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Name :- Realme</h5>
                                            <p className="card-text">It was founded by Li Bingzhong (known as Sky Li) on May 4, 2018, who was a former vice president of Oppo.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 35 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home