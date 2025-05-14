import "../../assets/AboutUs.css"
const AboutUs = () => {
  return (
    <div id='AboutUs'>
        <div className='container'>
            <button className="purple">AboutUs</button>
            <h2>The beautiful story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className="AboutUsButtons">
                <a href="#Products"><button className="AboutUsToProductsBtn">Products</button></a>
                <a href="#ContactForm"><button>Contact us {`>`}</button></a>
            </div>
        </div>

    </div>
  )
}

export default AboutUs