import React from 'react';
import "../App.css";

export default function Footer() {
    return (
        <footer className="footer" >
            <div className="footerContainer">
                <p>Copyright © <a href="https://github.com/jmasone15">Jordan Masone</a> {new Date().getFullYear()}.</p>
            </div>
        </footer>
    )
}
