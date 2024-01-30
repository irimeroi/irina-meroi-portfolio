import './Resume.css'

function Resume() {
    return (
        <section>
            <div className='p-5 d-flex justify-content-around flex-wrap'>
                <div className='p-3 border'>
                    <h2><u>Front-end technologies</u></h2>
                    <ul className='p-2'>
                        <li className='py-2'>HTML</li>
                        <li className='py-2'>CSS - Bootstrap - Flexbox</li>
                        <li className='py-2'>JavaScript</li>
                        <li className='py-2'>jQuery</li>
                        <li className='py-2'>React</li>
                    </ul>
                </div>
                <div className='p-3 border'>
                    <h2><u>Back-end technologies</u></h2>
                    <ul className='p-2'>
                        <li className='py-2'>Node</li>
                        <li className='py-2'>Express</li>
                        <li className='py-2'>APIs - REST</li>
                        <li className='py-2'>MySQL, Sequelize</li>
                        <li className='py-2'>MongoDB, Mongoose</li>
                        <li className='py-2'>GraphQL</li>
                    </ul>
                </div>
            </div>
            <p className='d-flex justify-content-center' >You're welcome to download my resume by clicking here!</p>
        </section>
    )
}

export default Resume;

//upload as a pdf in google drive
//grab the share link
// a tag href share link
