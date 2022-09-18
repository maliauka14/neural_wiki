import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './rules.css';


const Rules = () => {
    return (
        <>
            <Header />
            <div className='rules'>
                <section className='rules_intro'>
                    <h1 className='rules_title'>A few rules for submitting articles to the site</h1>
                    <h2 className='rules_subtitle'>
                        This page is designed to help you write articles. By following these rules, it is highly likely that your article will appear on our site.
                    </h2>
                </section>
                <section className='own_rule'>
                    <h2 className='own_rule_title'>Choosing a programming language</h2>
                    <p className='own_rule_description'>Some text</p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Rules;
