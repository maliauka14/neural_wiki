
import Header from './../../header/Header'
import Footer from './../../footer/Footer'
import Accordion from '../../accordion/Accordion';
import './FAQ.css';
import data from './FAQData';

const FAQ = () => {

    return (
        <>
            <Header />
            <main className='faq'>
                <h1 className='faq_title'> How we can help you?</h1>
                <h2 className='faq_subtitle'> On this page we have tried to collect all the most frequently
                    asked questions in order to make it as comfortable as possible
                    for you to work on our service
                </h2>

                <div className='faq_data_field'>

                    <div className='answers'>
                        <h2 className='faq_title'> Site navigation</h2>
                        {data.siteNavigation.map((item, index) =>
                            <Accordion key={index} title={item.question} text={item.answer}
                            />
                        )}
                    </div>

                    <div className='answers'>
                        <h2 className='faq_title'> Placement of articles</h2>
                        {data.placementOfArticles.map((item, index) =>
                            <Accordion key={index} title={item.question} text={item.answer}
                            />
                        )}
                    </div>

                </div>

            </main>
            <Footer />
        </>
    )
}



export default FAQ;