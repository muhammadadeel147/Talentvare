import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import search2 from '../assets/images/search2.svg';
import profile from '../assets/images/profile.svg';
import sidebarbanner from '../assets/images/sidebar-banner.svg';
import sidebarpic from '../assets/images/sidebar-pic.svg';
import downarrow from '../assets/images/downarrow.svg';
import msteam from '../assets/images/msteam.svg';
import bookmark from '../assets/images/bookmark.svg';
import locations from '../assets/images/location.svg';
import time from '../assets/images/time.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
const JobSearchDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuredJobs = Array(5).fill({
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    posted: '1 day ago',
    applicants: '22 applicants',
    promoted: true
  });

  const recommendedJobs = Array(5).fill({
    title: 'UI/UX Designer',
    company: 'Teams',
    location: 'Seattle, USA (Remote)',
    posted: '1 day ago',
    applicants: '22 applicants',
    promoted: false
  });
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="job-dashboard">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
          <img src={logo} alt="" />
          </div>
          <ul className="nav-links">
            <li className="active">Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-box">
          <img src={search} alt="Search Icon" className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button className="resume-builder-btn">Resume Builder</button>
          <div className="profile-pic">
            <img src={profile} alt="Profile" />
          </div>
          <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-search">
          <div className="search-box" style={{ width: '100%', margin: '0 0 1rem 0' }}>
            <img src={search} alt="Search Icon" className="search-icon" />
            <input type="text" placeholder="Search" style={{ width: '100%' }} />
          </div>
        </div>
        <ul>
          <li className="active">Find Jobs</li>
          <li>Top Companies</li>
          <li>Job Tracker</li>
          <li>My Calendar</li>
          <li>Documents</li>
          <li>Messages</li>
          <li>Notifications</li>
        </ul>
        <button className="mobile-resume-builder">Resume Builder</button>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="profile-card">
            <div className="banner">
              <img src={sidebarbanner}alt="Banner" className="banner-img" />
              <div className="profile-pic-large">
                <img src={sidebarpic} alt="Albert Flores" />
              </div>
            </div>
            <div className="profile-info">
              <h2>Albert Flores</h2>
              <p className="job-title">Senior Product Designer | UI/UX Designer | Graphic Designer | Web...</p>
              <p className="locations">Clinton, Maryland</p>
            </div>
          
          </div>
          <div className='profile-card'>
          <div className="profile-stats">
              <div className="stat">
                <span className="stat-label">Profile Visitors</span>
                <span className="stat-value">140</span>
              </div>
              <div className="stat">
                <span className="stat-label">Resume Viewers</span>
                <span className="stat-value">20</span>
              </div>
              <div className="stat">
                <span className="stat-label">My Jobs</span>
                <span className="stat-value">88</span>
              </div>
            </div>
           
          </div>
          <div className='profile-card'>
          <div className="calendar-section">
              <div className="calendar-header">
                <h3>My calendar</h3>
               <img src={downarrow} alt="downarrow" className='downarrow'/>
              </div>
              <p className="upcoming">Upcoming Interviews</p>
            </div>
          </div>
        </div>

        {/* Main Area */}
        <div className="main-area">
          <div className="welcome-section">
            <h1>Find your Dream Job, <span>Albert!</span></h1>
            <p>Explore the latest job openings and apply for the best opportunities available today!</p>
          </div>

          <div className="search-section">
            <div className="search-inputs">
              <div className="input-group main-search">
                <input
                  type="text"
                  placeholder="Job Title, Company, or Keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="input-group location-dropdown">
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="">Select Location</option>
                  <option value="remote">Remote</option>
                  <option value="usa">Pakistan</option>
                </select>
              </div>
              <div className="input-group job-type-dropdown">
                <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
                  <option value="">Job Type</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                </select>
              </div>
              <button className="search-btn">
              <img src={search2} alt="Search Icon" className="search-icon2" />
                Search
              </button>
            </div>

            
          </div>
          <div className="filter-tags">
              <span className="filter-label">Similar:</span>
              <div className="tags">
                <span className="tag">Frontend</span>
                <span className="tag">Backend</span>
                <span className="tag">Graphic Designer</span>
              </div>
            </div>
          {/* Featured Jobs Section */}
          <div className="jobs-section">
            <div className="section-header">
              <h2>Featured Jobs</h2>
              <a href="#" className="see-all">See Featured Jobs</a>
            </div>
            <div className="job-cards">
  {featuredJobs.map((job, index) => (
    <div className="job-card" key={`featured-${index}`}>

      
      <div className="job-card-content">
      {job.promoted && <div className="promoted-tag">Promoted</div>}
        <div className="job-header">
          <div className="company-logo">
            <img src={msteam} alt="msteam" />
          </div>
          <div className="job-details">
            <h3 className="job-title">{job.title}</h3>
            <p className="company-name">{job.company}</p>
          </div>
        </div>

        <div className="job-meta">
          <div className="location">
            <img src={locations} alt="location icon" />
            {job.location}
          </div>
          <div className="posted-time">
            <img src={time} alt="time icon" />
            <span>{job.posted}</span>
  <span>|</span>
  <span className='applicant'>{job.applicants}</span>
          </div>
        </div>
      </div>

      <div className="job-actions">
        <button className="apply-btn">Apply Now</button>
        <button className="save-btn">
          <img src={bookmark} alt="bookmark icon" />
        </button>
      </div>
    </div>
  ))}
</div>
          </div>

          {/* Recommended Jobs Section */}
          <div className="jobs-section recommended-jobs">
            <div className="section-header">
              <h2>Recommended Jobs</h2>
              <a href="#" className="see-all">See Recommended Jobs</a>
            </div>
            <div className="job-cards">
              {recommendedJobs.map((job, index) => (
         <div className="job-card" key={`featured-${index}`}>

      
         <div className="job-card-content">
           <div className="job-header">
             <div className="company-logo">
               <img src={msteam} alt="msteam" />
             </div>
             <div className="job-details">
               <h3 className="job-title">{job.title}</h3>
               <p className="company-name">{job.company}</p>
             </div>
           </div>
   
           <div className="job-meta">
             <div className="location">
               <img src={locations} alt="location icon" />
               {job.location}
             </div>
             <div className="posted-time">
               <img src={time} alt="time icon" />
               <span>{job.posted}</span>
     <span>|</span>
     <span className='applicant'>{job.applicants}</span>
             </div>
           </div>
         </div>
   
         <div className="job-actions">
           <button className="apply-btn">Apply Now</button>
           <button className="save-btn">
             <img src={bookmark} alt="bookmark icon" />
           </button>
         </div>
       </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchDashboard;