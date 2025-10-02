import "../css/ArcDiv.css";
export default function DigitalCampus() {
    return (
        <div className="arc-section">
            <div className="circle"></div>
            <h3 className="arc-title">
                Let’s Build Your Digital Campus Together
            </h3>
            <p className="arc-text">
                Cyber24 delivers secure connectivity, intelligent learning tools, and
                data-driven insights, all designed to enhance your school experience.
            </p>
            <button
                onClick={() => (window.location.href = "https://cyber24.com.au/contact/")}
                className="arc-button"
            >
                Get Started Today
            </button>
        </div>
    );
}