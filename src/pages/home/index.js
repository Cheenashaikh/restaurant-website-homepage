import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "./home.css";
import imagepic from "../../assets/image.png"
import Special from "./specialMenu";
import Gallery from "./gallery";
import Choice from "./choice";
import Customer from "./customer";
import Footer from "../../components/footer";
function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
        AOS.refresh();
    }, [])


    return (
<>

        <div className="home">
            <div className="ourStory">
                <div className="story">
                    <h6>Our Story</h6>
                    <span className="right_line"></span>
                    <img src={imagepic} className="circle"/>
                </div>
                <div className="para">
                <h2>Few Words About Us</h2>
                    <p>When you are looking for Middle Eastern or Turkish restaurants in Karachi, you cannot go past Zeytin. We have captured the exotic flavours of the
                        Mediterranean seaside region through to Turkey & created a exotic dining experience you will never forget. While we largely focus on offering delicious
                        Middle Eastern & Turkish food, we also draw on Mediterranean influences to give our menu that extra twist. Meals are served up from traditionally
                        Meze style to flavoursome chargrills giving you and your loved ones the chance to share your food, stories and laughs. We offer a warm and friendly
                        dining restaurant, and an ambience to remember, making us the ideal venue for all your special occasions. Whether it is family dinner, casual parties or a
                        corporate luncheon, we are the perfect place to go. In true Middle Eastern fashion, we love to celebrate food and we know our diners do too! That’s why we offer
                        the best quality and tasting food every day in a spectacular environment and exceptional hospitality which would make you keep coming back for more.</p>
                </div>
                <div className="btn">
                    <button>Explore Our Menu</button>
                </div>

            </div>
            <div className="img">
            <img src="https://www.zeytin.pk/img/ab-2.jpg" data-aos="fade-down" />
            </div>

        </div>
        <Special/>
        <Gallery/>
       <Choice/>
       <Customer/>
       <Footer/>
        </>
    );
}

export default Home;
