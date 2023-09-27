const CardSideBar = ({ bookMarkTitle, reminingHour, totlaPrice }) => {
  return (
    <div>
      {/* Credit Hour Remaining  */}

      <h1 className="text-xl font-bold text-teal-600">
        Credit Hour Remaining {reminingHour} hr
      </h1>
      <hr className="border- border-2 border-gray-500 my-3" />

      {/* title add  */}
      <h1 className=" text-2xl font-bold">Course Name</h1>
      {bookMarkTitle.map((item, i) => (
        <div
          className="text-xl  p-1 py-2 font-semibold    my-3 w-full"
          key={item.id}
        >
          <div className="flex w-full">
            <p className="text-gray-800   ">{i + 1}.</p>
            <p className="text-gray-600  "> {item.title}</p>
          </div>
        </div>
      ))}
      <hr className="border- border-2 border-gray-500 my-3" />
      {/* totla credit hour  */}
      <h2 className="text-xl font-semibold">
        Total Credit Hour : {20 - reminingHour}
      </h2>
      <hr className="border- border-2 border-gray-500 my-3" />
      {/* totla price    */}
      <h2 className="text-2xl font-bold">Total Price: ${totlaPrice}</h2>
    </div>
  );
};

export default CardSideBar;
