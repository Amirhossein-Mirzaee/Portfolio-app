import React from 'react'

const Frontend2 = () => {
  return (
    <div className='skills__content'>
        <h3 className="skills__title">Subjects</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">JSX</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">React Hook</h3>
                    <span className="skills__level">Mid-level</span>
                </div>
                </div>
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Redux</h3>
                    <span className="skills__level">Mid-level</span>
                </div>
                </div>
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Next.js</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend2