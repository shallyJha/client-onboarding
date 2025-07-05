
import React, { useState } from "react";
import Loader from "./Loader";

const ClientOnboarding = () => {
    const [company, setCompany] = useState("");
    const [person, setPerson] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [project, setProject] = useState("");
    const [summary, setSummary] = useState("");
    const [showSummary, setShowSummary] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!company.trim() || !person.trim() || !email.trim() || !phone.trim() || !project.trim()) {
                alert("⚠️ Please fill in all fields.");
                return;
            }
            // Simulate async operation
            await new Promise(res => setTimeout(res, 1200));
            const summaryText = `✅ Client Details Submitted\n\n🏷️ Company: ${company}\n👤 Representative: ${person}\n📧 Email: ${email}\n📞 Phone: ${phone}\n📄 Project:\n${project}`;
            setSummary(summaryText);
            setShowSummary(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("❌ An error occurred while submitting the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-12">
            <div className="client-card w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-green-600 text-center mb-6">🤝 Client Onboarding Form</h1>
                <p className="text-center text-gray-700 mb-5">Enter details to connect as a business client or partner.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-green-700 fw-semibold">🏷️ Company Name</label>
                        <input
                            className="form-control"
                            placeholder="e.g. BhagiCha Pvt. Ltd."
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-green-700 fw-semibold">👤 Contact Person</label>
                        <input
                            className="form-control"
                            placeholder="Full Name of representative"
                            value={person}
                            onChange={e => setPerson(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-green-700 fw-semibold">📧 Email</label>
                        <input
                            className="form-control"
                            placeholder="e.g. contact@bhagicha.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-green-700 fw-semibold">📞 Phone Number</label>
                        <input
                            className="form-control"
                            placeholder="e.g. +91 9876543210"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-green-700 fw-semibold">📄 Project Description</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Write a brief about your need/project..."
                            value={project}
                            onChange={e => setProject(e.target.value)}
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-client w-full" 
                        disabled={isLoading}
                    >
                            {isLoading ? <Loader /> : "🚀 Submit Client Info"}
                    </button>
                </form>
                <div className={`summary-output${showSummary ? '' : ' d-none'}`} style={{whiteSpace: 'pre-line', marginTop: '1rem'}}>
                    {summary}
                </div>
            </div>
        </div>
    );
};

export default ClientOnboarding;