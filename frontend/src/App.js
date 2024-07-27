import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import heroImage from './images/creditcard.jpg';

function App() {
    const [formVisible, setFormVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [formData, setFormData] = useState({
        ID: '',
        gender: '',
        ownCar: '',
        ownProperty: '',
        numChildren: '',
        annualIncome: '',
        incomeType: '',
        education: '',
        maritalStatus: '',
        housing: '',
        birthDate: '',
        employmentDuration: '',
        mobilePhone: '',
        workPhone: '',
        phone: '',
        email: '',
        occupation: '',
        familySize: ''
    });

    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/approve/', formData)
            .then(response => {
                setResult(JSON.stringify(response.data.received_data));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Credit Card Approval</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#" onClick={() => { setFormVisible(false); setInfoVisible(false); }}>Home</a></li>
                        <li><a href="#" onClick={() => { setFormVisible(true); setInfoVisible(false); }}>Check Approval</a></li>
                        <li><a href="#" onClick={() => { setInfoVisible(true); setFormVisible(false); }}>Information</a></li>
                    </ul>
                </nav>
            </header>

            {!formVisible && !infoVisible ? (
                <main>
                    <section className="hero">
                        <img src={heroImage} alt="Credit Approval" className="hero-image" />
                        <h2>Welcome to Credit Card Approval Checker</h2>
                        <p>Your gateway to finding out if you qualify for credit cards based on your financial information.</p>
                        <button onClick={() => setFormVisible(true)}>Check Your Approval</button>
                    </section>

                    <section className="services">
                        <h2>Our Services</h2>
                        <div className="service-item">
                            <h3>Personalized Credit Analysis</h3>
                            <p>We offer tailored insights to help you understand your credit standing.</p>
                        </div>
                        <div className="service-item">
                            <h3>Fast and Easy Approval</h3>
                            <p>Get quick feedback on your eligibility for various credit cards.</p>
                        </div>
                        <div className="service-item">
                            <h3>Dedicated Support</h3>
                            <p>Our team is here to guide you through the application process.</p>
                        </div>
                    </section>
                </main>
            ) : formVisible ? (
                <main>
                    <h2>Application Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Client ID</label>
                            <input type="text" name="ID" value={formData.ID} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Own Car?</label>
                            <select name="ownCar" value={formData.ownCar} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Own Property?</label>
                            <select name="ownProperty" value={formData.ownProperty} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Number of Children</label>
                            <input type="number" name="numChildren" value={formData.numChildren} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Annual Income</label>
                            <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Income Type</label>
                            <select name="incomeType" value={formData.incomeType} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="salary">Salary</option>
                                <option value="business">Business</option>
                                <option value="pension">Pension</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Education Level</label>
                            <select name="education" value={formData.education} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="highschool">High School</option>
                                <option value="bachelor">Bachelor's</option>
                                <option value="master">Master's</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Marital Status</label>
                            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Housing Type</label>
                            <select name="housing" value={formData.housing} onChange={handleChange} required>
                                <option value="">Select...</option>
                                <option value="rent">Rent</option>
                                <option value="own">Own</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Birthday (days ago)</label>
                            <input type="number" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Employment Duration (days)</label>
                            <input type="number" name="employmentDuration" value={formData.employmentDuration} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Mobile Phone Number</label>
                            <input type="text" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Work Phone Number</label>
                            <input type="text" name="workPhone" value={formData.workPhone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Occupation</label>
                            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Family Size</label>
                            <input type="number" name="familySize" value={formData.familySize} onChange={handleChange} required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    {result && <div className="result">{result}</div>}
                </main>
            ) : (
                <main>
                    <h2>Information</h2>
                    <p>add later.</p>
                </main>
            )}

            <footer className="App-footer">
                <p>&copy; {new Date().getFullYear()} Credit Approval. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;
