// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// const Slider = () => {
//   return (
//     <div className="test">
//       <AwesomeSlider bullets={false}>
//         <div
//           data-src={require("../assets/images/49dbc80f-3566-46f9-b294-b2fddb2fe8ae.jpeg")}
//         />

//         <div
//           data-src={require("../assets/images/391cd6c1-8042-4ada-bfbf-6da86c8e5527.jpeg")}
//         />

//         <div
//           data-src={require("../assets/images/cfc9edb1-3e28-4ecd-8de5-21425d7d29ce.jpeg")}
//         />
//       </AwesomeSlider>
//     </div>
//   );
// };

// export default Slider;

// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

// const Slider = () => {
//   return (
//     <div className="test">
//       <AwesomeSlider>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//       </AwesomeSlider>
//     </div>
//   );
// };

const Slider = () => {
  return (
    <div className="slider">
      <img
        src={require("../assets/images/49dbc80f-3566-46f9-b294-b2fddb2fe8ae.jpeg")}
        alt="fist-bannier"
      />
      <img
        src={require("../assets/images/391cd6c1-8042-4ada-bfbf-6da86c8e5527.jpeg")}
        alt="second-bannier"
      />
      <img
        src={require("../assets/images/cfc9edb1-3e28-4ecd-8de5-21425d7d29ce.jpeg")}
        alt="third-bannier"
      />
    </div>
  );
};
export default Slider;
