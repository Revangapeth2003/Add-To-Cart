import React from "react";
import Product from "./Product";

const Home = ({ cart, setCart }) => {
  const mockData = [
    {
      id: 1,
      name: "Idli",
      price: 12,
      ratings: 4.5,
      image:
        "https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw=",
      stock: 50,
    },
    {
      id: 2,
      name: "Dosa",
      price: 20,
      ratings: 4,
      image:
        "https://media.istockphoto.com/id/1367508718/photo/crispy-crepes-made-of-little-millets-and-lentils-commonly-known-as-little-millet-dosa-plated.jpg?s=612x612&w=0&k=20&c=h1OLjk3vrWAMpf11n04j7-ElsO3-SufhKitjt7LKXzk=",
      stock: 20,
    },
    {
      id: 3,
      name: "Poori",
      price: 40,
      ratings: 4.5,
      image:
        "https://media.istockphoto.com/id/1496057458/photo/poori-set-or-puri-with-chnnay-and-veg-curry-with-chutney-raita-and-sauce-served-in-dish.jpg?s=612x612&w=0&k=20&c=8MZtKSepwoQZRdxhHKDUKJy8cFPvf1ig-2uKWmDPQLQ=",
      stock: 30,
    },
    {
      id: 4,
      name: "Pongal",
      price: 35,
      ratings: 4.5,
      image:
        "https://media.istockphoto.com/id/678434780/photo/ven-pongal-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=jqPqhh1SCHYvb7CrCSkd37_q2FwY8Nn-y5axLUG3Wvw=",
      stock: 30,
    },
    {
      id: 5,
      name: "Chicken Biriyani",
      price: 90,
      ratings: 4,
      image:
        "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=",
      stock: 20,
    },
    {
      id: 6,
      name: "Mutton Biriyani",
      price: 120,
      ratings: 3.5,
      image:
        "https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.jpg?s=612x612&w=0&k=20&c=sYldtF2E_cSuYioPtcmM15arsnSs2mIgpuAKUDuuGoI=",
      stock: 15,
    },
    {
      id: 7,
      name: "Parotta",
      price: 25,
      ratings: 3,
      image:
        "https://media.istockphoto.com/id/1205482203/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=612x612&w=0&k=20&c=Yv6GQkzNErLM7NUA4q6S27FnFMT7yuC6RSCij5e2m0Y=",
      stock: 50,
    },
    {
      id: 8,
      name: "Naan",
      price: 30,
      ratings: 3.5,
      image:
        "https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.jpg?s=612x612&w=0&k=20&c=UPKJT67Bn-2ZL1TakWLK9IhpAOIMgryGhLwoHRsP8ZI=",
      stock: 30,
    },
    {
      id: 9,
      name: "Chapatti",
      price: 25,
      ratings: 4.5,
      image:
        "https://media.istockphoto.com/id/153752673/photo/indian-meal.jpg?s=612x612&w=0&k=20&c=r0rQmTle8dhcwn4zu_Xdv81IDXaHEZOneNCv_ZY6PH0=",
      stock: 60,
    },
    {
      id: 10,
      name: "Chicken Rice",
      price: 80,
      ratings: 3.5,
      image:
        "https://media.istockphoto.com/id/1444859690/photo/chicken-fried-rice.jpg?s=612x612&w=0&k=20&c=tjsTLp80y5YmyKegVm9D-80ggs90fSgzw7EDmFD6icQ=",
      stock: 10,
    },
    {
      id: 11,
      name: "Egg Rice",
      price: 50,
      ratings: 4,
      image:
        "https://media.istockphoto.com/id/172789635/photo/asian-chinese-fried-rice-with-vegetable-and-egg-with-chopsticks.jpg?s=612x612&w=0&k=20&c=zxOtoAxVTLn8EvwGIl79IsEfEhtgw1Xgy9qx_Ctw3U4=",
      stock: 15,
    },
    {
      id: 12,
      name: "Egg Noodles",
      price: 50,
      ratings: 4,
      image:
        "https://media.istockphoto.com/id/483137365/photo/asian-chow-mein-noodles.jpg?s=612x612&w=0&k=20&c=aVkPKpDkiAM7CxTFinQBax0i-nm-ybzWimrJRyPePcg=",
      stock: 20,
    },
    {
      id: 13,
      name: "Tomato Rice",
      price: 40,
      ratings: 4.5,
      image:
        "https://media.istockphoto.com/id/1292433146/photo/healthy-homemade-fried-rice.jpg?s=612x612&w=0&k=20&c=i8U5RLSh6FIRWQSCVe3JUWQd12ejk_4GE_LOBlDbu3A=",
      stock: 15,
    },
    {
      id: 14,
      name: "Curd Rice",
      price: 30,
      ratings: 4,
      image:
        "https://media.istockphoto.com/id/1288971181/photo/curd-cheese-in-a-yellow-plate-on-a-dark-background-lime-white-napkin-pepper.jpg?s=612x612&w=0&k=20&c=6735tjkbIPg8EquS9aAJKAkgSDhSzL-iO7dS-Tis9Yg=",
      stock: 25,
    },
    {
      id: 15,
      name: "Lemon Rice",
      price: 30,
      ratings: 3.5,
      image:
        "https://media.istockphoto.com/id/483790424/photo/south-indian-lemon-rice.jpg?s=612x612&w=0&k=20&c=ZucsIrf_JvTC42aIqOdUZqFie1TUf2a1UU2GxO8fBO4=",
      stock: 20,
    },
  ];

  return (
    <div className="grid grid-cols-4 items-center gap-5">
      <div className="flex justify-center items-center">
        <img
          src="https://media.istockphoto.com/id/1287632111/photo/weve-got-you-covered-during-lockdown.webp?a=1&b=1&s=612x612&w=0&k=20&c=efTe3T8J5y9gG5UeCtZ_v0RZdPRtMh_n2y-j0XFaXXk="
          alt="website-logo"
          className="w-40 h-40 rounder rounded-full"
        />
      </div>
      {mockData.map((ele) => {
        return (
          <div key={ele.id} className="p-4 border border-gray-200">
            <Product ele={ele} cart={cart} setCart={setCart} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
