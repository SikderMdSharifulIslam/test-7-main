import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import CardSideBar from "../CardSideBar/CardSideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cards = () => {
  const [cards, setCards] = useState([]);
  const [bookMarkTitle, setBookMarkTitle] = useState([]);
  const [reminingHour, setReminingHour] = useState(20);
  const [totlaPrice, setTotlaPrice] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // ========= title add handler =======
  const handlerTitleAddToBookmark = (data) => {
    const newBookMark = [...bookMarkTitle, data];
    const itemChecker = bookMarkTitle.find((item) => item.id == data.id);
    if (!itemChecker) {
      // remining credit ===========
      let totlaHours = data.duration.hours;
      bookMarkTitle.forEach((element) => {
        totlaHours += element.duration.hours;
      });
      let reaminingHours = 20 - totlaHours;

      // course totla price ======================
      let coursePtice = data.price;
      bookMarkTitle.forEach((element) => {
        coursePtice += element.price;
      });

      if (reaminingHours < 0) {
        toast.error(`Your credit is vary low`);
        return;
      } else {
        setTotlaPrice(coursePtice);
        setReminingHour(reaminingHours);
        setBookMarkTitle(newBookMark);
      }
    } else {
      toast.warn(`You already selected this course `);
    }
  };

  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
      <div className=" md:col-span-3 sm:col-span-2 col-span-1  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 ">
        {cards.map((item, i) => (
          <Card
            key={item.id + i}
            cards={item}
            handlerTitleAddToBookmark={handlerTitleAddToBookmark}
          ></Card>
        ))}
      </div>
      <div className="col-span-1 sm:col-span-2  md:col-span-1">
        <div className="bg-gray-100 rounded-md p-4">
          <CardSideBar
            bookMarkTitle={bookMarkTitle}
            reminingHour={reminingHour}
            totlaPrice={totlaPrice}
          ></CardSideBar>
        </div>
      </div>
      <ToastContainer className="text-xl  "></ToastContainer>
    </div>
  );
};

export default Cards;
