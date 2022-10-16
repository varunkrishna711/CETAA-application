import SimpleImageSlider from "react-simple-image-slider";

let images = [
    { url: "images/1.jpg" },
    { url: "images/2.jpg" },
  ];
  
  const Gallery = () => {
    return (
        <div>
            <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            />
        </div>
    );
  }