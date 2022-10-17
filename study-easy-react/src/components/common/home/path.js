import React from 'react'
import "../home/path.css";
import {Link}  from "react-router-dom";

export const Path= () => {
  return (
    <div>
      <div class="scrollholder mt-4">
        <div>
          <div>
            <img src="https://media.istockphoto.com/photos/group-of-young-students-working-on-an-assignment-picture-id1071467916?b=1&k=20&m=1071467916&s=170667a&w=0&h=il5TdG20EgF8H-Jj5XfKVrLgOc-DH4UvwdCBO4mbaGQ=" data-aos="fade-right" />
          </div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-left">Selection</div>
            <h4 class="fBold clr-dgray" data-aos="fade-left">Select a Country</h4>
           
           
            <Link to="/Countries">
              <button className='primary-btn' data-aos="fade-left">Checkout</button>
            </Link>


          </div>
        </div>

        <div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-right">Selection</div>
            <h4 class="fBold clr-dgray" data-aos="fade-right"> Select your Dream University </h4>
            <button data-aos="fade-left">Checkout</button>
          </div>
          <div>
            <img src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-colleges-italy-4-1512055247.jpg" data-aos="fade-left" />
          </div>
        </div>
        <div>
          <div data-aos="fade-right">
            <img src="https://www.englishradar.com/wp-content/uploads/2017/03/writing-tips-for-English-proficiency-exams.jpg" />
          </div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-left">Application</div>
            <h4 class="fBold clr-dgray" data-aos="fade-left"> Quick application processing</h4>
            <button className='primary-btn' data-aos="fade-left">Checkout</button>
          </div>
        </div>
        <div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-right">Expense Operation</div>
            <h4 class="fBold clr-dgray" data-aos="fade-right"> Scholarship Processing</h4>
            <button data-aos="fade-left">Checkout</button>
          </div>
          <div>
            <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/woman-calculator-budget-finances_SOMN19162_869247602_is_1560x880.jpg" data-aos="fade-left" />
          </div>
        </div>
        <div>
          <div>
            <img src="https://www.hult.edu/blog/media/uploads/2014/10/visa_process.jpg" data-aos="fade-right" />
          </div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-left"> Visa Application </div>
            <h4 class="fBold clr-dgray" data-aos="fade-left"> Information about Visa</h4>
            <button className='primary-btn' data-aos="fade-left">Checkout</button>
          </div>
        </div>
        <div>
          <div>
            <div class="clr-orange fBold" data-aos="fade-right"> Bon Voyage </div>
            <h4 class="fBold clr-dgray" data-aos="fade-right"> Fly & Enroll to <br /> your dream university</h4>
            <button data-aos="fade-left">Checkout</button>
          </div>
          <div>
            <img src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA=" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </div>
  )
}
